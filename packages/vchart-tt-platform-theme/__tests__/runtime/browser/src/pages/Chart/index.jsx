import React, { useRef } from 'react';
import { BarChart, CommonChart, RadarChart, FunnelChart } from '@visactor/react-vchart';
import { Typography } from '@douyinfe/semi-ui';
import {
  lineSpec,
  barSpec,
  pieSpec,
  radarSpec,
  funnelSpec,
  barStackedSpec,
  barStackedHorizontalSpec,
  barStackedPercentSpec,
  areaSpec,
  barGroupSpec,
  barGroupHorizontalSpec
} from './chartTheme';

const Chart = () => {
  const chartRef = useRef(null);
  const handleChartClick = () => {
    console.log('图表被点击了');
  };

  const { Title } = Typography;

  return (
    <div className="chart">
      {/* bar chart */}
      <div className="chartBlock">
        <div className="chartTitle">
          <Title
            heading={5}
            // className="heading"
            style={{ margin: '20px 24px 12px 24px', textAlign: 'left' }}
          >
            This is group bar chart
          </Title>
        </div>
        <CommonChart ref={chartRef} onClick={handleChartClick} spec={barGroupSpec} />
      </div>
      {/* stacked bar chart */}
      <div className="chartBlock">
        <div className="chartTitle">
          <Title
            heading={5}
            // className="heading"
            style={{ margin: '20px 24px 12px 24px', textAlign: 'left' }}
          >
            TikTok Platform Design is Awesome!!!
          </Title>
        </div>
        <BarChart ref={chartRef} onClick={handleChartClick} spec={barStackedSpec} />
      </div>
      {/* horizontal bar chart */}
      <div className="chartBlock">
        <div className="chartTitle">
          <Title
            heading={5}
            // className="heading"
            style={{ margin: '20px 24px 12px 24px', textAlign: 'left' }}
          >
            This is group bar chart
          </Title>
        </div>
        <CommonChart ref={chartRef} onClick={handleChartClick} spec={barGroupHorizontalSpec} />
      </div>
      {/* stacked horizontal bar chart */}
      <div className="chartBlock">
        <div className="chartTitle">
          <Title
            heading={5}
            // className="heading"
            style={{ margin: '20px 24px 12px 24px', textAlign: 'left' }}
          >
            TikTok Platform Design is Awesome!!!
          </Title>
        </div>
        <BarChart ref={chartRef} onClick={handleChartClick} spec={barStackedHorizontalSpec} />
      </div>
      {/* stacked percent bar chart */}
      <div className="chartBlock">
        <div className="chartTitle">
          <Title
            heading={5}
            // className="heading"
            style={{ margin: '20px 24px 12px 24px', textAlign: 'left' }}
          >
            TikTok Platform Design is Awesome!!!
          </Title>
        </div>
        <BarChart ref={chartRef} onClick={handleChartClick} spec={barStackedPercentSpec} />
      </div>
      <div className="ChartsContainer">
        {/* 图表03 Line Chart */}
        <div className="chartBlock">
          <div className="chartTitle">
            <Title heading={5} style={{ margin: '20px 24px 12px 24px', textAlign: 'left' }}>
              This is Line Chart
            </Title>
          </div>
          <CommonChart ref={chartRef} onClick={handleChartClick} spec={lineSpec} />
        </div>
        {/* 图表04 Pie */}
        <div className="chartBlock">
          <div className="chartTitle">
            <Title heading={5} style={{ margin: '20px 24px 12px 24px', textAlign: 'left' }}>
              This is a Pie Chart~~
            </Title>
          </div>
          <CommonChart ref={chartRef} onClick={handleChartClick} spec={pieSpec} />
        </div>
      </div>
      {/* 图表05 Radar */}
      <div className="chartBlock">
        <div className="chartTitle">
          <Title heading={5} style={{ margin: '20px 24px 12px 24px', textAlign: 'left' }}>
            This is a Pie Chart~~
          </Title>
        </div>
        <RadarChart ref={chartRef} onClick={handleChartClick} spec={radarSpec} />
      </div>
      {/* 图表06 Funnel */}
      <div className="chartBlock">
        <div className="chartTitle">
          <Title heading={5} style={{ margin: '20px 24px 12px 24px', textAlign: 'left' }}>
            This is a Pie Chart~~
          </Title>
        </div>
        <FunnelChart ref={chartRef} onClick={handleChartClick} spec={funnelSpec} />
      </div>
      {/* 图表07 Area chart */}
      <div className="chartBlock">
        <div className="chartTitle">
          <Title heading={5} style={{ margin: '20px 24px 12px 24px', textAlign: 'left' }}>
            This is an area chart
          </Title>
        </div>
        <FunnelChart ref={chartRef} onClick={handleChartClick} spec={areaSpec} />
      </div>
      {/* 图表08 Basic bar chart */}
      <div className="chartBlock">
        <div className="chartTitle">
          <Title heading={5} style={{ margin: '20px 24px 12px 24px', textAlign: 'left' }}>
            This is a bar chart
          </Title>
        </div>
        <CommonChart ref={chartRef} onClick={handleChartClick} spec={barSpec} />
      </div>
    </div>
  );
};

export default Chart;
