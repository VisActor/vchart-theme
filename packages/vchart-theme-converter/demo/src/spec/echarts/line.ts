export const spec = {
  tooltip: {
    // trigger: 'axis'
  },
  axisPointer: {
    label: { show: true }
  },
  title: {
    visible: true,
    text: 'Stacked area chart of cosmetic products sales'
  },
  legend: {
    data: ['China', 'USA', 'EU', 'Africa']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      name: 'title1111',
      data: [
        'Nail polish',
        'Eyebrow pencil',
        'Rouge',
        'Lipstick',
        'Eyeshadows',
        'Eyeliner',
        'Foundation',
        'Lip gloss',
        'Mascara'
      ]
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'title1111'
    }
  ],
  series: [
    {
      name: 'China',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      data: [3054, 5067, 7004, 9054, 12043, 15067, 10119, 12043, 10419]
    },
    {
      name: 'USA',
      type: 'line',
      stack: 'Total',
      areaStyle: {},

      data: [12814, 13012, 11624, 8814, 12998, 12321, 10342, 22998, 11261]
    },
    {
      name: 'EU',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      data: [4376, 3987, 3574, 4376, 4572, 3417, 5231, 4572, 6134]
    },
    {
      name: 'Africa',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      data: [4229, 3932, 5221, 9256, 3308, 5432, 13701, 4008, 18712]
    }
  ]
};
