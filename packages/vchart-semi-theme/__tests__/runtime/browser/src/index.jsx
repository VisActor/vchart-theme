import React from 'react';
import { createRoot } from 'react-dom/client';
import Frame from './frame.jsx';
import './normalize.css';
import { initVChartSemiTheme } from '../../../../src';

initVChartSemiTheme();

// 匹配系统亮暗模式
const mql = window.matchMedia('(prefers-color-scheme: dark)');
function matchMode(e) {
  const body = document.body;
  if (e.matches) {
    if (!body.hasAttribute('theme-mode')) {
      body.setAttribute('theme-mode', 'dark');
    }
  } else {
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
    }
  }
}
matchMode(mql);
mql.addListener(matchMode);

const dom = document.querySelector('#root');
const root = createRoot(dom);
root.render(<Frame />);
