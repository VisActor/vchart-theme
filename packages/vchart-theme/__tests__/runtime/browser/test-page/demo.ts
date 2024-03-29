import { isMobile } from 'react-device-detect';
import { charts } from './chart-list';
import VChart from '@visactor/vchart';
import { createElement } from './util';

let chartInstanceList: VChart[] = [];
let cardList: HTMLDivElement[] = [];

const chartHeight = 400;

export function init() {
  release();
  charts.forEach((chart, i) => {
    const card = createElement('div', undefined, {
      width: '50%',
      padding: '30px',
      display: 'inline-block'
    }) as HTMLDivElement;
    document.getElementById('app')?.appendChild(card);

    const chartContainer = createElement('div', undefined, {
      outline: `1px solid #404349`
    }) as HTMLDivElement;
    card.appendChild(chartContainer);

    const chartInstance = new VChart(
      {
        height: chartHeight,
        ...chart.spec
      },
      {
        ...chart.option,
        dom: chartContainer,
        mode: isMobile ? 'mobile-browser' : 'desktop-browser'
      } as any
    );
    chartInstance.renderAsync();

    chartInstanceList.push(chartInstance);
    cardList.push(card);
    window[`vchart_${i}`] = chartInstance;
  });
}

function release() {
  for (const chart of chartInstanceList) {
    chart.release();
  }
  chartInstanceList = [];
  for (const chartContainer of cardList) {
    chartContainer.remove();
  }
  cardList = [];
}

document.getElementById('chartContainer')?.remove();
init();
