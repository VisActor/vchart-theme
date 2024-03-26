import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initVChartTTPlatformTheme } from '../../src';
import VChart from '@visactor/vchart';

initVChartTTPlatformTheme();

const dom = document.querySelector('#root');
const root = createRoot(dom);
root.render(<App />);

window['VChart'] = VChart;
