// Imports
import { AgCharts } from 'ag-charts-react';
import { data } from './data.ts';
// Types
import type { JSX } from 'react';
import type { AgChartOptions, AgChartTheme } from 'ag-charts-enterprise';

export default function CustomChartTheme(): JSX.Element {
  // Custom Theme
  const chartTheme: AgChartTheme = {
    palette: {
      fills: ['#5470C6', '#91CC75', '#FAC858'],
      strokes: ['#3B5BA5', '#6FA055', '#D4A037'],
    },
    overrides: {
      bar: {
        series: {
          strokeWidth: 2,
          fillOpacity: 0.9,
          shadow: {
            enabled: true,
            color: 'rgba(0, 0, 0, 0.15)',
          },
        },
      },
      line: {
        series: {
          strokeWidth: 2,
          marker: {
            enabled: true,
            size: 4,
            strokeWidth: 1,
            shape: 'diamond',
          },
        },
      },
      common: {
        background: {
          fill: '#f8f9fa',
        },
        title: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#2c3e50',
        },
        axes: {
          category: {
            line: {
              stroke: '#6c757d',
            },
          },
          number: {
            line: {
              stroke: '#6c757d',
            },
            gridLine: {
              style: [
                {
                  stroke: '#dee2e6',
                  lineDash: [4, 4],
                },
              ],
            },
          },
        },
      },
    },
  };

  // Chart Options
  const chartOptions: AgChartOptions = {
    theme: chartTheme,
    title: {
      text: 'CO2 Emissions vs GDP per Capita by Country',
    },
    data: data,
    series: [
      {
        type: 'line',
        xKey: 'country',
        yKey: 'gdpPerCapita2023',
        yName: 'GDP per Capita 2023 ($)',
      },
      {
        type: 'bar',
        xKey: 'country',
        yKey: 'co2Emissions2023',
        yName: 'CO2 Emissions 2023 (tonnes/capita)',
      },
      {
        type: 'bar',
        xKey: 'country',
        yKey: 'avgCO2EmissionsSince1920',
        yName: 'Avg CO2 Since 1920',
      },
    ],
    axes: [
      {
        type: 'category',
        position: 'bottom',
        label: {
          rotation: 45,
        },
      },
      {
        type: 'number',
        position: 'left',
        keys: ['co2Emissions2023', 'avgCO2EmissionsSince1920'],
        title: {
          text: 'CO2 Emissions (tonnes/capita)',
        },
      },
      {
        type: 'number',
        position: 'right',
        keys: ['gdpPerCapita2023'],
        title: {
          text: 'GDP per Capita ($)',
        },
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
