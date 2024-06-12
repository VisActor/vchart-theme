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
