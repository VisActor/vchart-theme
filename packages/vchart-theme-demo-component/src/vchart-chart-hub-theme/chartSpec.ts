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
    visible: false
  }
};

export const lineSpec = {
  type: 'line',
  data: {
    values: [
      { type: 'Nail polish', country: 'Africa', value: 4229 },
      { type: 'Nail polish', country: 'China', value: 3054 },
      { type: 'Nail polish', country: 'USA', value: 12814 },
      { type: 'Eyebrow pencil', country: 'Africa', value: 3932 },
      { type: 'Eyebrow pencil', country: 'China', value: 5067 },
      { type: 'Eyebrow pencil', country: 'USA', value: 13012 },
      { type: 'Rouge', country: 'Africa', value: 5221 },
      { type: 'Rouge', country: 'China', value: 7004 },
      { type: 'Rouge', country: 'USA', value: 11624 },
      { type: 'Lipstick', country: 'Africa', value: 9256 },
      { type: 'Lipstick', country: 'China', value: 9054 },
      { type: 'Lipstick', country: 'USA', value: 8814 },
      { type: 'Eyeshadows', country: 'Africa', value: 3308 },
      { type: 'Eyeshadows', country: 'China', value: 12043 },
      { type: 'Eyeshadows', country: 'USA', value: 12998 },
      { type: 'Eyeliner', country: 'Africa', value: 5432 },
      { type: 'Eyeliner', country: 'China', value: 15067 },
      { type: 'Eyeliner', country: 'USA', value: 12321 },
      { type: 'Foundation', country: 'Africa', value: 13701 },
      { type: 'Foundation', country: 'China', value: 10119 },
      { type: 'Foundation', country: 'USA', value: 10342 },
      { type: 'Lip gloss', country: 'Africa', value: 4008 },
      { type: 'Lip gloss', country: 'China', value: 12043 },
      { type: 'Lip gloss', country: 'USA', value: 22998 },
      { type: 'Mascara', country: 'Africa', value: 18712 },
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
  point: {
    state: {
      dimension_hover: {
        visible: true,
        size: 12
      }
    }
  },
  line: {
    state: {
      active: {
        lineWidth: 3
      }
    }
  },
  interactions: [
    {
      type: 'element-active-by-legend',
      state: 'active'
    }
  ],
  crosshair: {
    xField: {
      line: {
        type: 'line',
        style: {
          lineWidth: 1
        }
      }
    }
  }
};

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

export const pieSpec = {
  type: 'pie',
  innerRadius: 0,
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
  point: {
    state: {
      dimension_hover: {
        visible: true,
        size: 6
      }
    }
  },
  line: {
    state: {
      active: {
        lineWidth: 2
      }
    }
  },
  area: {
    visible: true,
    state: {
      active: {
        fillOpacity: 0
      }
    }
  },
  crosshair: {
    categoryField: {
      line: {
        style: { lineWidth: 1 }
      }
    }
  },
  legends: {
    visible: true
  },
  outerRadius: 0.8,
  interactions: [
    {
      type: 'element-active-by-legend',
      state: 'active'
    }
  ],
  axes: [
    {
      orient: 'radius', // radius axis
      zIndex: 100,
      min: 0,
      max: 8,
      grid: { smooth: false },
      label: { visible: true }
    },
    {
      orient: 'angle', // angle axis
      zIndex: 50,
      grid: { smooth: false },
      domainLine: { visible: false }
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
      { type: 'Nail polish', country: 'China', value: 3054 },
      { type: 'Nail polish', country: 'USA', value: 12814 },
      { type: 'Eyebrow pencil', country: 'Africa', value: 3932 },
      { type: 'Eyebrow pencil', country: 'China', value: 5067 },
      { type: 'Eyebrow pencil', country: 'USA', value: 13012 },
      { type: 'Rouge', country: 'Africa', value: 5221 },
      { type: 'Rouge', country: 'China', value: 7004 },
      { type: 'Rouge', country: 'USA', value: 11624 },
      { type: 'Lipstick', country: 'Africa', value: 9256 },
      { type: 'Lipstick', country: 'China', value: 9054 },
      { type: 'Lipstick', country: 'USA', value: 8814 },
      { type: 'Eyeshadows', country: 'Africa', value: 3308 },
      { type: 'Eyeshadows', country: 'China', value: 12043 },
      { type: 'Eyeshadows', country: 'USA', value: 12998 },
      { type: 'Eyeliner', country: 'Africa', value: 5432 },
      { type: 'Eyeliner', country: 'China', value: 15067 },
      { type: 'Eyeliner', country: 'USA', value: 12321 },
      { type: 'Foundation', country: 'Africa', value: 13701 },
      { type: 'Foundation', country: 'China', value: 10119 },
      { type: 'Foundation', country: 'USA', value: 10342 },
      { type: 'Lip gloss', country: 'Africa', value: 4008 },
      { type: 'Lip gloss', country: 'China', value: 12043 },
      { type: 'Lip gloss', country: 'USA', value: 22998 },
      { type: 'Mascara', country: 'Africa', value: 18712 },
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
  line: {
    style: {
      curveType: 'linear'
    }
  },
  point: {
    state: {
      dimension_hover: {
        visible: true,
        size: 12
      }
    }
  },
  crosshair: {
    xField: {
      line: {
        type: 'line',
        style: {
          lineWidth: 1
        }
      }
    }
  },
  stack: false
};

export const gaugeSpec = {
  type: 'gauge',
  data: [
    {
      id: 'id0',
      values: [
        {
          type: '目标A',
          value: 45
        }
      ]
    }
  ],
  categoryField: 'type',
  valueField: 'value',
  outerRadius: 0.8,
  innerRadius: 0.7,
  startAngle: -180,
  endAngle: 0,
  indicator: [
    {
      visible: true,
      title: {
        style: {
          text: '45',
          fontSize: 60,
          fontWeight: 800
        }
      }
    }
  ],
  axes: [
    {
      type: 'linear',
      orient: 'angle',
      min: 0,
      max: 50,
      offset: 20,
      radius: 0.81,
      grid: { visible: false },
      tick: { visible: true, tickSize: 5, style: { lineWidth: 1 } },
      subTick: { visible: true, tickSize: 3, style: { lineWidth: 1 } },
      label: { visible: true, style: { fill: 'black', fontSize: 12 } }
    }
  ]
};

export const horizontalBarSpec = {
  type: 'bar',
  data: [
    {
      id: 'barData',
      values: [
        {
          province: '北京',
          value: 3080,
          type: 'top1'
        },
        {
          province: '天津',
          value: 2880,
          type: 'top2'
        },
        {
          province: '重庆',
          value: 880,
          type: 'top3'
        },
        {
          province: '深圳',
          value: 780,
          type: 'common'
        },
        {
          province: '广州',
          value: 680,
          type: 'common'
        },
        {
          province: '山东',
          value: 580,
          type: 'common'
        },
        {
          province: '浙江',
          value: 480,
          type: 'common'
        },
        {
          province: '福建',
          value: 100,
          type: 'common'
        },
        {
          province: '石家庄',
          value: 100,
          type: 'common'
        },
        {
          province: '广西壮族自治区',
          value: 100,
          type: 'common'
        }
      ]
    }
  ],
  direction: 'horizontal',
  xField: 'value',
  yField: 'province',
  seriesField: 'province',
  padding: { right: 50, left: 10 },
  axes: [
    {
      orient: 'bottom',
      visible: false,
      nice: false
    },
    {
      orient: 'left',
      maxWidth: 65,
      label: {
        autoLimit: true
      },
      domainLine: {
        visible: false
      },
      tick: {
        visible: false
      }
    }
  ],
  stackCornerRadius: 0,
  bar: {
    style: {
      cornerRadius: [5, 5, 5, 5],
      height: 10
    }
  },
  barBackground: {
    visible: true,
    style: {
      cornerRadius: [5, 5, 5, 5],
      height: 10
    },
    state: {
      hover: {
        stroke: '#D9D9D9',
        lineWidth: 1
      }
    }
  },
  extensionMark: [
    {
      type: 'text',
      dataId: 'barData',
      visible: true,
      style: {
        text: (datum: any) => datum.value,
        fontSize: 12,
        x: (datum: any, ctx: any) => {
          return ctx.getRegion().getLayoutRect().width + 10;
        },
        y: (datum: any, ctx: any) => {
          return ctx.valueToY([datum.province]) + ctx.yBandwidth() / 2;
        },
        textBaseline: 'middle',
        textAlign: 'left',
        fill: '#595959',
        size: 20
      }
    }
  ],
  crosshair: {
    yField: {
      visible: false
    }
  },
  tooltip: {
    mark: {
      title: {
        visible: false
      }
    },
    dimension: {
      title: {
        visible: false
      }
    },
    style: {
      shape: {
        shapeType: 'circle'
      }
    }
  }
};

export const scatterSpec = {
  type: 'scatter',
  data: [
    {
      id: 'barData',
      values: [
        {
          gender: 'female',
          height: 156.5,
          weight: 51.6,
          age: 26
        },
        {
          gender: 'female',
          height: 158,
          weight: 59,
          age: 22
        },
        {
          gender: 'female',
          height: 159,
          weight: 49.2,
          age: 23
        },
        {
          gender: 'female',
          height: 160,
          weight: 63,
          age: 31
        },
        {
          gender: 'female',
          height: 162,
          weight: 53.6,
          age: 30
        },
        {
          gender: 'female',
          height: 163,
          weight: 59,
          age: 17
        },
        {
          gender: 'female',
          height: 168,
          weight: 47.6,
          age: 18
        },
        {
          gender: 'female',
          height: 170,
          weight: 69.8,
          age: 26
        },
        {
          gender: 'female',
          height: 170.2,
          weight: 66.8,
          age: 25
        },
        {
          gender: 'female',
          height: 171,
          weight: 75.2,
          age: 27
        },
        {
          gender: 'male',
          height: 171.5,
          weight: 65.6,
          age: 29
        },
        {
          gender: 'male',
          height: 172,
          weight: 71.8,
          age: 15
        },
        {
          gender: 'male',
          height: 175,
          weight: 80.7,
          age: 18
        },
        {
          gender: 'male',
          height: 178,
          weight: 72.6,
          age: 19
        },
        {
          gender: 'male',
          height: 180,
          weight: 78.8,
          age: 21
        },
        {
          gender: 'male',
          height: 183,
          weight: 74.8,
          age: 25
        },
        {
          gender: 'male',
          height: 184,
          weight: 86.4,
          age: 27
        },
        {
          gender: 'male',
          height: 184,
          weight: 78.4,
          age: 23
        },
        {
          gender: 'male',
          height: 185,
          weight: 62,
          age: 28
        },
        {
          gender: 'male',
          height: 187,
          weight: 91.6,
          age: 50
        }
      ]
    }
  ],
  xField: 'height',
  yField: 'weight',
  seriesField: 'gender',
  legends: { visible: true },
  crosshair: {
    xField: { visible: false }
  },
  interactions: [
    {
      type: 'element-active-by-legend',
      state: 'active'
    }
  ],
  tooltip: {
    dimension: { visible: false }
  },
  point: {
    state: {
      active: {
        size: 10,
        fillOpacity: 0.6,
        strokeOpacity: 0.6,
        outerBorder: {
          lineWidth: 1,
          strokeOpacity: 0.2,
          distance: 2
        }
      }
    }
  },
  axes: [
    {
      orient: 'bottom',
      type: 'linear',
      zero: false,
      domainLine: { visible: true },
      grid: { visible: false }
    }
  ]
};

export const indicatorSankeySpec = {
  type: 'sankey',
  data: [
    {
      id: 'sankeyData',
      values: [
        {
          links: [
            {
              source: 'Opportunity Audience',
              target: 'High Potential Users',
              value: 199999
            },
            {
              source: 'High Potential User 0',
              target: 'High Potential Users',
              value: 299999
            },
            {
              source: 'First Course New Order',
              target: 'High Potential Users',
              value: 399999
            },
            {
              source: 'First Course New Order',
              target: 'Repeat Loyalty',
              value: 499999
            },
            {
              source: 'Deputy Purchase Loyalty',
              target: 'High Potential Users',
              value: 599999
            },
            {
              source: 'Others',
              value: 199999
            },
            {
              target: 'First Order New Customer',
              value: 999
            }
          ]
        }
      ]
    }
  ],
  dataId: 'sankeyData',
  categoryField: 'name',
  valueField: 'value',
  sourceField: 'source',
  targetField: 'target',
  // nodeAlign: 'justify',

  dropIsolatedNode: false,
  nodeGap: 2,
  nodeWidth: 200,

  // nodeHeight: 100,
  equalNodeHeight: true,
  linkOverlap: 'center',
  label: {
    visible: false,
    style: {
      fontSize: 10
    }
  },
  node: {
    state: {
      hover: {
        stroke: '#333333'
      },
      selected: {
        lineWidth: 1,
        brighter: 1,
        fillOpacity: 0.1
      }
    },
    style: {
      fill: '#1664FF',
      fillOpacity: 0,
      lineWidth: 1,
      stroke: '#1664FF',
      html: (datum: any, a: any, c: any) => {
        const color = '#1664FF';
        const hasSource = datum.targetLinks && datum.targetLinks.length;

        return {
          style: ({ width, height }: any) => {
            return {
              'border-right': `8px solid ${color}`,
              width: `${width}px`,
              height: `${height}px`,
              background: hasSource ? color : 'transparent'
            };
          },
          dom: `<div style="margin: 10px 0 0 10px;">
              <p style="
              margin:0;
              font-weight:500;
              line-height: 18px;
              font-size:12px;
              color:${hasSource ? '#fff' : '#646475'};
              ">${datum.key}</p>
              <p style="margin:0;font-weight: 700;
              font-size: 20px;
              line-height: 28px;
              color: ${hasSource ? '#fff' : '#1d1d2e'};">${datum.value}</p>
            </div>`
        };
      }
    }
  },
  link: {
    style: {
      fill: '#1664FF'
    },
    state: {
      hover: {
        fillOpacity: 1
      },
      selected: {
        fill: '#1664FF',
        stroke: '',
        lineWidth: 1,
        brighter: 1,
        fillOpacity: 0.2
      }
    }
  }
};
