const commander = require('commander');
const { log } = require('console');

const gitCli = require('./git');
const configCli = require('../api/config');
const dockerCli = require('./docker');
const documentCli = require('./document');
const generatorCli = require('./generator');

commander
  .command('v')
  .description('version')
  .action(() => log('v 2.0'));

commander
  .command('docker:gen')
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

commander
  .command('config:gen')
  .description('Generate chrome config')
  .action(() => configCli());

module.exports = commander;
