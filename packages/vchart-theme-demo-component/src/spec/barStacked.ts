export const barStackedSpec = {
  type: 'bar',
  //stack: true,
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
      { type: 'Autocracies', year: '2018', value: 80 },
      { type: 'Democracies', year: '1930', value: 22 },
      { type: 'Democracies', year: '1940', value: 13 },
      { type: 'Democracies', year: '1950', value: 25 },
      { type: 'Democracies', year: '1960', value: 29 },
      { type: 'Democracies', year: '1970', value: 38 },
      { type: 'Democracies', year: '1980', value: 41 },
      { type: 'Democracies', year: '1990', value: 57 },
      { type: 'Democracies', year: '2000', value: 87 },
      { type: 'Democracies', year: '2010', value: 98 },
      { type: 'Democracies', year: '2018', value: 99 },
      { type: 'Price', year: '1930', value: 56 },
      { type: 'Price', year: '1940', value: 122 },
      { type: 'Price', year: '1950', value: 72 },
      { type: 'Price', year: '1960', value: 82 },
      { type: 'Price', year: '1970', value: 67 },
      { type: 'Price', year: '1980', value: 89 },
      { type: 'Price', year: '1990', value: 60 },
      { type: 'Price', year: '2000', value: 123 },
      { type: 'Price', year: '2010', value: 111 },
      { type: 'Price', year: '2018', value: 99 }
    ]
  },
  xField: 'year',
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
