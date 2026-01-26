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
  height: 500,
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

export const barGroupSpec = {
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
  height: 500,
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
  },
  label: {
    visible: true
  }
};

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
  height: 500,
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
  },
  indicator: {
    visible: true
  },
  label: {
    visible: true
  }
};

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
  height: 500,
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

export const barStackedHorizontalSpec = {
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
      { type: 'Democracies', year: '1930', value: 22 },
      { type: 'Democracies', year: '1940', value: 13 },
      { type: 'Democracies', year: '1950', value: 25 },
      { type: 'Democracies', year: '1960', value: 29 },
      { type: 'Democracies', year: '1970', value: 38 },
      { type: 'Democracies', year: '1980', value: 41 },
      { type: 'Democracies', year: '1990', value: 57 },
      { type: 'Price', year: '1930', value: 56 },
      { type: 'Price', year: '1940', value: 122 },
      { type: 'Price', year: '1950', value: 72 },
      { type: 'Price', year: '1960', value: 82 },
      { type: 'Price', year: '1970', value: 67 },
      { type: 'Price', year: '1980', value: 89 },
      { type: 'Price', year: '1990', value: 60 },
      { type: 'D', year: '1930', value: 56 },
      { type: 'D', year: '1940', value: 122 },
      { type: 'D', year: '1950', value: 72 },
      { type: 'D', year: '1960', value: 82 },
      { type: 'D', year: '1970', value: 67 },
      { type: 'D', year: '1980', value: 89 },
      { type: 'D', year: '1990', value: 60 },
      { type: 'E', year: '1930', value: 56 },
      { type: 'E', year: '1940', value: 122 },
      { type: 'E', year: '1950', value: 72 },
      { type: 'E', year: '1960', value: 82 },
      { type: 'E', year: '1970', value: 67 },
      { type: 'E', year: '1980', value: 89 },
      { type: 'E', year: '1990', value: 60 }
    ]
  },
  height: 500,
  direction: 'horizontal',
  xField: 'value',
  yField: 'year',
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
  },
  indicator: {
    visible: true
  }
};

export const barStackedPercentSpec = {
  type: 'bar',
  stack: true,
  percent: true,
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
  height: 500,
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
  label: {
    visible: true,
    position: 'inside'
  }
};

export const lineSpec = {
  type: 'line',
  data: {
    values: [
      { type: 'Nail polish', country: 'Africa', value: 4229 },
      { type: 'Nail polish', country: 'EU', value: 4376 },
      { type: 'Nail polish', country: 'China', value: 3054 },
      { type: 'Nail polish', country: 'USA', value: 12814 },
      { type: 'Eyebrow pencil', country: 'Africa', value: 3932 },
      { type: 'Eyebrow pencil', country: 'EU', value: 3987 },
      { type: 'Eyebrow pencil', country: 'China', value: 5067 },
      { type: 'Eyebrow pencil', country: 'USA', value: 13012 },
      { type: 'Rouge', country: 'Africa', value: 5221 },
      { type: 'Rouge', country: 'EU', value: 3574 },
      { type: 'Rouge', country: 'China', value: 7004 },
      { type: 'Rouge', country: 'USA', value: 11624 },
      { type: 'Lipstick', country: 'Africa', value: 9256 },
      { type: 'Lipstick', country: 'EU', value: 4376 },
      { type: 'Lipstick', country: 'China', value: 9054 },
      { type: 'Lipstick', country: 'USA', value: 8814 },
      { type: 'Eyeshadows', country: 'Africa', value: 3308 },
      { type: 'Eyeshadows', country: 'EU', value: 4572 },
      { type: 'Eyeshadows', country: 'China', value: 12043 },
      { type: 'Eyeshadows', country: 'USA', value: 12998 },
      { type: 'Eyeliner', country: 'Africa', value: 5432 },
      { type: 'Eyeliner', country: 'EU', value: 3417 },
      { type: 'Eyeliner', country: 'China', value: 15067 },
      { type: 'Eyeliner', country: 'USA', value: 12321 },
      { type: 'Foundation', country: 'Africa', value: 13701 },
      { type: 'Foundation', country: 'EU', value: 5231 },
      { type: 'Foundation', country: 'China', value: 10119 },
      { type: 'Foundation', country: 'USA', value: 10342 },
      { type: 'Lip gloss', country: 'Africa', value: 4008 },
      { type: 'Lip gloss', country: 'EU', value: 4572 },
      { type: 'Lip gloss', country: 'China', value: 12043 },
      { type: 'Lip gloss', country: 'USA', value: 22998 },
      { type: 'Mascara', country: 'Africa', value: 18712 },
      { type: 'Mascara', country: 'EU', value: 6134 },
      { type: 'Mascara', country: 'China', value: 10419 },
      { type: 'Mascara', country: 'USA', value: 11261 }
    ]
  },
  height: 600,
  xField: ['type'],
  yField: 'value',
  seriesField: 'country',
  legends: {
    visible: true
  },
  indicator: {
    visible: true
  }
};

export const pieSpec = {
  type: 'pie',
  data: [
    {
      id: 'id0',
      values: [
        { type: 'oxygen', value: '46.60' },
        { type: 'silicon', value: '27.72' },
        { type: 'aluminum', value: '8.13' },
        { type: 'iron', value: '5' },
        { type: 'calcium', value: '3.63' },
        { type: 'sodium', value: '2.83' },
        { type: 'potassium', value: '2.59' },
        { type: 'others', value: '3.5' }
      ]
    }
  ],
  valueField: 'value',
  categoryField: 'type',
  legends: {
    visible: true,
    orient: 'right'
  },
  tooltip: {
    mark: {
      content: [
        {
          key: datum => datum['type'],
          value: datum => datum['value'] + '%'
        }
      ]
    }
  }
};

