'use strict';

const runner = require('./cli');

const cli = () => {
  runner.parse(process.argv);

  if(runner.args.length === 0) runner.help();
};

module.exports = {
  cli: cli
};
