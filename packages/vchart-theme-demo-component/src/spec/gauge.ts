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
