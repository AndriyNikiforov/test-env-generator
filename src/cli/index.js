/* eslint-disable no-useless-escape */
const commander = require('commander');
const { log } = require('console');

const gitCli = require('./git');
const dockerCli = require('./docker');
const documentCli = require('./document');
const generatorCli = require('./generator');

const showText = () => {
  log((() => {
    /*

 _____ _____ _____                          _              _
|_   _|  ___|  __ \                        | |            | |
  | | | |__ | |  \/  ______    __ _  __ _  | |_ ___   ___ | |
  | | |  __|| | __  |______|  / _` |/ _` | | __/ _ \ / _ \| |
  | | | |___| |_\ \          | (_| | (_| | | || (_) | (_) | |
  \_/ \____/ \____/           \__, |\__,_|  \__\___/ \___/|_|
                                 | |
                                 |_|
                                                _____  _____
                                               / __  \|  _  |
                                        __   __`' / /'| |/' |
                                        \ \ / /  / /  |  /| |
                                         \ V / ./ /___\ |_/ /
                                          \_/  \_____(_)___/

                                          */
  }).toString()
    .replace(/^[^\/]+\/\*!?/, '')
    .replace(/\*\/[^\/]+$/, ''));
};

commander
  .command('v')
  .description('version')
  .action(() => showText());

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

module.exports = commander;
