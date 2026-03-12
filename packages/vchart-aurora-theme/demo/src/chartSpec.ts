import { colorList, nestColorList } from '../../src/index';

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
      { type: 'Autocracies', year: '2000', value: 0 },
      { type: 'Autocracies', year: '2010', value: 0.1 },
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
      { type: 'Price', year: '1930', value: 0 },
      { type: 'Price', year: '1940', value: 0.1 },
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
  title: {
    text: '柱状图标题',
    subtext: '可选展示副标题一到两行文字'
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
  },
  tooltip: {
    dimension: {
      updateContent: items => {
        const total = items.reduce((sum, item) => sum + Number(item.value), 0);
        return [
          { key: '总量', value: total, hasShape: false }, // 新增总量项
          ...items
        ];
      }
    }
  }
};

export const benchmarkSpec = {
  type: 'bar',
  data: [
    {
      id: 'base',
      values: [
        {
          reason: '价格问题',
          value: 250,
          type: '退款金额'
        },
        {
          reason: '物流问题',
          value: 200,
          type: '退款金额'
        },
        {
          reason: '不想要了',
          value: 100,
          type: '退款金额'
        },
        {
          reason: '其他',
          value: 20,
          type: '退款金额'
        }
      ]
    },
    {
      id: 'bench',
      values: [
        {
          reason: '价格问题',
          value: 230,
          type: '同行标杆'
        },
        {
          reason: '物流问题',
          value: 230,
          type: '同行标杆'
        },
        {
          reason: '不想要了',
          value: 120,
          type: '同行标杆'
        },
        {
          reason: '其他',
          value: 10,
          type: '同行标杆'
        }
      ]
    }
  ],
  series: [
    {
      id: 'base',
      type: 'bar',
      dataId: 'base',
      seriesField: 'type',
      xField: 'reason',
      yField: 'value',
      barMaxWidth: 16,
      barGapInGroup: 2
    },
    {
      id: 'bench',
      type: 'scatter',
      dataId: 'bench',
      seriesField: 'type',
      xField: 'reason',
      yField: 'value',
      point: {
        style: {
          shape: 'rect',
          size: [16, 2]
        }
      }
    }
  ],
  legends: {
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
  customMark: [
    {
      type: 'rect',
      zIndex: 1,
      style: {
        x: (datum, ctx) => {
          const region = ctx.chart.getAllRegions()[0];
          return region.getLayoutStartPoint().x;
        },
        y: (datum, ctx) => {
          const region = ctx.chart.getAllRegions()[0];
          return region.getLayoutStartPoint().y - 12;
        },
        width: (datum, ctx) => {
          const region = ctx.chart.getAllRegions()[0];
          return region.getLayoutRect().width;
        },
        height: (datum, ctx) => {
          const region = ctx.chart.getAllRegions()[0];
          return region.getLayoutRect().height + 12;
        },
        cornerRadius: 12,
        fill: {
          gradient: 'linear',
          x0: 0,
          y0: 0,
          x1: 0,
          y1: 1,
          stops: [
            {
              offset: 0,
              color: '#F5F9FF'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ]
        }
      }
    }
  ],
  height: 600,
  xField: ['type'],
  yField: 'value',
  seriesField: 'country',
  legends: {
    visible: true
  },
  crosshair: {
    xField: {
      line: {
        type: 'line',
        width: 1,
        style: {
          lineWidth: 1,
          stroke: '#DCDEE1',
          lineDash: [2, 2]
        }
      }
    }
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
        { type: 'iron', value: '1' },
        { type: 'calcium', value: '3.63' }
      ]
    }
  ],
  valueField: 'value',
  categoryField: 'type',
  title: {
    visible: true,
    text: '数据分布',
    subtext: '可视化图表副标题一到两行文字'
  },
  tooltip: {
    mark: {
      title: {
        visible: false
      }
    }
  },
  legends: {
    visible: true
  },
  label: {
    visible: true
  }
};

const rootDatum = [
  { type: '0~29', value: '126.04' },
  { type: '30~59', value: '128.77' },
  { type: '60 and over', value: '77.09' }
].map((item, index) => ({ ...item, color: nestColorList[index]?.pop() }));

