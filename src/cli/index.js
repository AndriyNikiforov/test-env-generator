const commander = require('commander');
const gitCli = require('./components/git');
const gitUser = require('./components/gitUser');
const filesCli = require('./components/files');
const generatorCli = require('./components/generator');

commander
  .command('file:cli')
  .description('Command generate files')
  .action(() => filesCli());

commander
  .command('git:cli')
  .description('Command generate skeleton from git repository')
  .action(() => gitCli());

commander
  .command('user:rep')
  .description('Command generate skeleton from pasted url')
  .action(() => gitUser());

commander
  .command('test:cli')
  .description('Command generating skeleton from local repository')
  .action(() => generatorCli());

module.exports = () => {
  commander.parse(process.argv);
  if (commander.args.length === 0) commander.help();
};