export const radarSpec = {
  type: 'radar',
  data: [
    {
      id: 'radarData',
      values: [
        {
          key: 'Strength',
          value: 6,
          type: 'Risk'
        },
        {
          key: 'Speed',
          value: 5,
          type: 'Risk'
        },
        {
          key: 'Shooting',
          value: 3,
          type: 'Risk'
        },
        {
          key: 'Endurance',
          value: 4,
          type: 'Risk'
        },
        {
          key: 'Precision',
          value: 5,
          type: 'Risk'
        },
        {
          key: 'Strength',
          value: 5,
          type: 'Average risk'
        },
        {
          key: 'Speed',
          value: 5,
          type: 'Average risk'
        },
        {
          key: 'Shooting',
          value: 5,
          type: 'Average risk'
        },
        {
          key: 'Endurance',
          value: 5,
          type: 'Average risk'
        },
        {
          key: 'Precision',
          value: 5,
          type: 'Average risk'
        }
      ]
    }
  ],
  categoryField: 'key',
  valueField: 'value',
  seriesField: 'type',
  label: {
    visible: true, //展示label
    style: {
      visible: datum => datum.type !== 'Average risk'
    }
  },
  point: {
    visible: true, // disable point
    style: {
      visible: datum => datum.type !== 'Average risk'
    }
  },
  legends: {
    visible: true
  },
  area: {
    visible: true,
    style: {
      visible: datum => datum.type !== 'Average risk'
    }
  },
  outerRadius: 1,
  axes: [
    {
      orient: 'radius', // radius axis
      zIndex: 100,
      min: 0,
      max: 8
    },
    {
      orient: 'angle', // angle axis
      zIndex: 50
    }
  ]
};

export const funnelSpec = {
  type: 'funnel',
  categoryField: 'name',
  valueField: 'value',
  data: [
    {
      id: 'funnel',
      values: [
        {
          value: 100,
          name: 'Step1'
        },
        {
          value: 80,
          name: 'Step2'
        },
        {
          value: 60,
          name: 'Step3'
        },
        {
          value: 40,
          name: 'Step4'
        },
        {
          value: 20,
          name: 'Step5'
        }
      ]
    }
  ],
  label: {
    visible: true
  },
  legends: {
    visible: true,
    orient: 'bottom'
  }
};

export const areaSpec = {
  type: 'area',
  seriesMark: 'line',
  data: {
    values: [
      { type: 'Nail polish', country: 'Africa', value: 4229 },
      { type: 'Nail polish', country: 'EU', value: 4376 },
      { type: 'Nail polish', country: 'China', value: 3054 },
      { type: 'Nail polish', country: 'USA', value: 12814 },
      { type: 'Eyebrow pencil', country: 'Africa', value: 3932 },
      { type: 'Eyebrow pencil', country: 'EU', value: 3987 },
      { type: 'Eyebrow pencil', country: 'China', value: 5067 },
      { type: 'Eyebrow pencil', country: 'USA', value: 13012 },
      { type: 'Rouge', country: 'Africa', value: 5221 },
      { type: 'Rouge', country: 'EU', value: 3574 },
      { type: 'Rouge', country: 'China', value: 7004 },
      { type: 'Rouge', country: 'USA', value: 11624 },
      { type: 'Lipstick', country: 'Africa', value: 9256 },
      { type: 'Lipstick', country: 'EU', value: 4376 },
      { type: 'Lipstick', country: 'China', value: 9054 },
      { type: 'Lipstick', country: 'USA', value: 8814 },
      { type: 'Eyeshadows', country: 'Africa', value: 3308 },
      { type: 'Eyeshadows', country: 'EU', value: 4572 },
      { type: 'Eyeshadows', country: 'China', value: 12043 },
      { type: 'Eyeshadows', country: 'USA', value: 12998 },
      { type: 'Eyeliner', country: 'Africa', value: 5432 },
      { type: 'Eyeliner', country: 'EU', value: 3417 },
      { type: 'Eyeliner', country: 'China', value: 15067 },
      { type: 'Eyeliner', country: 'USA', value: 12321 },
      { type: 'Foundation', country: 'Africa', value: 13701 },
      { type: 'Foundation', country: 'EU', value: 5231 },
      { type: 'Foundation', country: 'China', value: 10119 },
      { type: 'Foundation', country: 'USA', value: 10342 },
      { type: 'Lip gloss', country: 'Africa', value: 4008 },
      { type: 'Lip gloss', country: 'EU', value: 4572 },
      { type: 'Lip gloss', country: 'China', value: 12043 },
      { type: 'Lip gloss', country: 'USA', value: 22998 },
      { type: 'Mascara', country: 'Africa', value: 18712 },
      { type: 'Mascara', country: 'EU', value: 6134 },
      { type: 'Mascara', country: 'China', value: 10419 },
      { type: 'Mascara', country: 'USA', value: 11261 }
    ]
  },
  height: 600,
  xField: ['type'],
  yField: 'value',
  seriesField: 'country',
  legends: {
    visible: true
  },
  indicator: {
    visible: true
  }
};
