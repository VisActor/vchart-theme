import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import VChart from '@visactor/vchart';
import { initVChartSemiTheme } from '@visactor/vchart-semi-theme';
import { ECTheme } from '../public/echarts-theme';
import { VC2EC } from '../../src/index';

initVChartSemiTheme({ isWatchingMode: true });
const echartsTheme = VC2EC(VChart.ThemeManager.getCurrentTheme());
console.log(echartsTheme);
console.log(VChart.ThemeManager.getCurrentTheme());

export function Charts(props: { echartsOption: any; vchartSpec: any }) {
  const { echartsOption, vchartSpec } = props;
  const ecRef = useRef(null);
  const vcRef = useRef(null);

  const id = Date.now();

  useEffect(() => {
    if (echartsOption && ecRef.current) {
      const myChart = echarts.init(ecRef.current, echartsTheme);
      myChart.setOption(echartsOption);
      const resizeOb = new ResizeObserver(entries => {
        for (const entry of entries) {
          echarts.getInstanceByDom(entry.target).resize();
        }
      });
      console.log('inner theme:', myChart._theme);
      resizeOb.observe(ecRef.current);
      window['echarts'] = myChart;
      return () => {
        myChart.dispose();
      };
    }
  });

  useEffect(() => {
    if (vchartSpec && vcRef.current) {
      const vchart = new VChart(vchartSpec, { dom: vcRef.current });
      vchart.renderSync();
      window['vchart'] = vchart;

      return () => {
        vchart.release();
      };
    }
  }, []);

  return (
    <>
      <div
        style={{
          display: 'flex'
        }}
      >
        <div id={`vchart_${id}`} ref={vcRef} style={{ height: '500px', width: '100%' }}></div>
        <div id={`echarts_${id}`} ref={ecRef} style={{ height: '500px', width: '100%' }}></div>
      </div>
    </>
  );
}
