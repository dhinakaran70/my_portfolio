mkdir legacy
move index.html legacy\
move app.js legacy\
move css legacy\
move images legacy\
move resume legacy\
move target legacy\
call npx -y create-vite@latest temp-app --template react
xcopy temp-app . /E /H /Y
rmdir /s /q temp-app
call npm install
call npm install tailwindcss postcss autoprefixer framer-motion lucide-react react-scroll
call npx tailwindcss init -p
del init.bat
exit
