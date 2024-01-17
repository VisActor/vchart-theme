import React from 'react';
import { Grid } from '@arco-design/web-react';
import Chart from './chart';
import { charts } from '../../../chart-list';

const { Row, Col } = Grid;

const gutter = 16;

function Workplace() {
  return (
    <Row gutter={gutter}>
      {charts.map((chart, i) => {
        return (
          <Col span={12} key={i} style={{ marginBottom: 16 }}>
            <Chart {...chart} />
          </Col>
        );
      })}
    </Row>
  );
}

export default Workplace;
