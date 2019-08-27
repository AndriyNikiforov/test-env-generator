const commander = require('commander');
const gitCli = require('./git');
const filesCli = require('./files');
const generatorCli = require('./generator');

commander
  .command('file:gen')
  .description('Command generate files')
  .action(() => filesCli());

commander
  .command('git:cli')
  .description('Command generate skeleton from git repository')
  .action(() => gitCli());

commander
  .command('test:gen')
  .description('Command generating skeleton from local repository')
  .action(() => generatorCli());

module.exports = () => {
  commander.parse(process.argv);
  if (commander.args.length === 0) commander.help();
};
