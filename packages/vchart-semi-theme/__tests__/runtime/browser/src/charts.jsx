import React from 'react';
import { isMobile } from 'react-device-detect';
import { charts } from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts';
import { VChart } from '@visactor/react-vchart';

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
              width: '50%',
              padding: '30px',
              display: 'inline-block'
            }}
          >
            <div className="chartContainer" style={{ outline: `1px solid #404349` }}>
              <VChart
                spec={{
                  height: chartHeight,
                  ...chart.spec
                }}
                option={{
                  ...chart.option,
                  mode: isMobile ? 'mobile-browser' : 'desktop-browser'
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Charts;
