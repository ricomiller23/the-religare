window.app = {
  state: {
    completedSections: [],
    quizScores: [],
    flashcardsKnown: [],
    timeSpentSeconds: 0,
    startTime: Date.now()
  },

  init() {
    this.loadState();
    this.initCanvas();
    this.bindEvents();
    
    // Setup initial screen
    const hash = window.location.hash.replace('#', '') || 'screen0';
    this.showScreen(hash);

    // Start timer
    setInterval(() => {
      this.state.timeSpentSeconds++;
      if (this.state.timeSpentSeconds % 60 === 0) this.saveState();
    }, 1000);

    // Initial stars rendering
    this.renderNavStars();
  },

  loadState() {
    const saved = localStorage.getItem('religare_state');
    if (saved) {
      try {
        this.state = { ...this.state, ...JSON.parse(saved) };
      } catch (e) { console.error('Error loading state', e); }
    }
  },

  saveState() {
    localStorage.setItem('religare_state', JSON.stringify(this.state));
  },

  markSectionComplete(sectionId) {
    if (!this.state.completedSections.includes(sectionId)) {
      this.state.completedSections.push(sectionId);
      this.saveState();
      this.renderNavStars();
    }
  },

  renderNavStars() {
    const container = document.getElementById('nav-stars');
    if (!container) return;
    const totalPossible = 15;
    const earned = this.state.completedSections.length;
    let html = '';
    for (let i = 0; i < totalPossible; i++) {
      html += `<span class="star ${i < earned ? 'earned' : ''}" title="Earned stars: ${earned}/${totalPossible}">★</span>`;
    }
    container.innerHTML = html;
  },

  showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('header nav button').forEach(el => el.classList.remove('active'));
    
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      window.scrollTo(0, 0);
      window.location.hash = screenId;
      
      const navBtn = document.getElementById(`nav-btn-${screenId}`);
      if (navBtn) navBtn.classList.add('active');

      if (screenId === 'screen7') this.initQuiz();
      if (screenId === 'screen9') this.renderJournal();
    } else {
      console.error('Screen not found:', screenId);
      // Fallback
      if(screenId !== 'screen0') this.showScreen('screen0');
    }
  },

  // Accordion Logic
  toggleAccordion(element) {
    const item = element.parentElement;
    item.classList.toggle('open');
  },

  // Flip Card Logic
  toggleFlipCard(element) {
    element.classList.toggle('flipped');
  },

  // Telescope Modal
  showTelescopeInsight() {
    const unusedInsights = INSIGHTS.filter(i => !this.state.seenInsights?.includes(i));
    let selected;
    if (unusedInsights.length > 0) {
      selected = unusedInsights[Math.floor(Math.random() * unusedInsights.length)];
      if (!this.state.seenInsights) this.state.seenInsights = [];
      this.state.seenInsights.push(selected);
      this.saveState();
    } else {
      selected = INSIGHTS[Math.floor(Math.random() * INSIGHTS.length)];
    }

    const modal = document.getElementById('telescope-modal');
    document.getElementById('telescope-text').innerText = selected;
    modal.classList.add('active');
  },

  closeModal(id) {
    document.getElementById(id).classList.remove('active');
  },

  // Context Modal
  showContextModal(text) {
    const modal = document.getElementById('context-modal');
    document.getElementById('context-text').innerText = text;
    modal.classList.add('active');
  },

  // Starfield Canvas
  initCanvas() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    let width, height;
    
    const stars = [];
    const layers = [
      { count: 50, radius: 0.8, speed: 0.05, opacity: 0.3 },
      { count: 50, radius: 1.2, speed: 0.1, opacity: 0.6 },
      { count: 50, radius: 2.0, speed: 0.2, opacity: 1.0 }
    ];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    
    function createStars() {
      stars.length = 0;
      layers.forEach(layer => {
        for (let i = 0; i < layer.count; i++) {
          stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: layer.radius,
            s: layer.speed,
            o: layer.opacity
          });
        }
      });
    }

    let isVisible = true;
    document.addEventListener("visibilitychange", () => {
      isVisible = !document.hidden;
    });

    function draw() {
      if (!isVisible) {
        requestAnimationFrame(draw);
        return;
      }
      
      ctx.clearRect(0, 0, width, height);
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.o})`;
        ctx.fill();
        
        star.y -= star.s;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
      });
      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => { resize(); createStars(); });
    resize();
    createStars();
    draw();
  },

  // Quiz Engine
  quizState: {
    currentQuestions: [],
    currentIndex: 0,
    score: 0,
    answeredMissed: [] // tracks questions missed this round
  },

  initQuiz() {
    // Shuffle and pick
    const all = [...QUIZ].sort(() => 0.5 - Math.random());
    this.quizState.currentQuestions = all.slice(0, 30); // Use all 30
    this.quizState.currentIndex = 0;
    this.quizState.score = 0;
    this.quizState.answeredMissed = [];
    
    document.getElementById('quiz-intro').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
  },

  startQuiz() {
    document.getElementById('quiz-intro').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    this.renderQuizQuestion();
  },

  renderQuizQuestion() {
    const q = this.quizState.currentQuestions[this.quizState.currentIndex];
    const container = document.getElementById('quiz-q-container');
    document.getElementById('quiz-progress').innerText = `Question ${this.quizState.currentIndex + 1} of ${this.quizState.currentQuestions.length}`;
    
    let html = `<div class="heading-22 text-center">${q.q}</div>`;
    q.options.forEach((opt, idx) => {
      html += `<button class="quiz-option" onclick="app.answerQuiz(${idx}, this)">${String.fromCharCode(65 + idx)}) ${opt}</button>`;
    });
    
    html += `<div id="quiz-feedback" style="display:none; margin-top: 20px; padding: 15px; border-radius: 4px;"></div>`;
    html += `<button id="quiz-next-btn" class="btn-gold" style="display:none; width: 100%; margin-top:20px;" onclick="app.nextQuizQuestion()">NEXT QUESTION →</button>`;
    
    container.innerHTML = html;
  },

  answerQuiz(idx, btnElement) {
    if (document.getElementById('quiz-feedback').style.display === 'block') return; // already answered
    
    const q = this.quizState.currentQuestions[this.quizState.currentIndex];
    const isCorrect = idx === q.a;
    const btns = document.querySelectorAll('.quiz-option');
    
    btns[q.a].classList.add('correct');
    
    const feedback = document.getElementById('quiz-feedback');
    feedback.style.display = 'block';
    
    if (isCorrect) {
      this.quizState.score++;
      btnElement.style.animation = 'starBurst 300ms ease';
      feedback.style.background = 'rgba(46, 204, 138, 0.2)';
      feedback.style.border = '1px solid var(--accent-teal)';
      feedback.innerHTML = `<strong class="text-teal">✓ CORRECT!</strong> ${q.ext}`;
    } else {
      btnElement.classList.add('wrong');
      this.quizState.answeredMissed.push(q);
      feedback.style.background = 'rgba(192, 57, 43, 0.2)';
      feedback.style.border = '1px solid var(--accent-rose)';
      feedback.innerHTML = `<strong class="text-rose">✗ The answer is ${String.fromCharCode(65 + q.a)}.</strong> ${q.ext}`;
    }
    
    document.getElementById('quiz-next-btn').style.display = 'block';
  },

  nextQuizQuestion() {
    this.quizState.currentIndex++;
    if (this.quizState.currentIndex >= this.quizState.currentQuestions.length) {
      this.showQuizResult();
    } else {
      this.renderQuizQuestion();
    }
  },

  showQuizResult() {
    document.getElementById('quiz-container').style.display = 'none';
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.style.display = 'block';
    
    const score = this.quizState.score;
    const total = this.quizState.currentQuestions.length;
    
    // Save score
    this.state.quizScores.push({ date: Date.now(), score, total });
    this.saveState();
    
    let level = "Beginner — 'You are at the eyepiece'";
    if (score > 10) level = "Apprentice — 'The veil is lifting'";
    if (score > 20) level = "Initiate — 'You can read the label'";
    if (score > 25) level = "Adept — 'The telescope is yours'";
    
    let html = `
      <div class="text-center">
        <div class="heading-48 text-gold">${score} / ${total}</div>
        <div class="heading-22">Discernment Level: ${level}</div>
      </div>
      <div class="gold-divider"><span>RESULTS</span></div>
    `;
    
    if (score === total && total === 30) {
      html += `
        <div style="text-align:center; margin: 40px 0; animation: starBurst 2s infinite;">
          <div class="heading-28 text-gold">The telescope does not lie. You have learned to see.</div>
          <p>90% of everything you know is still wrong. Keep looking.</p>
        </div>
      `;
    }
    
    if (this.quizState.answeredMissed.length > 0) {
      html += `<div class="heading-22">Topics to Review:</div><ul>`;
      this.quizState.answeredMissed.forEach(q => {
        html += `<li style="margin-bottom: 10px;">${q.q} <br><a href="#" onclick="app.showScreen('screen3'+ (q.category==='catholicism'?'a':q.category==='zoroastrianism'?'b':'c')); return false;" class="text-gold">Review ${q.category.toUpperCase()} Module →</a></li>`;
      });
      html += `</ul>`;
    }
    
    html += `<div class="text-center"><button class="btn-gold" onclick="app.initQuiz()">TAKE THE QUIZ AGAIN</button></div>`;
    resultDiv.innerHTML = html;
  },

  // Journal Rendering
  renderJournal() {
    // Flashcards
    const fcContainer = document.getElementById('journal-flashcards');
    if (fcContainer) {
      let fhtml = '';
      FLASHCARDS.forEach((card, idx) => {
        fhtml += `
          <div class="flip-card" onclick="app.toggleFlipCard(this)" style="max-width:300px; display:inline-block; margin: 10px;">
            <div class="flip-card-inner">
              <div class="flip-card-front">${card.f}</div>
              <div class="flip-card-back">${card.b}</div>
            </div>
          </div>
        `;
      });
      fcContainer.innerHTML = fhtml;
    }

    // Notes
    ['catholicism', 'zoroastrianism', 'rosicrucianism'].forEach(rel => {
      const ta = document.getElementById(`notes-${rel}`);
      if (ta) {
        ta.value = this.state[`notes_${rel}`] || '';
        ta.oninput = (e) => {
          this.state[`notes_${rel}`] = e.target.value;
          this.saveState();
        };
      }
    });
    
    // Stats
    const statsContainer = document.getElementById('journal-stats');
    if (statsContainer) {
      const bestScore = this.state.quizScores.reduce((max, s) => s.score > max ? s.score : max, 0);
      const mins = Math.floor(this.state.timeSpentSeconds / 60);
      statsContainer.innerHTML = `
        <p><strong>Total Time in Observatory:</strong> ${mins} minutes</p>
        <p><strong>Highest Quiz Score:</strong> ${bestScore} / 30</p>
        <p><strong>Modules Unlocked:</strong> ${this.state.completedSections.length} / 15</p>
      `;
    }
  },

  // Toggle Compare Drawer
  showCompareDrawer() {
    this.showScreen('screen4'); // Currently directs to screen4 full view for simplicity
  },

  bindEvents() {
    // Telescope button
    const floatBtn = document.createElement('button');
    floatBtn.id = 'telescope-btn';
    floatBtn.innerHTML = '🔭';
    floatBtn.title = 'Quick Insight';
    floatBtn.onclick = () => this.showTelescopeInsight();
    document.body.appendChild(floatBtn);

    // Modals
    const modalsHtml = `
      <div id="telescope-modal" class="modal-overlay">
        <div class="modal-content">
          <button class="modal-close" onclick="app.closeModal('telescope-modal')">×</button>
          <div class="heading-22 text-gold" style="font-family:'Cinzel',serif;">🔭 Galileo says:</div>
          <p id="telescope-text" style="font-size:18px; line-height:1.6;"></p>
        </div>
      </div>
      <div id="context-modal" class="modal-overlay">
        <div class="modal-content">
          <button class="modal-close" onclick="app.closeModal('context-modal')">×</button>
          <div class="heading-22 text-gold">📅 Place in Time</div>
          <p id="context-text" style="font-size:16px;"></p>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalsHtml);
  }
};

window.onload = () => app.init();
