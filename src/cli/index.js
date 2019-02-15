/* eslint-disable no-useless-escape */
const commander = require('commander');
const { log } = require('console');

const joke = require('../api/joke');
const gitCli = require('./git');
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
                                                 __    ______
                                                /  |  |___  /
                                         __   __`| |     / /
                                         \ \ / / | |    / /
                                          \ V / _| |__./ /
                                           \_/  \___(_)_/
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

commander
  .command('s')
  .description('???')
  .action(() => joke());

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
 * @description Command call cli for generate skeleton
 */
commander
  .command('test:gen')
  .description('call cli for generate skeleton')
  .action(() => generatorCli());

module.exports = commander;
