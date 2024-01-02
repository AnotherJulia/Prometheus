#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to run command: ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];

const gitCheckoutCommand = `git clone --depth 1 https://github.com/AnotherJulia/Prometheus ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning repo: ${repoName}`);
const gitCheckoutCommandSuccess = runCommand(gitCheckoutCommand);
if (!gitCheckoutCommandSuccess) {
  process.exit(1);
}

console.log(`Installing dependencies for ${repoName}`);
const installDepsCommandSuccess = runCommand(installDepsCommand);
if (!installDepsCommandSuccess) {
  process.exit(1);
}

console.log(`Successfully set up project ${repoName} using prometheus`);
console.log(`To get started, run: cd ${repoName} && npm start`);
