// Imports
import { useState } from 'react';
import { AgCharts } from 'ag-charts-react';
import { getData } from './data.ts';
import ChartTypeToggle from './ChartTypeToggle.tsx';
// Types
import type { JSX } from 'react';
import type { AgChartOptions } from 'ag-charts-community';
import type { IData } from './data.ts';
// Utils
import { formatGdp, formatPopulation } from './utils.ts';

export default function PolarChart(): JSX.Element {
  const selectedCountry = new Set<string>();
  const [data, setData] = useState<IData[]>(getData(selectedCountry));
  const [chartType, setChartType] = useState<'pie' | 'donut'>('donut');

  // Util Method for Updating Dataset when a country is (de)selected
  const toggleDatum = (datum: IData | null) => {
    if (datum == null) {
      selectedCountry.clear();
    } else if (selectedCountry.has(datum.country)) {
      selectedCountry.delete(datum.country);
    } else {
      selectedCountry.add(datum.country);
    }
    setData(getData(selectedCountry));
  };

  const toggleChartType = () => {
    // TODO
  };

  // Chart Options: TODO
  const chartOptions: AgChartOptions = {};

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <ChartTypeToggle chartType={chartType} onToggle={toggleChartType} />
      <AgCharts
        style={{ width: '100%', height: '100%' }}
        options={chartOptions}
      />
    </div>
  );
}
