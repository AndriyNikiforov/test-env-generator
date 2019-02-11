const gitClone = require('gitclone');
const { log } = require('console');
const { makeArch } = require('./zip');

module.exports = {
  cloneSkeleton: async (folderName) => {
    await gitClone(`AndriyNikiforov/${folderName}`, (err) => {
      if (err) log(err);
      makeArch('skeleton', folderName);
    });
  },
};
