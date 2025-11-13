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
    setChartType((prevType) => (prevType === 'pie' ? 'donut' : 'pie'));
  };

  // Chart Options: TODO
  const chartOptions: AgChartOptions = {
    data,
    title: { text: 'GDP by Country in 2023' },
    subtitle: { text: 'Source: International Monetary Fund' },
    series: [
      {
        type: chartType,
        angleKey: 'population',
        radiusKey: 'gdp2023',
        legendItemKey: 'country',
        calloutLabelKey: 'country',
        sectorLabelKey: 'population',
        sectorLabel: {
          color: 'white',
          fontSize: 8,
          formatter: ({ value }) => `$${(value / 1000).toFixed(1)}K`,
        },
        tooltip: {
          renderer: ({ datum }) => {
            return {
              title: `${datum.country} GDP`,
              data: [
                {
                  label: 'GDP',
                  value: formatGdp(datum['gdp2023']),
                },
                {
                  label: 'Population',
                  value: formatPopulation(datum['population']),
                },
              ],
            };
          },
        },
        itemStyler: (params) => {
          if (params.datum.selected) {
            return {
              fill: 'red',
            };
          }
        },
        listeners: {
          seriesNodeClick: (event) => {
            toggleDatum(event.datum);
          },
        },
      },
    ],
  };

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
