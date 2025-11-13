// Imports
import { AgCharts } from 'ag-charts-react';
import { data, averageEmissionsSince1800 } from './data.ts';
// Types
import type { JSX } from 'react';
import type { ICountryData } from './data.ts';
import type { AgChartOptions, AgLineSeriesOptions } from 'ag-charts-community';

export default function MultiLineChart(): JSX.Element {
  // Chart Options: TODO
  const chartOptions: AgChartOptions = {
    title: {
      text: 'Annual CO2 Emissions Per Capita Over Time',
    },
    subtitle: {
      text: 'Carbon dioxide (CO₂) emissions from burning fossil fuels and industrial processes.',
    },
    series: data.map((countryData) => ({
      data: countryData.data as ICountryData[],
      type: 'line',
      xKey: 'year',
      yKey: 'emissionsPerCapita',
      yName: countryData.country,
      marker: {
        enabled: false,
      },
    })) as AgLineSeriesOptions[],
    axes: [
      {
        type: 'number',
        position: 'left',
        label: {
          formatter: (params) => `${params.value.toFixed(0)} t`,
        },
        crossLines: [
          {
            type: 'line',
            value: averageEmissionsSince1800,
            label: {
              text: `Avg: ${averageEmissionsSince1800.toFixed(2)} t`,
              position: 'top-left',
            },
            lineDash: [4, 4],
          },
        ],
      },
      {
        type: 'category',
        position: 'bottom',
        crossLines: [
          {
            type: 'range',
            range: [1914, 1918],
            label: {
              text: 'WW1',
              position: 'top',
              fontSize: 14,
            },
          },
          {
            type: 'range',
            range: [1939, 1945],
            label: {
              text: 'WW2',
              position: 'top',
              fontSize: 14,
            },
          },
        ],
      },
    ],
  };

  return (
    <AgCharts
      style={{ width: '100%', height: '100%' }}
      options={chartOptions}
    />
  );
}
