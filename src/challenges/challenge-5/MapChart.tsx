// Imports
import { AgCharts } from 'ag-charts-react';
import type { AgChartOptions } from 'ag-charts-enterprise';
import 'ag-charts-enterprise';

import { topology, cables } from './topology.js';
import { data } from './data.js';

export default function MapChart() {
  const chartOptions: AgChartOptions = {
    title: {
      text: 'Global GDP Heatmap',
    },
    subtitle: {
      text: 'Countries colored by GDP - Click to select/deselect',
    },
    data: data,
    topology,
    series: [
      {
        type: 'map-shape',
        idKey: 'iso3',
        topologyIdKey: 'iso3',
        colorKey: 'gdp_md',
        colorName: 'GDP per Capita',
        label: {
          enabled: true,
          fontSize: 9,
        },
        highlight: {
          highlightedItem: {
            strokeWidth: 3,
            fillOpacity: 0.9,
          },
        },
      },
    ],
    gradientLegend: {
      enabled: true,
      position: 'bottom',
      gradient: {
        preferredLength: 400,
        thickness: 12,
      },
    },
    zoom: {
      enabled: true,
    },
  };

  return (
    <AgCharts
      style={{ width: '100%', height: '100%' }}
      options={chartOptions}
    />
  );
}
