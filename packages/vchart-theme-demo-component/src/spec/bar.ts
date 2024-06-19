export const barSpec = {
  type: 'bar',
  data: {
    values: [
      { type: 'Autocracies', year: '1930', value: 129 },
      { type: 'Autocracies', year: '1940', value: 133 },
      { type: 'Autocracies', year: '1950', value: 130 },
      { type: 'Autocracies', year: '1960', value: 126 },
      { type: 'Autocracies', year: '1970', value: 117 },
      { type: 'Autocracies', year: '1980', value: 114 },
      { type: 'Autocracies', year: '1990', value: 111 },
      { type: 'Autocracies', year: '2000', value: 89 },
      { type: 'Autocracies', year: '2010', value: 80 },
      { type: 'Autocracies', year: '2018', value: 80 }
    ]
  },
  xField: ['year', 'type'],
  yField: 'value',
  seriesField: 'type',
  axes: [
    {
      orient: 'bottom',
      visible: true,
      domainLine: { visible: true },
      tick: { visible: true }
    },
    {
      orient: 'left',
      visible: true,
      domainLine: { visible: false },
      tick: { visible: false }
    }
  ],
  legends: {
    visible: true
  },
  indicator: {
    visible: true
  }
};
