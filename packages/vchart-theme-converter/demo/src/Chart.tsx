import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import VChart from '@visactor/vchart';
import { vchartToEcharts } from '../../src';

export function Charts(props: {
  echartsOption: any;
  vchartSpec: any;
  themeName: string;
  themeType: string;
  echartsTheme: any;
  vchartTheme: any;
}) {
  const { echartsOption, vchartSpec, echartsTheme, themeName, vchartTheme } = props;
  const ecRef = useRef(null);
  const vcRef = useRef(null);

  const id = Date.now();

  useEffect(() => {
    if (echartsOption && ecRef.current) {
      let theme = echartsTheme;
      if (themeName.includes('vchart')) {
        VChart.ThemeManager.registerTheme('__temp__', vchartTheme);
        theme = vchartToEcharts(VChart.ThemeManager.getTheme('__temp__'));
        console.log(VChart.ThemeManager.getTheme('__temp__'), theme);
        VChart.ThemeManager.removeTheme('__temp__');
      } else {
        console.log(VChart.ThemeManager.getCurrentTheme(), theme);
      }
      const myChart = echarts.init(ecRef.current, theme);
      myChart.setOption(echartsOption);
      const resizeOb = new ResizeObserver(entries => {
        for (const entry of entries) {
          echarts.getInstanceByDom(entry.target).resize();
        }
      });
      // console.log('inner theme:', myChart._theme);
      resizeOb.observe(ecRef.current);
      window['echarts'] = myChart;
      return () => {
        myChart.dispose();
      };
    }
  });

  useEffect(() => {
    if (vchartSpec && vcRef.current) {
      // if (!VChart.ThemeManager.getTheme(themeName)) {
      //   VChart.ThemeManager.registerTheme(themeName, vchartTheme);
      //   console.log('register theme:', themeName);
      // }
      // VChart.ThemeManager.setCurrentTheme(themeName);
      const vchart = new VChart(vchartSpec, { dom: vcRef.current, theme: vchartTheme });
      vchart.renderSync();
      window['vchart'] = vchart;

      return () => {
        vchart.release();
      };
    }
  });

  return (
    <>
      <div
        style={{
          display: 'flex'
        }}
      >
        <div id={`vchart_${id}`} ref={vcRef} style={{ height: '400px', width: '100%' }}></div>
        <div id={`echarts_${id}`} ref={ecRef} style={{ height: '400px', width: '100%' }}></div>
      </div>
    </>
  );
}
