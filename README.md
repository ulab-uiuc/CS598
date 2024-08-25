# CS598: Deep Learning with Graphs

This is a repository for the website of CS598: Deep Learning with Graphs at University of Illinois at Urbana-Champaign, instructed by Prof. Jiaxuan You. The website is developed with `node.js`.

## Install

+ Install `node.js`. For Mac users, run the following code in your terminal.

```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# download and install Node.js (you may need to restart the terminal)
nvm install 21
# verifies the right Node.js version is in the environment
node -v
# verifies the right npm version is in the environment
npm -v
```

+ Install dependencies. Enter the root directory and run the following code in your terminal.

```bash
npm install
```

## Develop

+ To change the content of different sessions, edit the code in `src`. 
+ To start a server in the developing environment, run the following code. In default settings, we can browse the website at http://localhost:3000/CS598/.

```bash
npm start
```

## Deploy

+ To deploy the changes to the course website, run the following code in your terminal. The whole website will be **automatically** deployed at https://ulab-uiuc.github.io/CS598/ or http://courses.grainger.illinois.edu/cs598you/fa2024/.

```bash
npm run deploy
```
