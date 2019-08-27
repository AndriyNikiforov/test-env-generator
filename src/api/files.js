const { log } = require('console');
const { resolve } = require('path');
const { copyFile } = require('fs');

const getTemplate = async () => {
  await copyFile(resolve(__dirname, '../assets/docs/TEMPLATE_TEST_CASE.xlsx'),
    './test-template-table.xlsx', (err) => {
      if (err) throw new Error(err);
      log('Success');
    });
};

const move = (fileName, afterName) => {
  copyFile(resolve(__dirname, fileName), afterName,
    (err) => {
      if (err) throw new Error(err);
      log('Success');
    });
};

module.exports = {
  getTemplate,
  move,
};
