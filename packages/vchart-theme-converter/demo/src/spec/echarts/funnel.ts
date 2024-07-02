export const spec = {
  legend: {
    data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
  },
  series: [
    {
      name: 'Funnel',
      type: 'funnel',
      label: {
        show: true
      },
      labelLine: {},
      data: [
        { value: 100, name: 'Show' },
        { value: 80, name: 'Click' },
        { value: 60, name: 'Visit' },
        { value: 40, name: 'Inquiry' },
        { value: 20, name: 'Order' }
      ]
    }
  ]
};
