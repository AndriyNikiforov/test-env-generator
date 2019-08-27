const { log } = require('console');
const { resolve } = require('path');
const { copyFile } = require('fs');

const getTemplate = async () => {
  const pathTo = resolve(__dirname, '../assets/docs/TEMPLATE_TEST_CASE.xlsx');
  const path = './test-template-table.xlsx';

  await copyFile(pathTo, path, (err) => {
    if (err) throw err;
    log('Success');
  });
};

const move = (fileName, afterName) => {
  const pathTo = resolve(__dirname, fileName);

  copyFile(pathTo, afterName, (err) => {
    if (err) throw err;
    log('Success');
  });
};

module.exports = {
  getTemplate,
  move,
};
