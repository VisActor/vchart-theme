import React, { useCallback } from 'react';
import { isMobile } from 'react-device-detect';
import { charts } from './chart-list';
import { VChart as VChartComponent, VChartCore } from '@visactor/react-vchart';
import { i18n } from './i18n';
import { chartHubLightTheme } from '@visactor/vchart-theme';

import { Button, Card } from '@douyinfe/semi-ui';
import { Grid } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import type { IChartInfo } from '../interface';

const { Row, Col } = Grid;
const chartHeight = 400;

const gutter = 16;

const DEMO_SOURCE_PREFIX =
  'https://raw.githubusercontent.com/VisActor/vchart-theme/develop/packages/vchart-theme-demo-component/src/spec/';

VChartCore.ThemeManager.registerTheme('chart-hub-light', chartHubLightTheme as any);
VChartCore.ThemeManager.setCurrentTheme('chart-hub-light');

export interface IProps {
  language?: 'en' | 'zh';
}

export function Charts(props: IProps) {
  const { language = 'zh' } = props;

  const onClick = useCallback(async (chartInfo: IChartInfo) => {
    const { fileName, option } = chartInfo;
    if (!fileName) {
      return;
    }
    const specUrl = `${DEMO_SOURCE_PREFIX}${fileName}.ts`;
    let url = `/vchart/playground?specUrl=${specUrl}`;
    if (option) {
      url += `&initOption=${JSON.stringify(option)}`;
    }
    url += `&theme=chartHubLight`;
    window.open(url);
  }, []);

  return (
    <Row gutter={gutter}>
      {charts.map((chart, i) => {
        return (
          <Col span={12} key={i} style={{ marginBottom: 16 }}>
            <Card
              className="chartContainer"
              bordered={false}
              headerLine={true}
              title={chart.title}
              headerExtraContent={
                <Button
                  size="small"
                  onClick={() => {
                    onClick(chart);
                  }}
                >
                  {i18n.link[language]}
                </Button>
              }
            >
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
}
