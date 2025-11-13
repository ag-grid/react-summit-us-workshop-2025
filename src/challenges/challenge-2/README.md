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

### 1. Understanding Polar Coordinates

As we learned in Challenge 1, there are two main coordinate systems for plotting charts: Cartesian and Polar.

Polar charts use a **radius axis** and **angular axis** to plot data. Instead of positioning points by their x/y coordinates, polar charts position them by:

- **Angle**: How far around the circle (in degrees)
- **Radius**: How far from the center

This makes polar charts ideal for showing proportional data and part-to-whole relationships.

![Polar Chart Example](./assets/polar-chart-example.png)

### 2. Pie Charts

Pie charts divide a circle into slices, where each slice's size is proportional to the data value. In AG Charts, pie charts are configured using the `'pie'` series type:

```typescript
series: [
  {
    type: 'pie',
    angleKey: 'value', // Data field that determines slice size
    legendItemKey: 'category', // Data field for legend labels
    calloutLabelKey: 'category', // Data field for callout labels
  },
];
```

Key properties:

- `angleKey`: The data field that determines each slice's angle (size)
- `legendItemKey`: The data field displayed in the legend
- `calloutLabelKey`: The data field shown in callout labels (lines pointing to slices)

### 3. Donut Charts

Donut charts are similar to pie charts but have a hollow center. They use the same configuration as pie charts with `type: 'donut'`:

```typescript
series: [
  {
    type: 'donut',
    angleKey: 'sales',
    legendItemKey: 'product',
  },
];
```

#### Advanced: Dual Encoding with Radius Key

Donut charts support an additional dimension through the `radiusKey` property. This allows you to encode two values per item:

- **Angle**: One metric (e.g., population)
- **Radius**: Another metric (e.g., GDP)

```typescript
series: [
  {
    type: 'donut',
    angleKey: 'metric1', // Controls the angle/size of each segment
    radiusKey: 'metric2', // Controls how far from center each segment extends
    legendItemKey: 'category',
  },
];
```

This creates segments with variable radii, where larger values extend further from the center.

