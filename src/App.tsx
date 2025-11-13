import { useState } from 'react';
import MultiLineChart from './challenges/challenge-1/MultiLineChart';
import PolarChart from './challenges/challenge-2/PolarChart';
import CustomChartTheme from './challenges/challenge-3/CustomChartTheme';
import EnterpriseChart from './challenges/challenge-4/EnterpriseChart';
import MapChart from './challenges/challenge-5/MapChart';
import FinancialChart from './challenges/challenge-6/FinancialChart';
import './App.css';
import type { JSX } from 'react';

interface ChallengeConfig {
  id: number;
  title: string;
  subtitle: string;
  component: () => JSX.Element;
  docsUrl?: string;
  solutionUrl?: string;
}

const challenges: ChallengeConfig[] = [
  {
    id: 1,
    title: 'Challenge 1: Multiple Line Chart',
    subtitle:
      'Hint: Use the "series" property in the chart options to define multiple',
    component: MultiLineChart,
    solutionUrl:
      'https://github.com/ag-grid/react-summit-us-workshop-2025/tree/challenge-1-solution',
  },
  {
    id: 2,
    title: 'Challenge 2: Polar Chart',
    subtitle:
      'Hint: Use the "series" property in the chart options to define multiple',
    component: PolarChart,
    solutionUrl:
      'https://github.com/ag-grid/react-summit-us-workshop-2025/tree/challenge-2-solution',
  },
  {
    id: 3,
    title: 'Challenge 3: Custom Chart Theme',
    subtitle:
      'Hint: Use the "series" property in the chart options to define multiple',
    component: CustomChartTheme,
    solutionUrl:
      'https://github.com/ag-grid/react-summit-us-workshop-2025/tree/challenge-3-solution',
  },
  {
    id: 4,
    title: 'Challenge 4: Enterprise Chart',
    subtitle:
      'Hint: Use the "series" property in the chart options to define multiple',
    component: EnterpriseChart,
    solutionUrl:
      'https://github.com/ag-grid/react-summit-us-workshop-2025/tree/challenge-4-solution',
  },
  {
    id: 5,
    title: 'Challenge 5: Map Chart',
    subtitle:
      'Hint: Use the "series" property in the chart options to define multiple',
    component: MapChart,
    solutionUrl:
      'https://github.com/ag-grid/react-summit-us-workshop-2025/tree/challenge-5-solution',
  },
  {
    id: 6,
    title: 'Challenge 6: Financial Chart',
    subtitle:
      'Hint: Use the "series" property in the chart options to define multiple',
    component: FinancialChart,
    solutionUrl:
      'https://github.com/ag-grid/react-summit-us-workshop-2025/tree/challenge-6-solution',
  },
];

function App() {
  const [fullscreenId, setFullscreenId] = useState<number | null>(null);

  const toggleFullscreen = (id: number) => {
    setFullscreenId(fullscreenId === id ? null : id);
  };

  return (
    <div className="container">
      {challenges.map((challenge) => {
        const ChartComponent = challenge.component;
        const isFullscreen = fullscreenId === challenge.id;

        return (
          <div
            key={challenge.id}
            className={`challenge-box ${isFullscreen ? 'fullscreen' : ''}`}
          >
            <div className="challenge-header">
              <div className="header-top-row">
                <div className="header-text">
                  <h3 className="challenge-title">{challenge.title}</h3>
                </div>
                <button
                  className="fullscreen-toggle"
                  onClick={() => toggleFullscreen(challenge.id)}
                  title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                >
                  {isFullscreen ? '✕' : '⛶'}
                </button>
              </div>
            </div>
            <div className="chart-wrapper">
              <ChartComponent />
            </div>
            <div className="button-row">
              <button
                className="secondary-button"
                onClick={() =>
                  challenge.solutionUrl &&
                  window.open(challenge.solutionUrl, '_blank')
                }
              >
                Solution
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
