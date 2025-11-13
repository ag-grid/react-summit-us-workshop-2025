// Imports
import { AgFinancialCharts } from 'ag-charts-react';
import type {
  AgAnnotation,
  AgFinancialChartOptions,
} from 'ag-charts-enterprise';
import 'ag-charts-enterprise';
import { getData } from './data.ts';
// Constants
const MONTH = 30 * 24 * 60 * 60 * 1000;

// TODO: Annotations
const chartAnnotations = [] as AgAnnotation[];

// TODO: Theme Overrides (Range Buttons)
const themeOverrides = {
  overrides: {
    common: {
      ranges: {
        enabled: true,
        buttons: [],
      },
    },
  },
};

export default function FinancialChart() {
  const options: AgFinancialChartOptions = {
    title: { text: 'S&P 500 Historical Prices with Annotations' },
    initialState: {
      annotations: chartAnnotations,
    },
    theme: themeOverrides,
  };

  return (
    <AgFinancialCharts
      options={options}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
