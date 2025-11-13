// Imports
import { AgFinancialCharts } from 'ag-charts-react';
import type {
  AgAnnotation,
  AgFinancialChartOptions,
} from 'ag-charts-enterprise';
import 'ag-charts-enterprise';
import { getData } from './data.ts';

const chartAnnotations = [
  {
    type: 'vertical-line',
    text: {
      label: 'Global Financial Crisis',
      position: 'top',
      alignment: 'center',
      fontSize: 14,
      fontFamily: 'Verdana, sans-serif',
      color: '#dc5050',
    },
    value: {
      value: {
        __type: 'date',
        value: '2008-09-16T23:00:00.000Z',
      },
      groupPercentage: 0.110887833394141,
    },
    handle: {
      strokeOpacity: 1,
      strokeWidth: 2,
      fill: 'white',
    },
    axisLabel: {
      enabled: true,
      cornerRadius: 2,
      stroke: '#dc5057',
      strokeOpacity: 1,
      fill: '#dc5057',
      fillOpacity: 1,
      fontSize: 12,
      fontFamily: 'Verdana, sans-serif',
      color: 'white',
    },
    stroke: '#dc5057',
    strokeOpacity: 1,
    strokeWidth: 1,
    lineStyle: 'dashed',
  },
  {
    type: 'vertical-line',
    text: {
      label: 'Covid',
      position: 'top',
      alignment: 'center',
      fontSize: 14,
      fontFamily: 'Verdana, sans-serif',
      color: '#951c81',
    },
    value: {
      value: {
        __type: 'date',
        value: '2020-02-07T00:00:00.000Z',
      },
      groupPercentage: 0.560284983558314,
    },
    handle: {
      strokeOpacity: 1,
      strokeWidth: 2,
      fill: 'white',
    },
    axisLabel: {
      enabled: true,
      cornerRadius: 2,
      stroke: '#951c81',
      strokeOpacity: 1,
      fill: '#951c81',
      fillOpacity: 1,
      fontSize: 12,
      fontFamily: 'Verdana, sans-serif',
      color: 'white',
    },
    stroke: '#951c81',
    strokeOpacity: 1,
    strokeWidth: 1,
    lineStyle: 'dashed',
  },
  {
    type: 'arrow',
    text: {
      label: 'Quantitative Easing',
      position: 'center',
      alignment: 'center',
      fontSize: 12,
      fontFamily: 'Verdana, sans-serif',
      color: '#128f42',
    },
    stroke: '#128f42',
    strokeOpacity: 1,
    strokeWidth: 1,
    lineStyle: 'dashed',
    start: {
      x: {
        value: {
          __type: 'date',
          value: '2020-07-22T23:00:00.000Z',
        },
        groupPercentage: 0.5045670442092546,
      },
      y: 2602.6272577996715,
    },
    end: {
      x: {
        value: {
          __type: 'date',
          value: '2021-10-27T23:00:00.000Z',
        },
        groupPercentage: 0.21227621483463424,
      },
      y: 4171.59277504105,
    },
    handle: {
      strokeOpacity: 1,
      strokeWidth: 2,
      fill: 'white',
    },
  },
  {
    type: 'parallel-channel',
    height: 661.7405582922825,
    middle: {
      strokeWidth: 1,
      lineDash: [6, 5],
    },
    text: {
      label: 'Steady Recovery Growth',
      position: 'top',
      alignment: 'center',
      fontSize: 14,
      fontFamily: 'Verdana, sans-serif',
      color: '#d6b72e',
    },
    background: {
      fill: '#d6b72e',
      fillOpacity: 0.2,
    },
    start: {
      x: {
        value: {
          __type: 'date',
          value: '2009-02-23T00:00:00.000Z',
        },
        groupPercentage: 0.5,
      },
      y: 1268.472906403941,
    },
    end: {
      x: {
        value: {
          __type: 'date',
          value: '2018-12-24T00:00:00.000Z',
        },
        groupPercentage: 0.49999999999974015,
      },
      y: 2997.5369458128075,
    },
    handle: {
      strokeOpacity: 1,
      strokeWidth: 2,
      fill: 'white',
    },
    stroke: '#d6b72e',
    strokeOpacity: 1,
    strokeWidth: 1,
    lineStyle: 'dashed',
  },
] as AgAnnotation[];

const MONTH = 30 * 24 * 60 * 60 * 1000;

export default function FinancialChart() {
  const options: AgFinancialChartOptions = {
    data: getData(),
    title: { text: 'S&P 500 Historical Prices with Annotations' },
    initialState: {
      annotations: chartAnnotations,
    },
    theme: {
      overrides: {
        common: {
          ranges: {
            enabled: true,
            buttons: [
              {
                label: '1M',
                value: 1 * MONTH,
              },
              {
                label: '6M',
                value: 6 * MONTH,
              },
              {
                label: '1Y',
                value: 12 * MONTH,
              },
              {
                label: '5Y',
                value: 60 * MONTH,
              },
              {
                label: 'All',
                value: (start, end) => [start, end],
              },
            ],
          },
        },
      },
    },
  };

  return (
    <AgFinancialCharts
      options={options}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
