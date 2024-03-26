import React from 'react';
import { createRoot } from 'react-dom/client';
import Frame from './frame.jsx';
import './normalize.css';
import { initVChartSemiTheme, VChartSemiThemeHelper } from '../../src';
import VChart from '@visactor/vchart';

initVChartSemiTheme({
  isWatchingThemeSwitch: true
});

// 匹配系统亮暗模式
const mql = window.matchMedia('(prefers-color-scheme: dark)');
function matchMode(e) {
  const body = document.body;
  if (e.matches) {
    if (!body.hasAttribute(VChartSemiThemeHelper.themeModeAttribute)) {
      body.setAttribute(VChartSemiThemeHelper.themeModeAttribute, 'dark');
    }
  } else {
    if (body.hasAttribute(VChartSemiThemeHelper.themeModeAttribute)) {
      body.removeAttribute(VChartSemiThemeHelper.themeModeAttribute);
    }
  }
}
matchMode(mql);
mql.addListener(matchMode);

const dom = document.querySelector('#root');
const root = createRoot(dom);
root.render(<Frame />);

window['VChart'] = VChart;
