Run cmd as administrator

===================(PS/PowerShell)===================
Get-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned
A

===================(To go forward without retyping the first dir)===================
cd ./
===================(To go back)===================
cd ..

cd path-to-project\'In-Bang Website Project'\django_project\

cd ./react_app
cd ./django_project

**to go back**
cd ..

to view project:
cd ./react_app
<<<<<<< Updated upstream
npm start
=======
npm start

npm list react-router-dom
└── react-router-dom@6.21.3

npm run build
npm run dev

npm -v
npm install
npm install -g npm@latest
npm install axios
npm install react-refresh
npm install react-router-dom
npm install express nodemailer
npm install express nodemailer googleapis axios
npm install @mui/material @emotion/react @emotion/styled
npm install vite
npm install -g vite
npm init @vitejs/app
npm install react-redux
npm install redux-thunk
npm install redux
npm install redux @reduxjs/toolkit redux-thunk
npm install vite --save-dev
npm update
npm update react-router-dom

***(OTP)***
npm install aws-sdk

npm install --global yarn
yarn add @popperjs/core
yarn add redux @reduxjs/toolkit redux-thunk
yarn add nodemailer
yarn add react-router-dom
yarn upgrade
yarn --version
yarn upgrade react-router-dom

npm cache clean --force
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json

npm config set strict-ssl false
npm config set registry https://registry.npmjs.org/

CPE-202_GROUP5
In-Bang-Website-Project


CPE202_GROUP5_REPORT1
apdejesus@hau.edu.ph



===================(GITHUB)===================

In-Bang-Website-Project
Group5_CPE202_DSALGO

…or create a new repository on the command line
echo "# In-Bang-Website-Project" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/C19rk/In-Bang-Website-Project.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/C19rk/In-Bang-Website-Project.git
git branch -M main
git push -u origin main

===================(Large Files?)===================

***(Error)***
remote: Resolving deltas: 100% (7676/7676), done.
remote: warning: See https://gh.io/lfs for more information.
remote: warning: File react_app/node_modules/.cache/default-development/6.pack is 60.74 MB; this is larger than GitHub's recommended maximum file size of 50.00 MB
remote: warning: File react_app/node_modules/.cache/default-development/2.pack is 60.75 MB; this is larger than GitHub's recommended maximum file size of 50.00 MB
remote: warning: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.       
To https://github.com/C19rk/In-Bang-Website-Project.git
 * [new branch]        main -> main
branch 'main' set up to track 'origin/main'.

***(Fix)***
git lfs install
git lfs track "react_app/node_modules/.cache/default-development/6.pack"
git lfs track "react_app/node_modules/.cache/default-development/2.pack"
git add .
git commit -m "Add large files to Git LFS tracking"
git push -u origin main

===================(git clone "url")===================

***(example)***
curl -o package.json https://raw.githubusercontent.com/zanra22/dsalgo-q4/master/frontend/package.json

curl -o package-lock.json https://raw.githubusercontent.com/zanra22/dsalgo-q4/master/frontend/package-lock.json

curl -o vite.config.js https://raw.githubusercontent.com/zanra22/dsalgo-q4/master/frontend/vite.config.js
===================(NOT WORKIING?!)===================
delete .git folder to prevent any submodule folder push to GitHub
git checkout main
git pull origin main
git add .
git commit -m "Say something"
git push origin main




git add .
git add -A
git commit -m "initial commit"
git push origin main
git push origin master
git push --recurse-submodules
git push --recurse-submodules=on-demand
git push --recurse-submodules=check


git submodule update --init --recursive
git push origin --delete master
git push origin --delete main


cd your_submodule
git checkout master
git commit -a -m "commit in submodule"
git push
cd ../..
git add your_submodule
git commit -m "Updated submodule"




# Add the changes to the staging area
git add .

# Commit the changes
git commit -m "Committing changes before switching to main branch"

# Switch to the main branch
git checkout main
# Stash your changes
git stash

# Switch to the main branch
git checkout main

# Apply the changes from the stash to the new branch
git stash apply
# Pull changes from the remote main branch
git pull origin main

# Push your changes to the remote main branch
git push origin main
>>>>>>> Stashed changes
