const gitClone = require('gitclone');
const { error } = require('console');
const { makeArch } = require('./zip');

module.exports = {
  cloneSkeleton: async (folderName) => {
    await gitClone(`AndriyNikiforov/${folderName}`, (err) => {
      if (err) error(err);
      makeArch('skeleton', folderName);
    });
  },
};
