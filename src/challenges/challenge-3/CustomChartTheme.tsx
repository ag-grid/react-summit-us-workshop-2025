// Imports
import { AgCharts } from 'ag-charts-react';
import { data } from './data.ts';
// Types
import type { JSX } from 'react';
import type { AgChartOptions, AgChartTheme } from 'ag-charts-enterprise';

export default function CustomChartTheme(): JSX.Element {
  // Chart Options
  const chartOptions: AgChartOptions = {
    // data: data,
    title: {
      text: 'CO2 Emissions vs GDP per Capita by Country',
    },
    series: [],
    // TODO
    theme: {},
  };

  return (
    <AgCharts
      style={{ width: '100%', height: '100%' }}
      options={chartOptions}
    />
  );
}
