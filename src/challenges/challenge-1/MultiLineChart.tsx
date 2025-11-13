// Imports
import { AgCharts } from 'ag-charts-react';
import { data, averageEmissionsSince1800 } from './data.ts';
// Types
import type { JSX } from 'react';
import type { ICountryData } from './data.ts';
import type { AgChartOptions, AgLineSeriesOptions } from 'ag-charts-community';

export default function MultiLineChart(): JSX.Element {
  // Chart Options: TODO
  const chartOptions: AgChartOptions = {};

  return (
    <AgCharts
      style={{ width: '100%', height: '100%' }}
      options={chartOptions}
    />
  );
}
