// @ts-nocheck
export const horizontalFunnelSpec = {
  type: 'common',
  data: [
    {
      id: 'funnel',
      values: [
        {
          value: 100,
          name: 'Resume Screening',
          percent: 1
        },
        {
          value: 80,
          name: 'Resume Evaluation',
          percent: 0.8
        },
        {
          value: 50,
          name: 'Evaluation Passed',
          percent: 0.5
        },
        {
          value: 30,
          name: 'Interview',
          percent: 0.3
        }
      ]
    }
  ],
  color: {
    type: 'ordinal',
    range: ['rgb(54,106,253)', 'rgb(103,138,251)', 'rgb(146,173,255)', 'rgb(191,207,255)']
  },
  series: [
    {
      type: 'funnel',
      categoryField: 'name',
      valueField: 'value',
      maxSize: '50%',
      minSize: '10%',
      funnelAlign: 'bottom',
      funnelOrient: 'left',
      isTransform: true,
      shape: 'rect',
      transform: {
        style: {
          fill: 'rgb(222,231,253)'
        }
      },
      label: {
        visible: true,
        style: {
          lineHeight: 16,
          limit: (datum, ctx) => Math.abs(ctx.getPoints(datum)[0].x - ctx.getPoints(datum)[3].x),
          text: datum => `${datum.percent * 100}%`,
          x: (datum, ctx) => ctx.getPoints(datum)[0].x + 10,
          y: (datum, ctx) => ctx.getPoints(datum)[0].y - 10,
          textAlign: 'left',
          textBaseline: 'bottom',
          fontSize: 20,
          fontStyle: 'italic'
        }
      },
      extensionMark: [
        {
          type: 'polygon',
          dataId: 'funnel',
          style: {
            points: (datum, ctx) => {
              const start = ctx.getPoints(datum)[1];
              const end = { x: start.x, y: 0 };
              return [start, end];
            },
            closePath: false,
            lineWidth: 2,
            stroke: 'rgb(243,244,244)'
          }
        },
        {
          type: 'text',
          dataId: 'funnel',
          style: {
            text: (datum, ctx) => {
              return {
                type: 'rich',
                text: [
                  { text: `${datum.name}\n`, fontWeight: 'bold', lineHeight: 30 },
                  {
                    text: `${datum.value / 10}K\n`,
                    fontWeight: 'bold',
                    fontSize: 24,
                    lineHeight: 40,
                    fill: 'black'
                  },
                  {
                    text: `Take percent: ${datum.percent * 10}%`,
                    fontWeight: 'bold',
                    lineHeight: 30
                  }
                ]
              };
            },
            x: (datum, ctx) => ctx.getPoints(datum)[0].x + 10,
            width: (datum, ctx) => {
              return ctx.getPoints(datum)[3].x - ctx.getPoints(datum)[0].x;
            },
            textAlign: 'left',
            y: 10,
            stroke: false,
            fill: 'grey',
            ellipsis: true,
            disableAutoWrapLine: true
          }
        },
        {
          type: 'image',
          dataId: 'funnel',
          style: {
            image:
              'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/sg/client/img/visactor/vrender-icon.svg',
            x: (datum, ctx) =>
              ctx.getPoints(datum)[2].x + (ctx.getPoints(datum)[2].x - ctx.getPoints(datum)[1].x) * 0.5 - 36,
            y: 10,
            align: 'right',
            width: 30,
            height: 26,
            background: 'rgb(238,238,238)',
            fillOpacity: 0.2
          }
        }
      ]
    }
  ]
};
