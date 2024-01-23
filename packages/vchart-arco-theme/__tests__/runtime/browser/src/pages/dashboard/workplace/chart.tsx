import React from 'react';
import { Card, Typography } from '@arco-design/web-react';
import { isMobile } from 'react-device-detect';
import { VChart } from '@visactor/react-vchart';

const chartHeight = 400;

function Chart(props: any) {
  return (
    <Card>
      <Typography.Title heading={6}>{props.title}</Typography.Title>
      <VChart
        spec={{
          height: chartHeight,
          ...props.spec,
        }}
        options={{
          ...props.option,
          mode: isMobile ? 'mobile-browser' : 'desktop-browser',
          // onError: null,
          // logLevel: 5,
        }}
      />
    </Card>
  );
}

export default Chart;
