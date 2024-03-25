import React from 'react';
import { isMobile } from 'react-device-detect';
import { charts } from './chart-list';
import { VChart } from '@visactor/react-vchart';
import { Card } from '@douyinfe/semi-ui';

const chartHeight = 400;

const Charts = () => {
  return (
    <div>
      {charts.map((chart, i) => {
        return (
          <div
            key={i}
            className="card"
            style={{
              width: '100%',
              padding: '30px',
              display: 'inline-block'
            }}
          >
            <Card className="chartContainer" padding="0" bordered={false} headerLine={true} title={chart.title}>
              <VChart
                spec={{
                  ...chart.spec,
                  height: chartHeight
                }}
                options={{
                  ...chart.option,
                  mode: isMobile ? 'mobile-browser' : 'desktop-browser'
                  // onError: null,
                  // logLevel: 5
                }}
              />
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Charts;
