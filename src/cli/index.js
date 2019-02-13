/* eslint-disable no-useless-escape */
const commander = require('commander');
const { log } = require('console');

const gitCli = require('./git');
const templateCli = require('./template');
const generatorCli = require('./generator');
const documentCli = require('./document');

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
                                                 __     ____
                                                /  |   / ___|
                                        __   __ `| |  / /___
                                        \ \ / /  | |  | ___ \
                                         \ V /  _| |__| \_/ |
                                          \_/   \___(_)_____/
    */
  }).toString()
    .replace(/^[^\/]+\/\*!?/, '')
    .replace(/\*\/[^\/]+$/, ''));
};

/**
 * @description Show version package
 */
commander
  .command('v')
  .description('beautifully version showed')
  .action(() => showText());

/**
 * @description Command call generate documents cli
*/
commander
  .command('doc:gen')
  .description('Command generate documents')
  .action(() => documentCli());

/**
 * @description Command call git cli interface
 */
commander
  .command('git:cli')
  .description('call git cli for generate skeleton from git repository')
  .action(() => gitCli());

/**
 * @description Command call test case cli interface
 */
commander
  .command('test-case:cli')
  .description('call test-case template cli for generate doc files')
  .action(() => templateCli());

/**
 * @description Command call cli for generate skeleton
 */
commander
  .command('test:gen')
  .description('call cli for generate skeleton')
  .action(() => generatorCli());

module.exports = commander;