[Learn more about Pie Series options in our documentation.](https://ag-grid.com/charts/react/pie-series/)

[Learn more about Donut Series options in our documentation.](https://ag-grid.com/charts/react/donut-series/)

### 4. React State Management with AG Charts

AG Charts integrates seamlessly with React's state system. When state changes, the chart automatically updates:

```typescript
const [chartType, setChartType] = useState<'pie' | 'donut'>('pie');

const chartOptions: AgChartOptions = {
  series: [
    {
      type: chartType, // Dynamic value from state
      // ... other config
    },
  ],
};
```

When `chartType` changes via `setChartType()`, React re-renders the component and AG Charts updates the visualization. This pattern works for any chart option - data, colors, series configuration, etc.

### 5. Custom Tooltips

Tooltips display additional information when users hover over chart elements. By default, AG Charts provides basic tooltips, but you can customize them with a `renderer` function:

```typescript
tooltip: {
  renderer: ({ datum }) => {
    return {
      title: `${datum.productName}`,
      content: `Sales: $${datum.sales.toLocaleString()}`,
    };
  },
}
```

For more structured tooltips, return a `data` array:

```typescript
tooltip: {
  renderer: ({ datum }) => {
    return {
      title: datum.category,
      data: [
        {
          label: 'Revenue',
          value: formatCurrency(datum.revenue),
        },
        {
          label: 'Units Sold',
          value: datum.units.toLocaleString(),
        },
      ],
    };
  },
}
```

The `datum` parameter contains the data point being hovered over.

[Learn more about Tooltips in our documentation.](https://ag-grid.com/charts/react/tooltips/)

### 6. Item Styling with itemStyler

The `itemStyler` function allows you to conditionally style individual chart items based on their data:

```typescript
itemStyler: (params) => {
  // params.datum contains the data point
  // params.highlighted indicates if item is hovered

  if (params.datum.value > 1000) {
    return {
      fill: 'red',
      stroke: 'darkred',
      strokeWidth: 2,
    };
  }

  // Return undefined for default styling
  return undefined;
}
```

This function is called for each item in the series. Return a style object to override defaults, or `undefined` to use default styles.

For this challenge, you'll use `itemStyler` to change the color of selected items based on a `selected` property in your data.

### 7. Event Listeners

AG Charts provides event listeners for user interactions. For polar charts, the most common is `seriesNodeClick`:

```typescript
listeners: {
  seriesNodeClick: (event) => {
    // event.datum contains the clicked data point
    console.log('Clicked:', event.datum);

    // Update state, show modal, etc.
    handleItemClick(event.datum);
  },
}
```

Other useful listeners include:

- `seriesNodeDoubleClick`: Fired on double-click
- `click`: Fired for any click on the chart

The `event` object contains:

- `datum`: The data point that was clicked
- `series`: The series that was clicked
- Other event details

[Learn more about Events in our documentation.](https://ag-grid.com/charts/react/events/)

### 8. Sector Labels

Sector labels display text directly within chart segments. For polar charts, use `sectorLabelKey` to specify which data field to display:

```typescript
sectorLabelKey: 'value',
sectorLabel: {
  color: 'white',
  fontSize: 10,
  formatter: ({ value }) => {
    // Format the value before display
    return `${value}%`;
  },
}
```

The `formatter` function lets you customize the display format, such as adding units, abbreviating large numbers, or rounding decimals.

## Data Structure

The data is provided in `data.ts`:

```typescript
interface IData {
  country: string;
  gdp2023: number; // GDP in USD
  population: number; // Population count
  selected?: boolean; // Selection state (added dynamically)
}

// Example data point
{
  country: 'United States',
  gdp2023: 76329.5,
  population: 331900000,
  selected: false
}
```

You'll also maintain a `Set` to track selected countries:

```typescript
const selectedCountries = new Set<string>();
```

## Implementation Steps

1. **Set Up State**

   - Import `useState` from React
   - Create state for chart data with type `IData[]`
   - Create state for chart type: `'pie' | 'donut'`
   - Initialize data with `getData()` function
   - Initialize chart type as `'donut'`

2. **Implement Toggle Functions**

   - Create `toggleDatum` function to handle selection
     - Accept a `datum` parameter
     - Add/remove country from `selectedCountries` Set
     - Call `setData(getData())` to refresh with selection state
   - Create `toggleChartType` function
     - Switch between `'pie'` and `'donut'`
     - Update the `chartType` state

3. **Configure Series**

   - Set `type` to the `chartType` state variable
   - Set `angleKey` to the population field
   - Set `radiusKey` to the GDP field (for donut dual-encoding)
   - Configure `legendItemKey` for legend labels
   - Configure `calloutLabelKey` for callout labels

4. **Add Sector Labels**

   - Set `sectorLabelKey` to display population
   - Configure `sectorLabel` object:
     - Set appropriate color (white works on most backgrounds)
     - Set font size (8-10px recommended)
     - Add formatter to abbreviate large numbers (e.g., "331M")

5. **Create Custom Tooltip**

   - Add `tooltip` object with `renderer` function
   - Access clicked data via `datum` parameter
   - Return object with `title` and `data` array
   - Use provided utility functions to format values
   - Import `formatGdp` and `formatPopulation` from `utils.ts`

6. **Implement Item Styling**

   - Add `itemStyler` function to series
   - Check if `params.datum.selected` is true
   - Return style object with red `fill` for selected items
   - Return `undefined` for non-selected items (default styling)

7. **Add Click Listener**

   - Add `listeners` object to series
   - Implement `seriesNodeClick` handler
   - Extract `event.datum` from the event
   - Call `toggleDatum` with the datum

8. **Add Toggle Button**
   - Import the provided `ChartTypeToggle` component
   - Render it positioned over the chart
   - Pass current `chartType` state
   - Pass `toggleChartType` handler function

## Documentation References

- [AG Charts Pie Series](https://ag-grid.com/charts/react/pie-series/)
- [AG Charts Donut Series](https://ag-grid.com/charts/react/donut-series/)
- [AG Charts Tooltips](https://ag-grid.com/charts/react/tooltips/)
- [AG Charts Series Events](https://ag-grid.com/charts/react/events/)
- [AG Charts Item Styling](https://ag-grid.com/charts/react/series-highlighting/)

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

- Start with a basic pie/donut chart before adding interactivity
- The toggle button component is already styled - just import and use it
- Use the provided utility functions (`formatGdp`, `formatPopulation`) for consistent formatting
- Test clicking multiple countries to verify selection state toggles correctly
- Remember to return `undefined` from `itemStyler` for items that should use default styling
- The chart will automatically re-render when state changes - no manual refresh needed
- `radiusKey` creates variable-radius segments in donut charts, adding a second dimension of data
- Check the browser console for any TypeScript errors if the chart doesn't render
- The `getData()` function automatically applies the `selected` property based on the `selectedCountries` Set

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
  setData(getData()); // Refresh data to reflect selection
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
      formatter: ({ value }) => `${(value / 1e6).toFixed(0)}M`,
    },
    tooltip: {
      renderer: ({ datum }) => ({
        title: `${datum.country}`,
        data: [
          { label: 'GDP per Capita', value: formatGdp(datum.gdp2023) },
          { label: 'Population', value: formatPopulation(datum.population) },
        ],
      }),
    },
    itemStyler: (params) => {
      if (params.datum.selected) {
        return { fill: 'red' };
      }
    },
    listeners: {
      seriesNodeClick: (event) => {
        toggleDatum(event.datum);
      },
    },
  },
];
```

### Utility Functions (provided in utils.ts)

```typescript
formatGdp(value: number): string; // Formats GDP values
formatPopulation(value: number): string; // Formats population values
```
