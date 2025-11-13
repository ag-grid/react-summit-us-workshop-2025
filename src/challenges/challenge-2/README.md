# Challenge 2: Interactive Polar Charts with State Management

## Overview
Build an interactive polar chart (Pie/Donut) with GDP data that supports user interactions including chart type toggling and item selection. This challenge introduces polar series, React state management with AG Charts, custom tooltips, and event listeners.

## Learning Objectives
- Configure pie and donut chart series
- Implement React state to control chart behavior
- Handle click events on chart elements
- Create custom tooltips with formatted data
- Use `itemStyler` to customize individual items
- Toggle between different chart types dynamically

## Chart Type
**Polar Charts**: Pie and Donut charts with interactive features

## What You'll Build
A dynamic polar chart displaying:
- GDP data by country with population weighting
- Toggle button to switch between pie and donut views
- Click-to-select functionality (selected items turn red)
- Custom tooltips with formatted GDP and population
- Sector labels showing population values
- Interactive legend

## Key Concepts

### 1. Pie vs Donut Charts
Both use the same configuration with different `type` values:

```typescript
series: [
  {
    type: 'pie',        // or 'donut'
    angleKey: 'value',  // Determines slice size
    legendItemKey: 'category',
    calloutLabelKey: 'category',  // Labels outside chart
  }
]
```

### 2. Donut Charts with Radius Key
Donut charts can use `radiusKey` for dual encoding:

```typescript
series: [
  {
    type: 'donut',
    angleKey: 'population',   // Controls angle/size
    radiusKey: 'gdp2023',     // Controls radius from center
    legendItemKey: 'country',
  }
]
```

### 3. React State Management with AG Charts
Charts respond to state changes:

```typescript
const [chartType, setChartType] = useState<'pie' | 'donut'>('donut');

const chartOptions: AgChartOptions = {
  series: [
    {
      type: chartType,  // Dynamic type from state
      // ... other config
    }
  ]
};
```

### 4. Custom Tooltips
Format tooltip content with a renderer function:

```typescript
tooltip: {
  renderer: ({ datum }) => {
    return {
      title: `${datum.country} GDP`,
      data: [
        {
          label: 'GDP',
          value: formatGdp(datum['gdp2023']),
        },
        {
          label: 'Population',
          value: formatPopulation(datum['population']),
        },
      ],
    };
  },
}
```

### 5. Item Styling
Conditionally style individual items:

```typescript
itemStyler: (params) => {
  if (params.datum.selected) {
    return {
      fill: 'red',
    };
  }
  // Return undefined for default styling
}
```

### 6. Click Event Listeners
Handle user interactions:

```typescript
listeners: {
  seriesNodeClick: (event) => {
    // Access clicked item via event.datum
    toggleDatum(event.datum);
  },
}
```

### 7. Sector Labels
Display values within chart sectors:

```typescript
sectorLabelKey: 'population',
sectorLabel: {
  color: 'white',
  fontSize: 8,
  formatter: ({ value }) => `$${(value / 1000).toFixed(1)}K`,
}
```

## Data Structure

```typescript
interface IData {
  country: string;
  gdp2023: number;        // GDP in USD
  population: number;      // Population count
  selected?: boolean;      // Selection state
}

// Tracks which countries are selected
const selectedCountries = new Set<string>();
```

## Implementation Steps

1. **Set Up State**
   - Import `useState` from React
   - Create state for chart data and chart type
   - Initialize with `getData()` and `'donut'`

2. **Implement Toggle Functions**
   - Create `toggleDatum` to add/remove countries from selection
   - Create `toggleChartType` to switch between pie and donut
   - Update state to trigger re-render

3. **Configure Series**
   - Use `chartType` state for dynamic series type
   - Set `angleKey` to `'population'`
   - Set `radiusKey` to `'gdp2023'`
   - Configure label keys for legend and callouts

4. **Add Sector Labels**
   - Configure `sectorLabel` with formatter
   - Format values as abbreviated thousands (e.g., "12.5K")

5. **Create Custom Tooltip**
   - Use `tooltip.renderer` to format display
   - Import and use `formatGdp` and `formatPopulation` utilities

6. **Implement Item Styling**
   - Add `itemStyler` to check `datum.selected`
   - Return red fill for selected items

7. **Add Click Listener**
   - Implement `seriesNodeClick` listener
   - Call `toggleDatum` with clicked datum

8. **Add Toggle Button**
   - Use provided `ChartTypeToggle` component
   - Position absolutely over chart
   - Pass chart type state and toggle handler

## Code Snippets

### State Setup
```typescript
const [data, setData] = useState<IData[]>(getData());
const [chartType, setChartType] = useState<'pie' | 'donut'>('donut');
```

### Toggle Datum Function
```typescript
const toggleDatum = (datum: IData | null) => {
  if (datum == null) {
    selectedCountries.clear();
  } else if (selectedCountries.has(datum.country)) {
    selectedCountries.delete(datum.country);
  } else {
    selectedCountries.add(datum.country);
  }
  setData(getData());  // Refresh data to reflect selection
};
```

### Series Configuration
```typescript
series: [
  {
    type: chartType,
    angleKey: 'population',
    radiusKey: 'gdp2023',
    legendItemKey: 'country',
    calloutLabelKey: 'country',
    sectorLabelKey: 'population',
    sectorLabel: {
      color: 'white',
      fontSize: 8,
      formatter: ({ value }) => `$${(value / 1000).toFixed(1)}K`,
    },
    tooltip: { /* custom renderer */ },
    itemStyler: (params) => { /* styling logic */ },
    listeners: { /* event handlers */ },
  },
]
```

### Utility Functions (provided)
```typescript
// From utils.ts
formatGdp(value: number): string
formatPopulation(value: number): string
```

## Documentation References

- [AG Charts Pie Series](https://charts.ag-grid.com/react/pie-series/)
- [AG Charts Donut Series](https://charts.ag-grid.com/react/donut-series/)
- [AG Charts Tooltips](https://charts.ag-grid.com/react/tooltips/)
- [AG Charts Series Events](https://charts.ag-grid.com/react/events/)
- [AG Charts Item Styling](https://charts.ag-grid.com/react/styling/)

## Success Criteria

Your chart should:
- Display as a donut chart on initial load
- Toggle between pie and donut when button is clicked
- Show callout labels with country names
- Display population values within sectors
- Show formatted tooltips on hover with GDP and population
- Turn selected countries red when clicked
- Update selection state correctly (toggle on/off)
- Maintain all styling during type changes

## Tips

- The toggle button is already styled - just import and use it
- Use the provided utility functions for consistent formatting
- Test clicking multiple countries to verify selection state
- Remember to return `undefined` from `itemStyler` for default styling
- The chart will automatically re-render when state changes
- `radiusKey` creates variable-radius segments in donut charts
- Clear the browser console to check for any TypeScript errors
