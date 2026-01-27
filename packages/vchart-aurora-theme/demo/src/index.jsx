import React from 'react';
import { createRoot } from 'react-dom/client';
import Frame from './frame.jsx';
import './normalize.css';
import VChart from '@visactor/vchart';
import { chartAuroraTheme } from '../../src/index.ts';

VChart.ThemeManager.registerTheme('aurora', chartAuroraTheme);
VChart.ThemeManager.setCurrentTheme('aurora');

const dom = document.querySelector('#root');
const root = createRoot(dom);
root.render(<Frame />);

window['VChart'] = VChart;
