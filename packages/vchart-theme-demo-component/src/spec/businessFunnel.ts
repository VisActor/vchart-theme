export const businessFunnelSpec = {
  id: 'businessFunnel',
  type: 'common',
  seriesField: 'color',
  height: 300,
  padding: { top: 50, bottom: 50, left: 20, right: 20 },
  data: [
    {
      id: 'main',
      values: [
        { x: '大盘商品', y: 11795000, percent: 100, average: 1000000 },
        { x: '发生价格变化的商品', y: 5300000, percent: 4.52, average: 1000000 },
        { x: '符合筛选条件的商品', y: 174000, percent: 0.19, average: 1000 }
      ]
    },
    {
      id: 'transform',
      values: [
        { x: '0-1', y0: 11795000, y1: 5300000, y: 6495000, percent: -95.48 },
        { x: '1-2', y0: 5300000, y1: 174000, y: 5126000, percent: -4.33 }
      ]
    }
  ],
  series: [
    {
      type: 'bar',
      id: 'bar',
      dataIndex: 0,
      xField: 'x',
      yField: 'y',
      barWidth: '100%',
      extensionMark: [
        {
          type: 'text',
          dataId: 'main',
          style: {
            x: (datum: any, ctx: any) => ctx.valueToX(datum.x) + ctx.xBandwidth() / 2,
            y: -40,
            textAlign: 'center',
            fontSize: 12,
            stroke: false,
            text: (datum: any) => {
              return {
                type: 'rich',
                text: [
                  {
                    text: `${datum.percent}%\n`,
                    fill: 'black',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    lineHeight: 20
                  },
                  { text: `${datum.y}`, fill: 'grey', textAlign: 'center', lineHeight: 20 }
                ]
              };
            }
          }
        }
      ]
    },
    {
      type: 'bar',
      id: 'transform',
      dataIndex: 1,
      xField: 'x',
      yField: 'y',
      bar: { visible: false },
      extensionMark: [
        {
          type: 'polygon',
          dataId: 'transform',
          dataKey: 'x',
          style: {
            points: (datum: any, ctx: any) => {
              const { valueToX, valueToY, xBandwidth } = ctx;
              return [
                { x: valueToX(datum.x), y: valueToY(0) + 40 },
                { x: valueToX(datum.x) + xBandwidth(), y: valueToY(0) + 40 },
                { x: valueToX(datum.x) + xBandwidth(), y: -40 },
                { x: valueToX(datum.x), y: -40 }
              ];
            },
            fill: 'grey',
            fillOpacity: 0.05
          }
        },
        {
          type: 'polygon',
          dataId: 'transform',
          dataKey: 'x',
          customShape: (data: any, attrs: any, path: any) => {
            const points = attrs.points;
            path.moveTo(points[0].x, points[0].y);
            path.lineTo(points[1].x, points[1].y);
            path.lineTo(points[2].x, points[2].y);
            path.bezierCurveTo(
              (points[0].x + points[1].x) / 2,
              points[2].y,
              (points[0].x + points[1].x) / 2,
              points[3].y,
              points[3].x,
              points[3].y
            );
            path.closePath();
            return path;
          },
          style: {
            points: (datum: any, ctx: any) => {
              const { valueToX, valueToY, xBandwidth } = ctx;
              return [
                { x: valueToX(datum.x), y: valueToY(0) },
                { x: valueToX(datum.x) + xBandwidth(), y: valueToY(0) },
                { x: valueToX(datum.x) + xBandwidth(), y: valueToY(datum.y1) },
                { x: valueToX(datum.x), y: valueToY(datum.y0) }
              ];
            },
            fill: 'rgb(228, 232, 247)'
          }
        },
        {
          type: 'text',
          dataId: 'transform',
          dataKey: 'x',
          style: {
            x: (datum: any, ctx: any) => ctx.valueToX(datum.x) + ctx.xBandwidth() / 2,
            y: -40,
            textAlign: 'center',
            fontSize: 12,
            stroke: false,
            text: (datum: any) => {
              return {
                type: 'rich',
                text: [
                  {
                    text: `${datum.percent}%\n`,
                    fill: 'green',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    lineHeight: 20
                  },
                  { text: `${datum.y}`, fill: 'grey', textAlign: 'center', lineHeight: 20 }
                ]
              };
            }
          }
        }
      ]
    },
    {
      type: 'bar',
      stack: false,
      id: 'average',
      dataIndex: 0,
      xField: 'x',
      yField: 'average',
      barWidth: '100%',
      bar: {
        visible: true,
        style: {
          fill: 'orange',
          height: 2
        }
      },
      tooltip: { visible: false }
    }
  ],
  animation: false,
  tooltip: {
    mark: { visible: false },
    dimension: {
      title: (data: any, params: any) => {
        return {
          value: data[0]?.value?.includes('-') ? '流失情况' : data[0].value
        };
      },
      content: (data: any, params: any) => {
        const isLose = data[0]?.value?.includes('-');
        if (isLose) {
          return [
            { hasShape: false, key: '流失量', value: (datum: any) => datum.y },
            { hasShape: false, key: '流失率', value: (datum: any) => `${datum.percent}%` }
          ];
        }
        return [
          { hasShape: false, key: (datum: any) => datum.x, value: (datum: any) => datum.y },
          { hasShape: false, key: (datum: any) => `${datum.x}占比`, value: (datum: any) => `${datum.percent}%` },
          { hasShape: false, key: `average`, value: (datum: any) => datum.average }
        ];
      }
    }
  },
  axes: [
    { orient: 'left', seriesIndex: [0, 1, 2], visible: false },
    {
      orient: 'bottom',
      paddingInner: 0,
      paddingOuter: 0,
      domain: ['大盘商品', '0-1', '发生价格变化的商品', '1-2', '符合筛选条件的商品'],
      domainLine: { visible: false },
      tick: { visible: false },
      sampling: false,
      label: {
        style: { fill: 'black' },
        autoLimit: true,
        formatMethod: (label: any) => {
          if (label.includes('-')) {
            return {
              type: 'rich',
              text: [
                {
                  image: `<svg t="1722236631845" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9542" width="200" height="200"><path d="M779.8 240.9l225.9 225.9c25 25 25 65.5 0 90.5L779.8 783.1c-1.6 1.6-4.1 1.6-5.7 0l-62.2-62.2c-1.6-1.6-1.6-4.1 0-5.7l148.4-148.4c2.5-2.5 0.7-6.8-2.8-6.8H4c-2.2 0-4-1.8-4-4v-88c0-2.2 1.8-4 4-4h853.5c3.6 0 5.3-4.3 2.8-6.8L711.9 308.8c-1.6-1.6-1.6-4.1 0-5.7l62.2-62.2c1.6-1.6 4.1-1.6 5.7 0z" p-id="9543" fill="#707070"></path></svg>`,
                  height: 14,
                  width: 10
                }
              ]
            };
          }
          return label;
        }
      }
    }
  ]
};
