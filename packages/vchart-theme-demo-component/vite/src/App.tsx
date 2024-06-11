import React from 'react';

import { Frame as ChartHubThemePage } from '../../src/vchart-chart-hub-theme/frame';
import './index.less';

function App() {
  return (
    <div className="theme-demo-container">
      <div className="theme-demo-iframe">
        <ChartHubThemePage />;
      </div>
    </div>
  );
}

export default App;
