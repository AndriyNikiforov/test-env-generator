module.exports = [
  {
    type: 'input',
    name: 'fileName',
    message: 'File name:',
  },
  {
    type: 'input',
    name: 'projectName',
    message: 'Project name:',
  },
  {
    type: 'input',
    name: 'testDesignedBy',
    message: 'Test designed by:',
  },
  {
    type: 'input',
    name: 'testTitle',
    message: 'Test title',
  },
  {
    type: 'input',
    name: 'testPriority',
    message: 'Test priority:',
  },
  {
    type: 'input',
    name: 'testExecDate',
    message: 'Test exectuion date',
    validate: (value) => {
      const date = value.match(
        /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
      );

      if (date) { return true; }

      return 'Pleas enter a valid date (DD/MM/YYYY or DD-MM-YYYY)';
    },
  },
  {
    type: 'input',
    name: 'testDesignedDate',
    message: 'Test designed date',
    validate: (value) => {
      const date = value.match(
        /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
      );

      if (date) { return true; }

      return 'Pleas enter a valid date (DD/MM/YYYY or DD-MM-YYYY)';
    },
  },
  {
    type: 'input',
    name: 'testDescription',
    message: 'Test description',
  },
];