const subDatum = (() => {
  const groupIndexMap = new Map<string, number>();
  rootDatum.forEach((item, index) => {
    groupIndexMap.set(item.type, index);
  });

  const groupItemIndexMap = new Map<string, number>();
  const rawSubData = [
    { type: '0~9', group: '0~29', value: '39.12' },
    { type: '10~19', group: '0~29', value: '43.01' },
    { type: '20~29', group: '0~29', value: '43.91' },
    { type: '30~39', group: '30~59', value: '45.4' },
    { type: '40~49', group: '30~59', value: '40.89' },
    { type: '50~59', group: '30~59', value: '42.48' },
    { type: '60~69', group: '60 and over', value: '39.63' },
    { type: '70~79', group: '60 and over', value: '25.17' },
    { type: '80 and over', group: '60 and over', value: '12.29' }
  ];

  return rawSubData.map(item => {
    const parentIndex = groupIndexMap.get(item.group)!;
    const itemIndex = (groupItemIndexMap.get(item.group) ?? -1) + 1;
    groupItemIndexMap.set(item.group, itemIndex);
    return { ...item, color: nestColorList[parentIndex][itemIndex] };
  });
})();

export const nestPieSpec = {
  type: 'common',
  data: [
    {
      id: 'id0',
      values: rootDatum
    },
    {
      id: 'id1',
      values: subDatum
    }
  ],
  series: [
    {
      type: 'pie',
      dataIndex: 0,
      outerRadius: 0.75,
      innerRadius: 0,
      valueField: 'value',
      categoryField: 'type',

      label: {
        position: 'inside',
        formatMethod: (label, data) => {
          return data?.type;
        },
        visible: true,
        rotate: false
      },
      color: nestColorList.map(item => item[item.length - 1]),
      pie: {
        state: {
          hover: {
            outerRadius: 0.75
          },
          selected: {
            outerRadius: 0.75
          }
        },
        style: {
          fill: datum => {
            return datum.color;
          }
        }
      }
    },
    {
      type: 'pie',
      dataIndex: 1,
      outerRadius: 0.85,
      innerRadius: 0.75,
      valueField: 'value',
      categoryField: 'type',
      label: {
        visible: true
      },
      pie: {
        style: {
          fill: datum => {
            return datum.color;
          }
        }
      }
    }
  ],
  legends: {
    visible: false
  }
};

