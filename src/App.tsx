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
    docsUrl: '#',
    solutionUrl: '#',
  },
  {
    id: 2,
    title: 'Challenge 2: Polar Chart',
    subtitle:
      'Hint: Use the "series" property in the chart options to define multiple',
    component: PolarChart,
    docsUrl: '#',
    solutionUrl: '#',
  },
  {
    id: 3,
    title: 'Challenge 3: Custom Chart Theme',
    subtitle:
      'Hint: Use the "series" property in the chart options to define multiple',
    component: CustomChartTheme,
    docsUrl: '#',
    solutionUrl: '#',
  },
  {
    id: 4,
    title: 'Challenge 4: Enterprise Chart',
    subtitle:
      'Hint: Use the "series" property in the chart options to define multiple',
    component: EnterpriseChart,
    docsUrl: '#',
    solutionUrl: '#',
  },
  {
    id: 5,
    title: 'Challenge 5: Map Chart',
    subtitle:
      'Hint: Use the "series" property in the chart options to define multiple',
    component: MapChart,
    docsUrl: '#',
    solutionUrl: '#',
  },
  {
    id: 6,
    title: 'Challenge 6: Financial Chart',
    subtitle:
      'Hint: Use the "series" property in the chart options to define multiple',
    component: FinancialChart,
    docsUrl: '#',
    solutionUrl: '#',
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
                className="primary-button"
                onClick={() =>
                  challenge.docsUrl && window.open(challenge.docsUrl, '_blank')
                }
              >
                Docs
              </button>
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
