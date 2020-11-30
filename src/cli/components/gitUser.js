const { spawn } = require('child_process');
const { prompt } = require('inquirer');
const { makeArch } = require('../../api/zip');
const { gitUserQuestion } = require('./config');

const parseGithubUrl = (url) => {
  const matches = url.match(/.*?github.com\/([\w]+)\/([\w-]+)/);

  if (matches && matches.length === 3) {
    return matches[2];
  }

  return false;
};

const cloneSkeleton = (link, folderName) => {
  const process = spawn('git', ['clone', link]);
  process.on('close', () => makeArch('skeleton', folderName));
  process.on('error', (err) => { throw err; });
};

const gitUser = () => {
  prompt(gitUserQuestion)
    .then((answer) => {
      const { gitUserRepository } = answer;
      const folderName = parseGithubUrl(gitUserRepository);
      cloneSkeleton(gitUserRepository, folderName);

      return 'Success';
    });
};

module.exports = gitUser;
