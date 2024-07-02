const series = [
  {
    data: [154, 153, 151, 135, 997, 984, 943],
    type: 'bar',
    stack: 'Dessert',
    name: 'Cake',
    label: { show: true },
    showBackground: true
  },
  {
    data: [378, 398, 408, 407, 363, 356, 355],
    type: 'bar',
    stack: 'Dessert',
    name: 'Bread',
    label: { show: true },
    showBackground: true
  },
  {
    data: [103, 105, 110, 944, 636, 627, 611],
    type: 'bar',
    stack: 'Drink',
    name: 'Tea',
    label: { show: true },
    showBackground: true
  },
  {
    data: [310, 298, 302, 298, 239, 241, 259],
    type: 'bar',
    stack: 'Drink',
    name: 'Coffee',
    label: { show: true },
    showBackground: true
  },
  {
    data: [419, 416, 400, 343, 204, 231, 230],
    type: 'bar',
    stack: 'Meat dishes',
    name: 'Rib',
    label: { show: true },
    showBackground: true
  },
  {
    data: [810, 796, 811, 771, 641, 646, 666],
    type: 'bar',
    stack: 'Meat dishes',
    name: 'Crayfish',
    label: { show: true },
    showBackground: true
  },
  {
    data: [-365, -522, -352, -471, -319, -346, -326],
    type: 'bar',
    stack: 'Dessert',
    name: 'Cake(last week)',
    label: { show: true },
    showBackground: true
  },
  {
    data: [-235, -258, -760, -535, -570, -373, -879],
    type: 'bar',
    stack: 'Dessert',
    name: 'Bread(last week)',
    label: { show: true },
    showBackground: true
  },
  {
    data: [-832, -689, -332, -319, -532, -582, -219],
    type: 'bar',
    stack: 'Drink',
    name: 'Tea(last week)',
    label: { show: true },
    showBackground: true
  },
  {
    data: [-610, -688, -368, -363, -312, -247, -236],
    type: 'bar',
    stack: 'Drink',
    name: 'Coffee(last week)',
    label: { show: true },
    showBackground: true
  },
  {
    data: [-305, -106, -222, -243, -583, -294, -153],
    type: 'bar',
    stack: 'Meat dishes',
    name: 'Rib(last week)',
    label: { show: true },
    showBackground: true
  },
  {
    data: [-462, -159, -205, -129, -342, -165, -253],
    type: 'bar',
    stack: 'Meat dishes',
    name: 'Crayfish(last week)',
    label: { show: true }
  }
];

export const spec = {
  legend: {
    bottom: 0,
    type: 'scroll',
    showBackground: true
  },
  xAxis: {
    type: 'category',
    data: ['2019-08-29', '2019-08-30', '2019-08-31', '2019-09-01', '2019-09-02', '2019-09-03', '2019-09-04'],
    showBackground: true
  },
  yAxis: {
    type: 'value',
    name: 'Week-on-week (sales)',
    showBackground: true
  },
  series
};
