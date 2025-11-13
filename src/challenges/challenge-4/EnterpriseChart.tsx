import { AgCharts } from 'ag-charts-react';
import { data } from './data.js';
import 'ag-charts-enterprise';
import type { AgChartOptions } from 'ag-charts-enterprise';

export default function EnterpriseChart() {
  // TODO: Chart Options
  const options: AgChartOptions = {};

  return (
    <AgCharts style={{ width: '100%', height: '100%' }} options={options} />
  );
}
