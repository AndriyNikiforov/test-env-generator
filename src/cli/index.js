const commander = require('commander');
const gitCli = require('./git');
const dockerCli = require('./files');
const documentCli = require('./document');
const generatorCli = require('./generator');

commander
  .command('file:gen')
  .description('Command generate docker files')
  .action(() => dockerCli());

commander
  .command('doc:gen')
  .description('Command generate documents')
  .action(() => documentCli());

commander
  .command('git:cli')
  .description('Call git cli for generate skeleton from git repository')
  .action(() => gitCli());

commander
  .command('test:gen')
  .description('Call cli for generate skeleton')
  .action(() => generatorCli());

module.exports = {
  cli: () => {
    commander.parse(process.argv);
    if (commander.args.length === 0) commander.help();
  },
};
