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
