// Imports
import { AgCharts } from 'ag-charts-react';
import type { AgChartOptions } from 'ag-charts-enterprise';
import 'ag-charts-enterprise';

import { topology, cables } from './topology.js';
import { data } from './data.js';

export default function MapChart() {
  // Chart Options: TODO
  const chartOptions: AgChartOptions = {};

  return (
    <AgCharts
      style={{ width: '100%', height: '100%' }}
      options={chartOptions}
    />
  );
}
