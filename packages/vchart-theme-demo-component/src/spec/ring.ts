export const ringSpec = {
  type: 'pie',
  data: [
    {
      id: 'id0',
      values: [
        { type: 'Category 1', value: '0.38' },
        { type: 'Category 2', value: '0.26' },
        { type: 'Category 3', value: '0.36' }
      ]
    }
  ],
  valueField: 'value',
  categoryField: 'type',
  legends: {
    visible: true,
    orient: 'bottom'
  },
  interactions: [
    {
      type: 'element-active-by-legend',
      state: 'active'
    }
  ],
  pie: {
    state: {
      active: {
        lineWidth: 0
      }
    }
  },
  label: {
    formatMethod: (value: any, data: any) => {
      return {
        type: 'rich',
        text: [
          {
            text: `${data.value}\n`,
            fontSize: 18,
            fontWeight: 'bold',
            fill: 'black'
          },
          {
            text: data.type,
            fill: '#595959'
          }
        ]
      };
    }
  },
  indicator: {
    visible: true,
    trigger: 'none',
    title: {
      visible: true,
      style: {
        text: '饼图',
        fontSize: 30
      }
    }
  }
};
