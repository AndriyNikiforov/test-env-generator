module.exports = {
  table: answer => [
    [{
      val: 'Test steps',
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
      val: 'Value',
      opts: {
        cellColWidth: 5000,
        shd: {
          fill: '92CDDC',
          themeFill: 'text1',
          themeFillTint: '80',
        },
      },
    }],
    ['Test title', answer.title],
    ['1.', answer.step1],
    ['2.', answer.step2],
    ['3.', answer.step3],
    ['4.', answer.step4],
    ['5.', answer.step5],
    ['Test data', answer.data],
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
