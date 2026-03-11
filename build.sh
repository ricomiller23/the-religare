#!/bin/bash
cat head.html > index.html
echo "<style>" >> index.html
cat styles.css >> index.html
echo "</style>" >> index.html
echo "<body>" >> index.html
cat shell_start.html >> index.html
# We'll touch these files so build.sh doesn't fail early
touch screen0.html screen1.html screen2.html screen3a.html screen3b.html screen3c.html screen4.html screen5.html screen6.html screen7.html screen8.html screen9.html data.js
cat screen0.html screen1.html screen2.html screen3a.html screen3b.html screen3c.html screen4.html screen5.html screen6.html screen7.html screen8.html screen9.html >> index.html
echo "<script>" >> index.html
cat data.js app.js >> index.html
echo "</script>" >> index.html
echo "</body></html>" >> index.html
echo "Build complete."
