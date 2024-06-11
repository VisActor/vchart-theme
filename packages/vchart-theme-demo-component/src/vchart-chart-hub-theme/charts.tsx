import React from 'react';
import { isMobile } from 'react-device-detect';
import { charts } from './chart-list';
import { VChart as VChartComponent } from '@visactor/react-vchart';
import VChart from '@visactor/vchart';
import { chartHubLightTheme } from '@visactor/vchart-theme';

import { Card } from '@douyinfe/semi-ui';
import { Grid } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';

const { Row, Col } = Grid;

const chartHeight = 400;

const gutter = 16;

VChart.ThemeManager.registerTheme('chart-hub-light', chartHubLightTheme);
VChart.ThemeManager.setCurrentTheme('chart-hub-light');

export const Charts = () => {
  return (
    <Row gutter={gutter}>
      {charts.map((chart, i) => {
        return (
          <Col span={12} key={i} style={{ marginBottom: 16 }}>
            <Card className="chartContainer" bordered={false} headerLine={true} title={chart.title}>
              <VChartComponent
                spec={{
                  ...chart.spec,
                  height: chartHeight
                }}
                options={{
                  ...chart.option,
                  mode: isMobile ? 'mobile-browser' : 'desktop-browser'
                }}
              />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
