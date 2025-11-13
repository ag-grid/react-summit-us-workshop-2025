import type { JSX } from 'react';

interface ChartTypeToggleProps {
  chartType: 'pie' | 'donut';
  onToggle: () => void;
}

export default function ChartTypeToggle({
  chartType,
  onToggle,
}: ChartTypeToggleProps): JSX.Element {
  return (
    <button
      onClick={onToggle}
      style={{
        position: 'absolute',
        top: '24px',
        left: '10px',
        zIndex: 10,
        padding: '8px 16px',
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        color: '#555',
        transition: 'all 0.2s',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f0f0f0';
        e.currentTarget.style.borderColor = '#999';
        e.currentTarget.style.color = '#000';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'white';
        e.currentTarget.style.borderColor = '#ddd';
        e.currentTarget.style.color = '#555';
      }}
    >
      {chartType === 'pie' ? '🍩 Donut' : '🥧 Pie'}
    </button>
  );
}
