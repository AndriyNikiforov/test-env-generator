module.exports = {
  table: answer => [
    [{
      val: 'Test case',
      opts: {
        cellColWidth: 3200,
        b: true,
        sz: 24,
        shd: {
          fill: '92CDDC',
          themeFill: 'text1',
          themeFillTint: '80',
        },
        fontFamily: 'Times New Roman',
      },
    }, {
      val: '',
      opts: {
        cellColWidth: 3200,
        shd: {
          fill: '92CDDC',
          themeFill: 'text1',
          themeFillTint: '80',
        },
      },
    }],
    ['Test title', answer.testTitle],
    ['Test designed by', answer.testDesignedBy],
    ['Test priority', answer.testPriority],
    ['Test description', answer.testDescription],
    ['Test execution date', answer.testExecDate],
    ['Test designed date', answer.testDesignedDate],
  ],
  tableStyle: {
    tableColWidth: 3200,
    tableSize: 16,
    tableColor: 'ada',
    tableAlign: 'left',
    tableFontFamily: 'Times New Roman',
  },
};
