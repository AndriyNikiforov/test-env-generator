const runner = require('./cli');

module.exports = {
  cli: () => {
    runner.parse(process.argv);
    if (runner.args.length === 0) runner.help();
  },
};
