@echo off
cd /d "C:\Users\chapm\OneDrive\edc-lv-2026-planner"
git add app.js index.html
git commit -m "Add meet RSVP + platform crew badge on sets + scheduled meets panel"
git push origin main
echo.
echo Done! Press any key to close.
pause > nul
