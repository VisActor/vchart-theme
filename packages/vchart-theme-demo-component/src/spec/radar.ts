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
