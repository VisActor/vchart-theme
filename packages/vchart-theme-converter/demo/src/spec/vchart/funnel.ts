export const spec = {
  type: 'funnel',
  data: {
    values: [
      { value: 100, name: 'Show' },
      { value: 80, name: 'Click' },
      { value: 60, name: 'Visit' },
      { value: 40, name: 'Inquiry' },
      { value: 20, name: 'Order' }
    ]
  },
  categoryField: 'name',
  valueField: 'value',
  label: {
    visible: true
  },
  legends: {}
};
