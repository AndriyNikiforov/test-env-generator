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
        font_face: 'Times New Roman',
      },
    }, {
      val: '',
      opts: {
        cellColWidth: 5000,
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
    ['Expected results', answer.testExpecRes],
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
  config: {
    type: 'docx',
    orientation: 'portrait',
    pageMargins: {
      top: 1000,
      left: 1000,
      right: 1000,
      bottom: 1000,
    },
  },
  projectTextConfig: {
    font_size: 28,
    bold: true,
    align: 'left',
    font_face: 'Time New Roman',
  },
};
