import { scatter, gauge } from '@internal/chart-demo';
import { IAreaChartSpec } from '@visactor/vchart';
import { VeOColor, VeOSymbolType } from '@visactor/vchart-ve-o-theme';

export const charts = [
  {
    title: 'Area Chart (Stacked)',
    description: [
      '填充色：10% 透明度纯色填充',
      '适用场景：主要用于表示不同时间段，多个数据占比大小的变化趋势，数据起始点为前一数据的 Y 轴终点',
    ],
    spec: {
      type: 'area',
      data: {
        values: [
          { type: 'Nail polish', country: 'Africa', value: 4229 },
          { type: 'Nail polish', country: 'EU', value: 4376 },
          { type: 'Nail polish', country: 'China', value: 3054 },
          { type: 'Eyebrow pencil', country: 'Africa', value: 3932 },
          { type: 'Eyebrow pencil', country: 'EU', value: 3987 },
          { type: 'Eyebrow pencil', country: 'China', value: 5067 },
          { type: 'Rouge', country: 'Africa', value: 5221 },
          { type: 'Rouge', country: 'EU', value: 3574 },
          { type: 'Rouge', country: 'China', value: 7004 },
          { type: 'Lipstick', country: 'Africa', value: 9256 },
          { type: 'Lipstick', country: 'EU', value: 4376 },
          { type: 'Lipstick', country: 'China', value: 9054 },
          { type: 'Eyeshadows', country: 'Africa', value: 3308 },
          { type: 'Eyeshadows', country: 'EU', value: 4572 },
          { type: 'Eyeshadows', country: 'China', value: 12043 },
          { type: 'Eyeliner', country: 'Africa', value: 5432 },
          { type: 'Eyeliner', country: 'EU', value: 3417 },
          { type: 'Eyeliner', country: 'China', value: 15067 },
          { type: 'Foundation', country: 'Africa', value: 13701 },
          { type: 'Foundation', country: 'EU', value: 5231 },
          { type: 'Foundation', country: 'China', value: 10119 },
          { type: 'Lip gloss', country: 'Africa', value: 4008 },
          { type: 'Lip gloss', country: 'EU', value: 4572 },
          { type: 'Lip gloss', country: 'China', value: 12043 },
          { type: 'Mascara', country: 'Africa', value: 18712 },
          { type: 'Mascara', country: 'EU', value: 6134 },
          { type: 'Mascara', country: 'China', value: 10419 },
        ],
      },
      stack: true,
      xField: 'type',
      yField: 'value',
      seriesField: 'country',
      legends: [
        {
          visible: true,
          item: {
            shape: { style: { symbolType: VeOSymbolType.linePoint } },
          },
        },
      ],
      crosshair: {
        xField: { visible: true, label: { visible: true } },
        yField: { visible: true, label: { visible: true } },
      },
      axes: [
        { type: 'band', orient: 'bottom', title: { visible: true } },
        { type: 'linear', orient: 'left', title: { visible: true } },
      ],
      dataZoom: { orient: 'bottom' },
      tooltip: {
        visible: true,
        style: {
          shape: {
            shapeType: VeOSymbolType.linePoint,
          },
        },
      },
    } as IAreaChartSpec,
  },
  {
    title: 'Area Chart',
    description: [
      '填充色：如果涉及多折线重叠，颜色渐变至透明（10%->0%），以避免面积重叠，可视性不佳',
      '适用场景：表示数量和时间变化的趋势，数据起始点都为Y轴初始点',
    ],
    spec: {
      type: 'area',
      data: {
        values: [
          { type: 'Nail polish', country: 'Africa', value: 4229 },
          { type: 'Nail polish', country: 'EU', value: 4376 },
          { type: 'Nail polish', country: 'China', value: 3054 },
          { type: 'Eyebrow pencil', country: 'Africa', value: 3932 },
          { type: 'Eyebrow pencil', country: 'EU', value: 3987 },
          { type: 'Eyebrow pencil', country: 'China', value: 5067 },
          { type: 'Rouge', country: 'Africa', value: 5221 },
          { type: 'Rouge', country: 'EU', value: 3574 },
          { type: 'Rouge', country: 'China', value: 7004 },
          { type: 'Lipstick', country: 'Africa', value: 9256 },
          { type: 'Lipstick', country: 'EU', value: 4376 },
          { type: 'Lipstick', country: 'China', value: 9054 },
          { type: 'Eyeshadows', country: 'Africa', value: 3308 },
          { type: 'Eyeshadows', country: 'EU', value: 4572 },
          { type: 'Eyeshadows', country: 'China', value: 12043 },
          { type: 'Eyeliner', country: 'Africa', value: 5432 },
          { type: 'Eyeliner', country: 'EU', value: 3417 },
          { type: 'Eyeliner', country: 'China', value: 15067 },
          { type: 'Foundation', country: 'Africa', value: 13701 },
          { type: 'Foundation', country: 'EU', value: 5231 },
          { type: 'Foundation', country: 'China', value: 10119 },
          { type: 'Lip gloss', country: 'Africa', value: 4008 },
          { type: 'Lip gloss', country: 'EU', value: 4572 },
          { type: 'Lip gloss', country: 'China', value: 12043 },
          { type: 'Mascara', country: 'Africa', value: 18712 },
          { type: 'Mascara', country: 'EU', value: 6134 },
          { type: 'Mascara', country: 'China', value: 10419 },
        ],
      },
      stack: false,
      xField: 'type',
      yField: 'value',
      seriesField: 'country',
      legends: [
        {
          visible: true,
          item: {
            shape: { style: { symbolType: VeOSymbolType.linePoint } },
          },
        },
      ],
      crosshair: {
        xField: { visible: true, label: { visible: true } },
        yField: { visible: true, label: { visible: true } },
      },
      axes: [
        { type: 'band', orient: 'bottom', title: { visible: true } },
        { type: 'linear', orient: 'left', title: { visible: true } },
      ],
      dataZoom: { orient: 'bottom' },
      tooltip: {
        visible: true,
        style: {
          shape: {
            shapeType: VeOSymbolType.linePoint,
          },
        },
      },
    } as IAreaChartSpec,
  },
  {
    title: 'Bar Chart',
    description: ['交互：hover 聚焦同组图元'],
    spec: {
      type: 'bar',
      data: [
        {
          id: 'barData',
          values: [
            {
              State: 'WY',
              Age: 'Under 5 Years',
              Population: 25635,
            },
            {
              State: 'WY',
              Age: '5 to 13 Years',
              Population: 1890,
            },
            {
              State: 'WY',
              Age: '14 to 17 Years',
              Population: 9314,
            },
            {
              State: 'DC',
              Age: 'Under 5 Years',
              Population: 30352,
            },
            {
              State: 'DC',
              Age: '5 to 13 Years',
              Population: 20439,
            },
            {
              State: 'DC',
              Age: '14 to 17 Years',
              Population: 10225,
            },
            {
              State: 'VT',
              Age: 'Under 5 Years',
              Population: 38253,
            },
            {
              State: 'VT',
              Age: '5 to 13 Years',
              Population: 42538,
            },
            {
              State: 'VT',
              Age: '14 to 17 Years',
              Population: 15757,
            },
            {
              State: 'ND',
              Age: 'Under 5 Years',
              Population: 51896,
            },
            {
              State: 'ND',
              Age: '5 to 13 Years',
              Population: 67358,
            },
            {
              State: 'ND',
              Age: '14 to 17 Years',
              Population: 18794,
            },
            {
              State: 'AK',
              Age: 'Under 5 Years',
              Population: 72083,
            },
            {
              State: 'AK',
              Age: '5 to 13 Years',
              Population: 85640,
            },
            {
              State: 'AK',
              Age: '14 to 17 Years',
              Population: 22153,
            },
          ],
        },
      ],
      xField: ['State', 'Age'],
      yField: 'Population',
      seriesField: 'Age',
      stack: false,
      legends: {
        visible: true,
      },
    },
  },
  {
    title: 'Bar Chart (Stacked)',
    description: ['交互：hover 聚焦同组图元'],
    spec: {
      type: 'bar',
      data: [
        {
          id: 'barData',
          values: [
            {
              State: 'WY',
              Age: 'Under 5 Years',
              Population: 25635,
            },
            {
              State: 'WY',
              Age: '5 to 13 Years',
              Population: 1890,
            },
            {
              State: 'WY',
              Age: '14 to 17 Years',
              Population: 9314,
            },
            {
              State: 'DC',
              Age: 'Under 5 Years',
              Population: 30352,
            },
            {
              State: 'DC',
              Age: '5 to 13 Years',
              Population: 20439,
            },
            {
              State: 'DC',
              Age: '14 to 17 Years',
              Population: 10225,
            },
            {
              State: 'VT',
              Age: 'Under 5 Years',
              Population: 38253,
            },
            {
              State: 'VT',
              Age: '5 to 13 Years',
              Population: 42538,
            },
            {
              State: 'VT',
              Age: '14 to 17 Years',
              Population: 15757,
            },
            {
              State: 'ND',
              Age: 'Under 5 Years',
              Population: 51896,
            },
            {
              State: 'ND',
              Age: '5 to 13 Years',
              Population: 67358,
            },
            {
              State: 'ND',
              Age: '14 to 17 Years',
              Population: 18794,
            },
            {
              State: 'AK',
              Age: 'Under 5 Years',
              Population: 72083,
            },
            {
              State: 'AK',
              Age: '5 to 13 Years',
              Population: 85640,
            },
            {
              State: 'AK',
              Age: '14 to 17 Years',
              Population: 22153,
            },
          ],
        },
      ],
      xField: 'State',
      yField: 'Population',
      seriesField: 'Age',
      stack: true,
      legends: {
        visible: true,
      },
    },
  },
  {
    title: 'Mark Line',
    description: ['样式：提供 5 档默认颜色，用于表达不同的紧急程度'],
    spec: {
      type: 'scatter',
      xField: 'x',
      yField: 'y',
      sizeField: 'z',
      data: {
        id: 'data',
        values: [
          { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
          { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
          { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
          { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
          { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
          { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
          { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
          { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
          { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
          { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
          { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
          { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
          { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
          { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
          { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' },
        ],
      },
      size: {
        type: 'linear',
        range: [20, 80],
      },
      axes: [
        { orient: 'bottom', type: 'linear', min: 60, max: 95 },
        { orient: 'left', type: 'linear', min: 0, max: 200 },
      ],
      label: {
        visible: true,
        position: 'center',
        overlap: {
          avoidBaseMark: false,
        },
      },
      markLine: [
        {
          x: 85,
        },
        {
          y: 50,
          line: { style: { stroke: VeOColor.safe } },
          startSymbol: { style: { fill: VeOColor.safe } },
        },
        {
          y: 90,
          line: { style: { stroke: VeOColor.notice } },
          startSymbol: { style: { fill: VeOColor.notice } },
        },
        {
          y: 120,
          line: { style: { stroke: VeOColor.warning } },
          startSymbol: { style: { fill: VeOColor.warning } },
        },
        {
          y: 140,
          line: { style: { stroke: VeOColor.critical } },
          startSymbol: { style: { fill: VeOColor.critical } },
        },
        {
          y: 160,
          line: { style: { stroke: VeOColor.fatal } },
          startSymbol: { style: { fill: VeOColor.fatal } },
        },
      ],
    },
  },
  {
    title: 'Mark Area',
    description: [
      '样式：推荐使用 markArea 和 markLine 组合的形式，markLine 为分界线',
    ],
    spec: {
      type: 'line',
      xField: 'Date',
      yField: 'Price',
      data: {
        id: 'data',
        values: [
          { Date: 'Jan-13', Price: 0.129 },
          { Date: 'Feb-13', Price: 0.129 },
          { Date: 'Mar-13', Price: 0.128 },
          { Date: 'Apr-13', Price: 0.128 },
          { Date: 'May-13', Price: 0.131 },
          { Date: 'Jun-13', Price: 0.137 },
          { Date: 'Jul-13', Price: 0.137 },
          { Date: 'Aug-13', Price: 0.137 },
          { Date: 'Sep-13', Price: 0.137 },
          { Date: 'Oct-13', Price: 0.132 },
          { Date: 'Nov-13', Price: 0.13 },
          { Date: 'Dec-13', Price: 0.131 },
          { Date: 'Jan-14', Price: 0.134 },
          { Date: 'Feb-14', Price: 0.134 },
          { Date: 'Mar-14', Price: 0.135 },
          { Date: 'Apr-14', Price: 0.131 },
          { Date: 'May-14', Price: 0.136 },
          { Date: 'Jun-14', Price: 0.143 },
          { Date: 'Jul-14', Price: 0.143 },
          { Date: 'Aug-14', Price: 0.143 },
          { Date: 'Sep-14', Price: 0.141 },
          { Date: 'Oct-14', Price: 0.136 },
          { Date: 'Nov-14', Price: 0.134 },
          { Date: 'Dec-14', Price: 0.135 },
          { Date: 'Jan-15', Price: 0.138 },
          { Date: 'Feb-15', Price: 0.138 },
          { Date: 'Mar-15', Price: 0.136 },
          { Date: 'Apr-15', Price: 0.137 },
          { Date: 'May-15', Price: 0.137 },
          { Date: 'Jun-15', Price: 0.143 },
          { Date: 'Jul-15', Price: 0.142 },
          { Date: 'Aug-15', Price: 0.142 },
          { Date: 'Sep-15', Price: 0.141 },
          { Date: 'Oct-15', Price: 0.136 },
          { Date: 'Nov-15', Price: 0.134 },
          { Date: 'Dec-15', Price: 0.133 },
          { Date: 'Jan-16', Price: 0.134 },
          { Date: 'Feb-16', Price: 0.134 },
          { Date: 'Mar-16', Price: 0.134 },
          { Date: 'Apr-16', Price: 0.134 },
          { Date: 'May-16', Price: 0.133 },
          { Date: 'Jun-16', Price: 0.138 },
          { Date: 'Jul-16', Price: 0.139 },
          { Date: 'Aug-16', Price: 0.139 },
          { Date: 'Sep-16', Price: 0.139 },
          { Date: 'Oct-16', Price: 0.134 },
          { Date: 'Nov-16', Price: 0.131 },
          { Date: 'Dec-16', Price: 0.133 },
          { Date: 'Jan-17', Price: 0.134 },
          { Date: 'Feb-17', Price: 0.135 },
          { Date: 'Mar-17', Price: 0.134 },
          { Date: 'Apr-17', Price: 0.135 },
          { Date: 'May-17', Price: 0.137 },
          { Date: 'Jun-17', Price: 0.142 },
          { Date: 'Jul-17', Price: 0.143 },
          { Date: 'Aug-17', Price: 0.142 },
          { Date: 'Sep-17', Price: 0.142 },
          { Date: 'Oct-17', Price: 0.137 },
          { Date: 'Nov-17', Price: 0.136 },
          { Date: 'Dec-17', Price: 0.136 },
          { Date: 'Jan-18', Price: 0.135 },
          { Date: 'Feb-18', Price: 0.135 },
          { Date: 'Mar-18', Price: 0.135 },
          { Date: 'Apr-18', Price: 0.134 },
          { Date: 'May-18', Price: 0.136 },
          { Date: 'Jun-18', Price: 0.139 },
          { Date: 'Jul-18', Price: 0.139 },
          { Date: 'Aug-18', Price: 0.139 },
          { Date: 'Sep-18', Price: 0.138 },
          { Date: 'Oct-18', Price: 0.136 },
          { Date: 'Nov-18', Price: 0.134 },
          { Date: 'Dec-18', Price: 0.135 },
          { Date: 'Jan-19', Price: 0.135 },
          { Date: 'Feb-19', Price: 0.136 },
          { Date: 'Mar-19', Price: 0.135 },
          { Date: 'Apr-19', Price: 0.135 },
          { Date: 'May-19', Price: 0.136 },
          { Date: 'Jun-19', Price: 0.139 },
          { Date: 'Jul-19', Price: 0.14 },
          { Date: 'Aug-19', Price: 0.139 },
          { Date: 'Sep-19', Price: 0.139 },
          { Date: 'Oct-19', Price: 0.136 },
          { Date: 'Nov-19', Price: 0.133 },
          { Date: 'Dec-19', Price: 0.133 },
          { Date: 'Jan-20', Price: 0.134 },
          { Date: 'Feb-20', Price: 0.134 },
          { Date: 'Mar-20', Price: 0.134 },
          { Date: 'Apr-20', Price: 0.133 },
          { Date: 'May-20', Price: 0.134 },
          { Date: 'Jun-20', Price: 0.137 },
          { Date: 'Jul-20', Price: 0.137 },
          { Date: 'Aug-20', Price: 0.137 },
          { Date: 'Sep-20', Price: 0.137 },
          { Date: 'Oct-20', Price: 0.135 },
          { Date: 'Nov-20', Price: 0.136 },
          { Date: 'Dec-20', Price: 0.136 },
          { Date: 'Jan-21', Price: 0.136 },
          { Date: 'Feb-21', Price: 0.137 },
          { Date: 'Mar-21', Price: 0.138 },
          { Date: 'Apr-21', Price: 0.139 },
          { Date: 'May-21', Price: 0.14 },
          { Date: 'Jun-21', Price: 0.142 },
          { Date: 'Jul-21', Price: 0.143 },
          { Date: 'Aug-21', Price: 0.144 },
          { Date: 'Sep-21', Price: 0.144 },
          { Date: 'Oct-21', Price: 0.142 },
          { Date: 'Nov-21', Price: 0.142 },
          { Date: 'Dec-21', Price: 0.142 },
          { Date: 'Jan-22', Price: 0.147 },
          { Date: 'Feb-22', Price: 0.148 },
          { Date: 'Mar-22', Price: 0.15 },
          { Date: 'Apr-22', Price: 0.151 },
          { Date: 'May-22', Price: 0.154 },
          { Date: 'Jun-22', Price: 0.16 },
          { Date: 'Jul-22', Price: 0.164 },
          { Date: 'Aug-22', Price: 0.167 },
          { Date: 'Sep-22', Price: 0.167 },
          { Date: 'Oct-22', Price: 0.166 },
          { Date: 'Nov-22', Price: 0.163 },
          { Date: 'Dec-22', Price: 0.165 },
          { Date: 'Jan-23', Price: 0.168 },
          { Date: 'Feb-23', Price: 0.168 },
          { Date: 'Mar-23', Price: 0.166 },
        ],
      },
      axes: [
        {
          orient: 'left',
          min: 0.12,
          max: 0.18,
          label: {
            visible: false,
          },
        },
      ],
      markArea: [
        {
          y: 0.14,
          y1: 0.16,
          area: { style: { fill: VeOColor.notice } },
        },
        {
          y: 0.16,
          y1: 0.17,
          area: { style: { fill: VeOColor.critical } },
        },
      ],
      markLine: [
        {
          y: 0.14,
          line: {
            style: {
              stroke: VeOColor.notice,
              lineWidth: 1,
              lineDash: [4, 4],
            },
          },
          startSymbol: { visible: false },
          label: {
            visible: true,
            position: 'start',
            text: '0.14',
            refX: -2,
            style: {
              fill: VeOColor.notice,
              textAlign: 'right',
              textBaseline: 'middle',
            },
          },
        },
        {
          y: 0.16,
          line: {
            style: {
              stroke: VeOColor.critical,
              lineWidth: 1,
              lineDash: [4, 4],
            },
          },
          startSymbol: { visible: false },
          label: {
            visible: true,
            position: 'start',
            text: '0.16',
            refX: -2,
            style: {
              fill: VeOColor.critical,
              textAlign: 'right',
              textBaseline: 'middle',
            },
          },
        },
      ],
    },
  },
  {
    title: 'Pie Chart',
    spec: {
      type: 'pie',
      data: [
        {
          id: 'id0',
          values: [
            {
              type: 'oxygen',
              value: '46.60',
            },
            {
              type: 'silicon',
              value: '27.72',
            },
            {
              type: 'aluminum',
              value: '8.13',
            },
            {
              type: 'iron',
              value: '5',
            },
            {
              type: 'calcium',
              value: '3.63',
            },
            {
              type: 'sodium',
              value: '2.83',
            },
            {
              type: 'potassium',
              value: '2.59',
            },
            {
              type: 'others',
              value: '3.5',
            },
          ],
        },
      ],
      valueField: 'value',
      categoryField: 'type',
      legends: [
        {
          visible: true,
          item: {
            shape: { style: { symbolType: 'circle' } },
          },
        },
      ],
      label: {
        visible: true,
      },
      tooltip: {
        visible: true,
        style: {
          shape: {
            shapeType: 'circle',
          },
        },
      },
    },
  },
  scatter,
  {
    title: 'Rose Chart',
    spec: {
      type: 'rose',
      data: {
        id: '0',
        values: [
          {
            time: '2:00',
            value: 27,
            type: 'Sales',
          },
          {
            time: '6:00',
            value: 25,
            type: 'Sales',
          },
          {
            time: '10:00',
            value: 18,
            type: 'Sales',
          },
          {
            time: '14:00',
            value: 15,
            type: 'Sales',
          },
          {
            time: '18:00',
            value: 10,
            type: 'Sales',
          },
          {
            time: '22:00',
            value: 5,
            type: 'Sales',
          },
          {
            time: '2:00',
            value: 7,
            type: 'Discount',
          },
          {
            time: '6:00',
            value: 5,
            type: 'Discount',
          },
          {
            time: '10:00',
            value: 38,
            type: 'Discount',
          },
          {
            time: '14:00',
            value: 5,
            type: 'Discount',
          },
          {
            time: '18:00',
            value: 20,
            type: 'Discount',
          },
          {
            time: '22:00',
            value: 15,
            type: 'Discount',
          },
        ],
      },
      categoryField: ['time', 'type'],
      valueField: 'value',
      seriesField: 'type',
      outerRadius: 1,
      axes: [
        {
          orient: 'angle',
          domainLine: { visible: true },
          grid: { visible: true },
          label: {
            visible: true,
          },
        },
        {
          orient: 'radius',
          grid: { visible: true, smooth: true },
          label: {
            visible: true,
          },
        },
      ],
      crosshair: {
        categoryField: {
          visible: true,
          line: {
            type: 'rect',
          },
        },
        valueField: {
          visible: true,
          line: {
            type: 'line',
            smooth: true,
          },
        },
      },
      legends: {
        visible: true,
      },
    },
  },
  {
    title: 'Radar Chart',
    spec: {
      type: 'radar',
      data: [
        {
          values: [
            {
              month: 'Jan.',
              value: 45,
              type: 'A',
            },
            {
              month: 'Feb.',
              value: 61,
              type: 'A',
            },
            {
              month: 'Mar.',
              value: 92,
              type: 'A',
            },
            {
              month: 'Apr.',
              value: 57,
              type: 'A',
            },
            {
              month: 'May.',
              value: 46,
              type: 'A',
            },
            {
              month: 'Jun.',
              value: 36,
              type: 'A',
            },
            {
              month: 'Jul.',
              value: 33,
              type: 'A',
            },
            {
              month: 'Aug.',
              value: 63,
              type: 'A',
            },
            {
              month: 'Sep.',
              value: 57,
              type: 'A',
            },
            {
              month: 'Oct.',
              value: 53,
              type: 'A',
            },
            {
              month: 'Nov.',
              value: 69,
              type: 'A',
            },
            {
              month: 'Dec.',
              value: 40,
              type: 'A',
            },
            {
              month: 'Jan.',
              value: 31,
              type: 'B',
            },
            {
              month: 'Feb.',
              value: 39,
              type: 'B',
            },
            {
              month: 'Mar.',
              value: 81,
              type: 'B',
            },
            {
              month: 'Apr.',
              value: 39,
              type: 'B',
            },
            {
              month: 'May.',
              value: 64,
              type: 'B',
            },
            {
              month: 'Jun.',
              value: 21,
              type: 'B',
            },
            {
              month: 'Jul.',
              value: 58,
              type: 'B',
            },
            {
              month: 'Aug.',
              value: 72,
              type: 'B',
            },
            {
              month: 'Sep.',
              value: 47,
              type: 'B',
            },
            {
              month: 'Oct.',
              value: 37,
              type: 'B',
            },
            {
              month: 'Nov.',
              value: 80,
              type: 'B',
            },
            {
              month: 'Dec.',
              value: 74,
              type: 'B',
            },
            {
              month: 'Jan.',
              value: 90,
              type: 'C',
            },
            {
              month: 'Feb.',
              value: 95,
              type: 'C',
            },
            {
              month: 'Mar.',
              value: 62,
              type: 'C',
            },
            {
              month: 'Apr.',
              value: 52,
              type: 'C',
            },
            {
              month: 'May.',
              value: 74,
              type: 'C',
            },
            {
              month: 'Jun.',
              value: 87,
              type: 'C',
            },
            {
              month: 'Jul.',
              value: 80,
              type: 'C',
            },
            {
              month: 'Aug.',
              value: 69,
              type: 'C',
            },
            {
              month: 'Sep.',
              value: 74,
              type: 'C',
            },
            {
              month: 'Oct.',
              value: 84,
              type: 'C',
            },
            {
              month: 'Nov.',
              value: 94,
              type: 'C',
            },
            {
              month: 'Dec.',
              value: 23,
              type: 'C',
            },
          ],
        },
      ],
      categoryField: 'month',
      valueField: 'value',
      seriesField: 'type',
      stack: true,
      outerRadius: 1,
      area: {
        visible: true,
      },
      legends: {
        visible: true,
      },
    },
  },
  {
    title: 'Funnel Chart',
    spec: {
      type: 'funnel',
      categoryField: 'name',
      valueField: 'value',
      isTransform: true,
      isCone: false,
      data: [
        {
          id: 'funnel',
          values: [
            {
              value: 5676,
              name: 'Sent',
            },
            {
              value: 3872,
              name: 'Viewed',
            },
            {
              value: 1668,
              name: 'Clicked',
            },
            {
              value: 610,
              name: 'Add to Cart',
            },
            {
              value: 565,
              name: 'Purchased',
            },
          ],
        },
      ],
      label: {
        visible: true,
      },
      transformLabel: {
        visible: true,
      },
      outerLabel: {
        position: 'right',
        visible: true,
      },
      legends: {
        visible: true,
      },
    },
  },
  gauge,
];
