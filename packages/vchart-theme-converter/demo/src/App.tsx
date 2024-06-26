import React from 'react';
import { spec as vchartLineSpec } from './spec/vchart/line';
import { spec as echartsLineOption } from './spec/echarts/line';
import { Charts } from './Chart';
import './index.css';

const demoList = [{ vchartSpec: vchartLineSpec, echartsOption: echartsLineOption }];

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
