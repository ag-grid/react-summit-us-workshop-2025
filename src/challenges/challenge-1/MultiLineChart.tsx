// Imports
import { AgCharts } from 'ag-charts-react';
import { data, averageEmissionsSince1800 } from './data.ts';
// Types
import type { JSX } from 'react';
import type { AgChartOptions, AgLineSeriesOptions } from 'ag-charts-community';

export default function MultiLineChart(): JSX.Element {
  // Chart Options: TODO
  const chartOptions: AgChartOptions = {
    data: data,
    title: {
      text: 'Annual CO2 Emissions Per Capita Over Time',
    },
    subtitle: {
      text: 'Carbon dioxide (CO₂) emissions from burning fossil fuels and industrial processes.',
    },
    series: [
      {
        type: 'line',
        xKey: 'year',
        yKey: 'unitedStates',
        title: 'USA',
        marker: {
          enabled: false,
        },
      },
      {
        type: 'line',
        xKey: 'year',
        yKey: 'unitedKingdom',
        title: 'UK',
        marker: {
          enabled: false,
        },
      },
      {
        type: 'line',
        xKey: 'year',
        yKey: 'france',
        title: 'France',
        marker: {
          enabled: false,
        },
      },
      {
        type: 'line',
        xKey: 'year',
        yKey: 'canada',
        title: 'Canada',
        marker: {
          enabled: false,
        },
      },
      {
        type: 'line',
        xKey: 'year',
        yKey: 'china',
        title: 'China',
        marker: {
          enabled: false,
        },
      },
      {
        type: 'line',
        xKey: 'year',
        yKey: 'india',
        title: 'India',
        marker: {
          enabled: false,
        },
      },
      {
        type: 'line',
        xKey: 'year',
        yKey: 'italy',
        title: 'Italy',
        marker: {
          enabled: false,
        },
      },
      {
        type: 'line',
        xKey: 'year',
        yKey: 'japan',
        title: 'Japan',
        marker: {
          enabled: false,
        },
      },
      {
        type: 'line',
        xKey: 'year',
        yKey: 'germany',
        title: 'Germany',
        marker: {
          enabled: false,
        },
      },
    ],
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
