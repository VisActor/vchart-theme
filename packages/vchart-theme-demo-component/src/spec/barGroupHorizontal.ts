export const barGroupHorizontalSpec = {
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
      { type: 'Democracies', year: '1930', value: 22 },
      { type: 'Democracies', year: '1940', value: 13 },
      { type: 'Democracies', year: '1950', value: 25 },
      { type: 'Democracies', year: '1960', value: 29 },
      { type: 'Democracies', year: '1970', value: 38 },
      { type: 'Democracies', year: '1980', value: 41 },
      { type: 'Democracies', year: '1990', value: 57 }
    ]
  },
  direction: 'horizontal',
  xField: 'value',
  yField: ['year', 'type'],
  seriesField: 'type',
  axes: [
    {
      orient: 'left',
      visible: true,
      domainLine: { visible: true },
      tick: { visible: true }
    },
    {
      orient: 'bottom',
      visible: true,
      domainLine: { visible: false },
      tick: { visible: false }
    }
  ],
  legends: {
    visible: true
  }
};