export const metricPieSpec = {
  type: 'pie',
  data: [
    {
      id: 'id0',
      values: [
        { type: 'oxygen', value: '46.60' },
        { type: 'silicon', value: '27.72' },
        { type: 'aluminum', value: '8.13' },
        { type: 'iron', value: '1' },
        { type: 'calcium', value: '3.63' }
      ]
    }
  ],
  outerRadius: 0.85,
  innerRadius: 0.75,
  valueField: 'value',
  categoryField: 'type',
  title: {
    visible: true,
    text: '数据分布',
    subtext: '可视化图表副标题一到两行文字'
  },
  indicator: {
    visible: true,
    trigger: 'hover',
    limitRatio: 0.5, // same as inner radius
    title: {
      visible: true,
      autoFit: false,
      style: {
        fontWeight: '500',
        fontFamily: 'Douyin Number ABC',
        fill: '#111',
        fontSize: 32,
        lineHeight: 46,
        text: '25%'
      }
    },
    content: [
      {
        visible: true,
        autoFit: false,
        style: {
          fill: '#585858',
          fontSize: 14,
          lineHeight: 20,
          text: '指标名称'
        }
      }
    ]
  },
  tooltip: {
    mark: {
      title: {
        visible: false
      }
    }
  },
  legend: {
    visible: true,
    orient: 'bottom'
  },
  label: {
    visible: true
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

export const dualAxisBarSpec = {
  type: 'common',
  data: [
    {
      id: 'dualAxisDataLeft',
      values: [
        { category: '1月', type: '退款金额', value: 12.3 },
        { category: '2月', type: '退款金额', value: 15.8 },
        { category: '3月', type: '退款金额', value: 10.2 },
        { category: '4月', type: '退款金额', value: 18.6 },
        { category: '5月', type: '退款金额', value: 16.4 },
        { category: '6月', type: '退款金额', value: 20.1 }
      ]
    },
    {
      id: 'dualAxisDataRight',
      values: [
        { category: '1月', type: '退款率', value: 32.5 },
        { category: '2月', type: '退款率', value: 45.1 },
        { category: '3月', type: '退款率', value: 28.4 },
        { category: '4月', type: '退款率', value: 55.0 },
        { category: '5月', type: '退款率', value: 48.3 },
        { category: '6月', type: '退款率', value: 62.7 }
      ]
    }
  ],
  series: [
    {
      type: 'bar',
      id: 'amountBar',
      name: '金额',
      dataIndex: 0,
      xField: ['category', 'type'],
      yField: 'value'
    },
    {
      type: 'bar',
      id: 'percentBar',
      name: '占比',
      dataIndex: 1,
      xField: ['category', 'type'],
      yField: 'value'
    }
  ],
  axes: [
    {
      orient: 'bottom',
      type: 'band',
      label: {
        visible: true
      }
    },
    {
      orient: 'left',
      type: 'linear',
      seriesId: ['amountBar'],
      label: {
        visible: true,
        formatMethod: val => val.toFixed(1) + '万'
      },
      grid: {
        visible: true
      }
    },
    {
      orient: 'right',
      type: 'linear',
      seriesId: ['percentBar'],
      label: {
        visible: true,
        formatMethod: val => val.toFixed(1) + '%'
      },
      grid: {
        visible: false
      }
    }
  ],
  legends: {
    visible: true
  }
};

export const areaSpec = {
  type: 'area',
  seriesMark: 'line',
  data: {
    values: [
      { type: 'Nail polish', country: 'Africa', value: 4229 },
      { type: 'Eyebrow pencil', country: 'Africa', value: 3932 },
      { type: 'Rouge', country: 'Africa', value: 5221 },
      { type: 'Lipstick', country: 'Africa', value: 9256 },
      { type: 'Eyeshadows', country: 'Africa', value: 3308 },
      { type: 'Eyeliner', country: 'Africa', value: 5432 },
      { type: 'Foundation', country: 'Africa', value: 13701 },
      { type: 'Lip gloss', country: 'Africa', value: 4008 },
      { type: 'Mascara', country: 'Africa', value: 18712 }
    ]
  },
  height: 600,
  xField: ['type'],
  yField: 'value',
  seriesField: 'country',
  legends: {
    visible: false
  },
  indicator: {
    visible: true
  },
  crosshair: {
    xField: {
      line: {
        type: 'line',
        width: 1,
        style: {
          lineWidth: 1,
          stroke: '#DCDEE1',
          lineDash: [2, 2]
        }
      }
    }
  }
};

export const areaSimpleSpec = {
  type: 'area',
  hover: {
    enable: false
  },
  seriesMark: 'line',
  data: {
    values: [
      { type: 'Nail polish', country: 'Africa', value: 4229 },
      { type: 'Eyebrow pencil', country: 'Africa', value: 3932 },
      { type: 'Rouge', country: 'Africa', value: 5221 },
      { type: 'Lipstick', country: 'Africa', value: 9256 },
      { type: 'Eyeshadows', country: 'Africa', value: 3308 },
      { type: 'Eyeliner', country: 'Africa', value: 5432 },
      { type: 'Foundation', country: 'Africa', value: 13701 },
      { type: 'Lip gloss', country: 'Africa', value: 4008 },
      { type: 'Mascara', country: 'Africa', value: 18712 }
    ]
  },
  axes: [
    {
      orient: 'bottom',
      visible: false
    },
    {
      orient: 'left',
      visible: false
    }
  ],
  tooltip: {
    visible: false
  },
  xField: ['type'],
  yField: 'value',
  seriesField: 'country',
  point: {
    state: {
      dimension_hover: {
        visible: false
      }
    }
  },
  legends: {
    visible: false
  },
  indicator: {
    visible: false
  },
  crosshair: {
    xField: {
      visible: false
    }
  }
};

export const multiAreaSpec = {
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
  indicator: {
    visible: true
  },
  legends: {
    visible: true
  },
  crosshair: {
    xField: {
      line: {
        type: 'line',
        width: 1,
        style: {
          lineWidth: 1,
          stroke: '#DCDEE1',
          lineDash: [2, 2]
        }
      }
    }
  }
};
