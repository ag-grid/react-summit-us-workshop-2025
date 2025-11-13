// Imports
import { AgFinancialCharts } from 'ag-charts-react';
import type {
  AgAnnotation,
  AgFinancialChartOptions,
} from 'ag-charts-enterprise';
import 'ag-charts-enterprise';
import { getData } from './data.ts';

const chartAnnotations = [
  // Global Financial Crisis - September 2008
  {
    type: 'callout',
    text: 'Global Financial Crisis',
    color: '#040404',
    fill: '#ff6666',
    fillOpacity: 0.7,
    stroke: '#F23645',
    strokeOpacity: 1,
    strokeWidth: 2,
    start: {
      x: {
        __type: 'date',
        value: new Date('2008-09-15').getTime(),
      },
      y: 1251,
    },
    end: {
      x: {
        __type: 'date',
        value: new Date('2007-10-01').getTime(),
      },
      y: 1450,
    },
  },

  // GFC Market Bottom - March 2009
  {
    type: 'comment',
    text: 'Market Bottom',
    x: {
      __type: 'date',
      value: new Date('2009-03-09').getTime(),
    },
    y: 676,
  },
  {
    type: 'horizontal-line',
    value: 676,
    stroke: '#089981',
    strokeWidth: 1,
    lineStyle: 'dotted',
    axisLabel: {
      fill: '#089981',
    },
  },

  // COVID-19 Pandemic - March 2020
  {
    type: 'callout',
    text: 'COVID-19 Pandemic',
    color: '#040404',
    fill: '#ff9999',
    fillOpacity: 0.6,
    stroke: '#F23645',
    strokeOpacity: 1,
    strokeWidth: 2,
    start: {
      x: {
        __type: 'date',
        value: new Date('2020-03-16').getTime(),
      },
      y: 2386,
    },
    end: {
      x: {
        __type: 'date',
        value: new Date('2020-01-15').getTime(),
      },
      y: 3100,
    },
  },

  // COVID Market Bottom
  {
    type: 'vertical-line',
    value: new Date('2020-03-23').getTime(),
    stroke: '#F23645',
    strokeWidth: 1,
    lineStyle: 'dashed',
  },

  // Post-COVID Recovery
  {
    type: 'text',
    text: 'Recovery Rally',
    x: {
      __type: 'date',
      value: new Date('2020-11-01').getTime(),
    },
    y: 3500,
  },

  // 2022 Bear Market
  {
    type: 'comment',
    text: '2022 Bear Market',
    x: {
      __type: 'date',
      value: new Date('2022-06-16').getTime(),
    },
    y: 3666,
  },
  {
    type: 'vertical-line',
    value: new Date('2022-06-16').getTime(),
    stroke: '#F23645',
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
