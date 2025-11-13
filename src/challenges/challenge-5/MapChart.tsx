// Imports
import { AgCharts } from 'ag-charts-react';
import type { AgChartOptions } from 'ag-charts-enterprise';
import 'ag-charts-enterprise';

import { topology } from './topology.js';
import { data } from './data.js';
import { formatNumber } from './utils.js';

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
        tooltip: {
          renderer: function ({ datum }) {
            return {
              data: [
                {
                  label: 'GDP',
                  value: `$${formatNumber(datum.gdp_md)}`,
                },
              ],
            };
          },
        },
      },
      {
        type: 'map-marker',
        idKey: 'iso3',
        topologyIdKey: 'iso3',
        sizeKey: 'pop_est',
        sizeName: 'Population',
        maxSize: 30,
        strokeWidth: 1,
        tooltip: {
          renderer: function ({ datum }) {
            return {
              data: [
                {
                  label: 'Population',
                  value: formatNumber(datum.pop_est),
                },
              ],
            };
          },
        },
      },
    ],
    gradientLegend: {
      enabled: true,
      position: 'right',
      gradient: {
        preferredLength: 400,
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
