import React, { useEffect, useState } from 'react';
import { Card, Grid, Select, Typography } from '@arco-design/web-react';
import Chart from './chart';
import { charts } from '../../../chart-list';
import { allLightThemes } from '../../../../../src/light';
import {
  ColorSchemeType,
  initVChartVeOTheme,
  registerBarMarker,
} from '@visactor/vchart-ve-o-theme';
import { observeAttribute } from '@visactor/vchart-theme-utils';
import { VChartCore } from '@visactor/react-vchart';
import { specialDataScheme } from '../../../../../src/common/data-scheme';

registerBarMarker();

const helper = initVChartVeOTheme({
  themeManager: VChartCore.ThemeManager,
});

// 监听 body style 上的主题色变化，强制更新主题
observeAttribute(document.body, 'style', () => {
  helper.switchVChartTheme(true);
});

const { Row, Col } = Grid;

const gutter = 16;

function Workplace() {
  const [currentColorSchemeType, setCurrentColorSchemeType] =
    useState<string>('default');

  const switchTheme = (name: string) => {
    setCurrentColorSchemeType(name);
  };

  useEffect(() => {
    helper.switchVChartColorScheme(currentColorSchemeType);
  }, [currentColorSchemeType]);

  return (
    <div>
      <Row gutter={gutter}>
        <Col span={24} style={{ marginBottom: 16, textAlign: 'center' }}>
          <Card>
            <Typography.Text type="secondary">
              Please select a color scheme:
            </Typography.Text>
            <Select
              placeholder="Select a theme"
              style={{
                minWidth: 100,
                maxWidth: 250,
                width: '40%',
                marginLeft: 20,
              }}
              defaultValue={currentColorSchemeType}
              renderFormat={(option, value) => value as any}
              onChange={switchTheme}
              showSearch
            >
              {Object.values(ColorSchemeType).map((type, i) => (
                <Select.Option key={i} value={type}>
                  <Typography.Paragraph
                    style={{ marginTop: '1em', marginBottom: 0 }}
                  >
                    <Typography.Text>{type}</Typography.Text>
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    <Typography.Text type="primary" style={{ fontSize: 12 }}>
                      {specialDataScheme[type]?.name ?? '默认色板'}
                    </Typography.Text>
                  </Typography.Paragraph>
                </Select.Option>
              ))}
            </Select>
          </Card>
        </Col>
      </Row>
      <Row gutter={gutter}>
        {charts.map((chart, i) => {
          return (
            <Col span={12} key={i} style={{ marginBottom: 16 }}>
              <Chart {...chart} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Workplace;
