import React, { useEffect, useState } from 'react';
import { spec as vchartLineSpec } from './spec/vchart/line';
import { spec as echartsLineOption } from './spec/echarts/line';
import { spec as vchartBarSpec } from './spec/vchart/bar';
import { spec as echartsBarOption } from './spec/echarts/bar';
import { spec as vchartPieSpec } from './spec/vchart/pie';
import { spec as echartsPieOption } from './spec/echarts/pie';
import { spec as vchartFunnelSpec } from './spec/vchart/funnel';
import { spec as echartsFunnelOption } from './spec/echarts/funnel';
import { Charts } from './Chart';
import { theme as echartsShine } from './theme/echarts-shine';
import { theme as echartsDark } from './theme/echarts-dark';
import { theme as echartsVintage } from './theme/echarts-vintage';
import { chartHubLightTheme } from '@visactor/vchart-theme';

import './index.css';
import { echartsToVChart, vchartToEcharts } from '../../src';
import { semiDesignDark, semiDesignLight } from '@visactor/vchart-semi-theme';

const demoList = [
  { vchartSpec: vchartLineSpec, echartsOption: echartsLineOption },
  { vchartSpec: vchartBarSpec, echartsOption: echartsBarOption },
  { vchartSpec: vchartPieSpec, echartsOption: echartsPieOption },
  { vchartSpec: vchartFunnelSpec, echartsOption: echartsFunnelOption }
];

const themeList = [
  {
    name: 'vchart-semi-light',
    type: 'light',
    vchartTheme: semiDesignLight,
    echartsTheme: vchartToEcharts(semiDesignLight)
  },
  { name: 'echarts-shine', type: 'light', echartsTheme: echartsShine, vchartTheme: echartsToVChart(echartsShine) },
  {
    name: 'echarts-vintage',
    type: 'light',
    echartsTheme: echartsVintage,
    vchartTheme: echartsToVChart(echartsVintage)
  },
  {
    name: 'vchart-chartHub',
    type: 'light',
    echartsTheme: vchartToEcharts(chartHubLightTheme),
    vchartTheme: chartHubLightTheme
  },
  { name: 'echarts-dark', type: 'dark', echartsTheme: echartsDark, vchartTheme: echartsToVChart(echartsDark, 'dark') },
  { name: 'vchart-semi-dark', type: 'dark', vchartTheme: semiDesignDark, echartsTheme: vchartToEcharts(semiDesignDark) }
];

console.log(themeList);

function App() {
  const [themeName, setThemeName] = useState('vchart-semi-light');
  const [themeType, setThemeType] = useState('light');
  const [ecTheme, setECTheme] = useState(themeList.find(theme => theme.name === 'vchart-semi-light')?.echartsTheme);
  const [vcTheme, setVCTheme] = useState(themeList.find(theme => theme.name === 'vchart-semi-light')?.vchartTheme);

  const handleChange = (event: any) => {
    setThemeName(event.target.value);
  };

  useEffect(() => {
    const theme = themeList.find(theme => theme.name === themeName);
    if (theme) {
      const { type, echartsTheme, vchartTheme } = theme;
      setThemeType(type);
      setECTheme(echartsTheme);
      setVCTheme(vchartTheme);
    }
  }, [themeName]);

  return (
    <>
      <select value={themeName} onChange={handleChange}>
        {themeList.map(theme => {
          return <option value={theme.name}>{theme.name}</option>;
        })}
      </select>
      {demoList.map((demo, i) => {
        const { vchartSpec, echartsOption } = demo;
        return (
          <Charts
            key={i}
            vchartSpec={vchartSpec}
            echartsOption={echartsOption}
            themeName={themeName}
            themeType={themeType}
            echartsTheme={ecTheme}
            vchartTheme={vcTheme}
          ></Charts>
        );
      })}
    </>
  );
}

export default App;
