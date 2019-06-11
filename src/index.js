const runner = require('./cli');

/**
 * Create runner object
 */

module.exports = {
  cli: () => {
    runner.parse(process.argv);
    if (runner.args.length === 0) runner.help();
  },
};
