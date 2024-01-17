import React from 'react';
import { createRoot } from 'react-dom/client';
import Frame from './frame.jsx';
import './normalize.css';
import { initVChartSemiTheme } from '../../../../src';
import VChart from '@visactor/vchart';
import { THEME_MODE_ATTRIBUTE } from '../../../../src/common/constants';

initVChartSemiTheme({
  isWatchingThemeSwitch: true
});

// 匹配系统亮暗模式
const mql = window.matchMedia('(prefers-color-scheme: dark)');
function matchMode(e) {
  const body = document.body;
  if (e.matches) {
    if (!body.hasAttribute(THEME_MODE_ATTRIBUTE)) {
      body.setAttribute(THEME_MODE_ATTRIBUTE, 'dark');
    }
  } else {
    if (body.hasAttribute(THEME_MODE_ATTRIBUTE)) {
      body.removeAttribute(THEME_MODE_ATTRIBUTE);
    }
  }
}
matchMode(mql);
mql.addListener(matchMode);

const dom = document.querySelector('#root');
const root = createRoot(dom);
root.render(<Frame />);

window['VChart'] = VChart;
