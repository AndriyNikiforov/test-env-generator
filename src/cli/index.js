const commander = require('commander');
const figle = require('figlet');
const { log } = require('console');

const gitCli = require('./git');
const templateCli = require('./template');
const generator = require('./generator');
const { pollCase, pollSteps } = require('./document');

/**
 * @description Show version package
 */
commander
  .command('v')
  .description('beautifully version showed')
  .action(() => figle('TEG - qa tool', (err, data) => {
    log(data);
    log('\x1b[36m%s\x1b[0m', '\t\t\t\t\t\t version 1.4');
  }));

/**
 * @description Command generate test steps with your data
 */
commander
  .command('test-steps:doc')
  .description('generate test steps with your data')
  .action(() => pollSteps());

/**
* @description Command generate test case with your data
*/
commander
  .command('utest-case:doc')
  .description('generate test case with your data')
  .action(() => pollCase());

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
  .action(() => generator());

module.exports = commander;
