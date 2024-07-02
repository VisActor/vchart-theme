import React from 'react';
import { spec as vchartLineSpec } from './spec/vchart/line';
import { spec as echartsLineOption } from './spec/echarts/line';
import { spec as vchartBarSpec } from './spec/vchart/bar';
import { spec as echartsBarOption } from './spec/echarts/bar';
import { spec as vchartPieSpec } from './spec/vchart/pie';
import { spec as echartsPieOption } from './spec/echarts/pie';
import { spec as vchartFunnelSpec } from './spec/vchart/funnel';
import { spec as echartsFunnelOption } from './spec/echarts/funnel';
import { Charts } from './Chart';
import './index.css';

const demoList = [
  { vchartSpec: vchartLineSpec, echartsOption: echartsLineOption },
  { vchartSpec: vchartBarSpec, echartsOption: echartsBarOption },
  { vchartSpec: vchartPieSpec, echartsOption: echartsPieOption },
  { vchartSpec: vchartFunnelSpec, echartsOption: echartsFunnelOption }
];

function App() {
  return (
    <>
      {demoList.map((demo, i) => {
        const { vchartSpec, echartsOption } = demo;
        return <Charts key={i} vchartSpec={vchartSpec} echartsOption={echartsOption}></Charts>;
      })}
    </>
  );
}

export default App;
