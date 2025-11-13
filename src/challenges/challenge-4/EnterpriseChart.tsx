import { AgCharts } from 'ag-charts-react';
import { data } from './data.js';
import 'ag-charts-enterprise';
import type { AgChartOptions } from 'ag-charts-enterprise';

export default function EnterpriseChart() {
  const options: AgChartOptions = {
    data: data,
    title: { text: `Global CO2 Emissions since 154AD` },
    animation: { enabled: false },
    zoom: {
      enabled: true,
      axes: 'x',
      anchorPointX: 'pointer',
      anchorPointY: 'pointer',
      autoScaling: {
        enabled: true,
      },
    },
    navigator: {
      enabled: true,
      miniChart: {
        enabled: true,
      },
    },
    series: [
      {
        type: 'line',
        xKey: 'Year AD',
        yKey: 'CO2 spline (20 yr, ppm)',
        marker: {
          enabled: false,
        },
      },
    ],
    contextMenu: {
      enabled: true,
    },
    axes: [
      {
        type: 'number',
        position: 'left',
        crosshair: {
          enabled: true,
        },
      },
      {
        type: 'category',
        position: 'bottom',
        crosshair: { enabled: true },
      },
    ],
  };

  return (
    <AgCharts style={{ width: '100%', height: '100%' }} options={options} />
  );
}
