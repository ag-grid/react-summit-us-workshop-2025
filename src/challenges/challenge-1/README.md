# Challenge 1: Multi-Line Chart with Cross Lines

## Overview
Build a multi-line time series chart showing annual CO2 emissions per capita over time for multiple countries. This challenge introduces the fundamentals of AG Charts including series configuration, axes setup, and annotation features.

## Learning Objectives
- Configure basic chart options in AG Charts
- Create multiple line series from country data
- Add axes with custom formatters
- Use cross lines to annotate important events and averages

## Chart Type
**Line Chart** with multiple series (one per country)

## What You'll Build
A line chart displaying CO2 emissions data with:
- Multiple line series (one per country)
- Custom axis labels with formatting
- Horizontal cross line showing the average emissions
- Vertical cross lines and ranges marking historical events (WW1, WW2, GFC)

## Key Concepts

### 1. Chart Options Structure
AG Charts uses a declarative options object:

```typescript
const chartOptions: AgChartOptions = {
  title: { text: 'Chart Title' },
  subtitle: { text: 'Chart Subtitle' },
  series: [...],  // Array of series configurations
  axes: [...]     // Array of axis configurations
};
```

### 2. Series Configuration
Each series requires:
- `type`: Chart type (e.g., `'line'`, `'bar'`, `'area'`)
- `data`: Array of data points
- `xKey`: Property name for x-axis values
- `yKey`: Property name for y-axis values
- `yName`: Display name in legend

```typescript
{
  type: 'line',
  data: myData,
  xKey: 'year',
  yKey: 'value',
  yName: 'Display Name',
  marker: {
    enabled: false  // Disable markers for cleaner lines
  }
}
```

### 3. Axes Configuration
Configure axes with position and formatting:

```typescript
{
  type: 'number',        // 'number', 'category', 'time', etc.
  position: 'left',      // 'left', 'right', 'top', 'bottom'
  label: {
    formatter: (params) => `${params.value.toFixed(0)} t`
  }
}
```

### 4. Cross Lines
Annotate charts with reference lines:

**Horizontal/Vertical Line:**
```typescript
crossLines: [
  {
    type: 'line',
    value: 2009,           // The x or y value
    label: {
      text: 'GFC',
      position: 'top',
      fontSize: 14
    },
    lineDash: [4, 4]       // Dashed line pattern
  }
]
```

**Range (Shaded Area):**
```typescript
{
  type: 'range',
  range: [1914, 1918],     // Start and end values
  label: {
    text: 'WW1',
    position: 'top',
    fontSize: 14
  }
}
```

## Data Structure

The data is provided in `data.ts`:

```typescript
// Array of country data objects
const data = [
  {
    country: 'Canada',
    data: [
      { year: 1800, annualCO2EmissionsPerCapita: 0.0 },
      { year: 1801, annualCO2EmissionsPerCapita: 0.0 },
      // ... more years
    ]
  },
  // ... more countries
];

// Pre-calculated average
const averageEmissionsSince1800 = 4.56;
```

## Implementation Steps

1. **Import Required Types**
   - Import `AgChartOptions` and `AgLineSeriesOptions` from `'ag-charts-community'`

2. **Configure Title and Subtitle**
   - Set appropriate title and subtitle text

3. **Map Data to Series**
   - Transform the `data` array into series configurations
   - Each country becomes a separate line series
   - Use `map()` to create series from country data

4. **Configure Left Axis (Y-axis)**
   - Set type to `'number'`
   - Position on the `'left'`
   - Add a formatter to display values with units (e.g., "10 t")
   - Add a horizontal cross line at `averageEmissionsSince1800`

5. **Configure Bottom Axis (X-axis)**
   - Set type to `'category'`
   - Position on the `'bottom'`
   - Add range cross lines for WW1 (1914-1918) and WW2 (1939-1945)
   - Add a vertical line cross line for GFC (2009)

## Code Snippets

### Creating Series from Data
```typescript
series: data.map((countryData) => ({
  data: countryData.data as ICountryData[],
  type: 'line',
  xKey: 'year',
  yKey: 'annualCO2EmissionsPerCapita',
  yName: countryData.country,
  marker: {
    enabled: false,
  },
})) as AgLineSeriesOptions[]
```

### Axis Label Formatter
```typescript
label: {
  formatter: (params) => `${params.value.toFixed(0)} t`
}
```

## Documentation References

- [AG Charts Line Series](https://charts.ag-grid.com/react/line-series/)
- [AG Charts Axes](https://charts.ag-grid.com/react/axes/)
- [AG Charts Cross Lines](https://charts.ag-grid.com/react/axes-cross-lines/)
- [AG Charts Options Reference](https://charts.ag-grid.com/react/api/options/)

## Success Criteria

Your chart should display:
- Multiple colored lines (one per country)
- Y-axis labels with "t" suffix (tonnes)
- Horizontal dashed line showing average emissions
- Shaded ranges for WW1 and WW2
- Vertical line marking the GFC in 2009
- Interactive legend showing all countries
- Tooltips on hover showing exact values

## Tips

- Start with a basic chart and add features incrementally
- Use the browser console to debug any TypeScript errors
- Cross lines are added to the axis configuration, not the series
- The `lineDash` property uses an array pattern: `[dashLength, gapLength]`
- Test your chart by hovering over lines to see tooltips
