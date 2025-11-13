# Challenge 3: Custom Themes and Mixed Series Types

## Overview
Create a multi-series chart with custom theming that combines line and bar series on different Y-axes. This challenge introduces AG Charts' theming system, mixed chart types, and dual-axis configuration for comparing different data scales.

## Learning Objectives
- Create and apply custom chart themes
- Configure charts with multiple series types (line + bar)
- Use dual Y-axes for different data scales
- Understand theme structure and overrides
- Apply custom styling to specific series types
- Configure axis relationships using IDs and keys

## Chart Type
**Combination Chart**: Line + Bar series with dual Y-axes

## What You'll Build
A themed chart showing the relationship between:
- CO2 emissions per capita (bar series on left axis)
- Average CO2 emissions since 1920 (bar series on left axis)
- GDP per capita (line series on right axis)

All with custom colors, shadows, and styling applied via a theme.

## Key Concepts

### 1. Chart Themes Structure
Themes control the visual appearance of all chart elements:

```typescript
const chartTheme: AgChartTheme = {
  palette: {
    fills: ['#5470C6', '#91CC75', '#FAC858'],    // Fill colors
    strokes: ['#3B5BA5', '#6FA055', '#D4A037'],  // Stroke colors
  },
  overrides: {
    // Series-specific overrides
    bar: { /* bar series styling */ },
    line: { /* line series styling */ },
    // Common overrides for all charts
    common: { /* shared styling */ }
  }
};
```

### 2. Theme Palette
The palette provides default colors cycled through series:

```typescript
palette: {
  fills: ['color1', 'color2', 'color3'],     // Used in order
  strokes: ['border1', 'border2', 'border3'], // Matched to fills
}
```

### 3. Series-Specific Overrides
Customize appearance by series type:

```typescript
overrides: {
  bar: {
    series: {
      strokeWidth: 2,
      fillOpacity: 0.9,
      shadow: {
        enabled: true,
        color: 'rgba(0, 0, 0, 0.15)',
        xOffset: 2,
        yOffset: 2,
        blur: 5,
      },
    },
  },
  line: {
    series: {
      strokeWidth: 3,
      marker: {
        enabled: true,
        size: 8,
        strokeWidth: 2,
      },
    },
  },
}
```

### 4. Common Overrides
Apply styling across all chart types:

```typescript
overrides: {
  common: {
    background: {
      fill: '#f8f9fa',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#2c3e50',
    },
    axes: {
      category: {
        line: { stroke: '#6c757d' },
        label: { color: '#495057', fontSize: 12 },
      },
      number: {
        gridLine: {
          style: [{ stroke: '#dee2e6', lineDash: [4, 4] }],
        },
      },
    },
  },
}
```

### 5. Applying Themes
Add theme to chart options:

```typescript
const chartOptions: AgChartOptions = {
  theme: chartTheme,  // Apply custom theme
  // ... rest of config
};
```

### 6. Mixed Series Types
Combine different series in one chart:

```typescript
series: [
  {
    type: 'line',
    xKey: 'country',
    yKey: 'gdpPerCapita2023',
    yAxis: 'gdp-axis',  // Bind to specific axis
  },
  {
    type: 'bar',
    xKey: 'country',
    yKey: 'co2Emissions2023',
    yAxis: 'co2-axis',  // Bind to different axis
  },
]
```

### 7. Dual Y-Axes Configuration
Create multiple Y-axes with different scales:

```typescript
axes: [
  {
    type: 'category',
    position: 'bottom',
  },
  {
    type: 'number',
    position: 'left',
    keys: ['co2Emissions2023', 'avgCO2EmissionsSince1920'],
    id: 'co2-axis',  // Unique identifier
    title: { text: 'CO2 Emissions (tonnes/capita)' },
  },
  {
    type: 'number',
    position: 'right',
    keys: ['gdpPerCapita2023'],
    id: 'gdp-axis',  // Unique identifier
    title: { text: 'GDP per Capita ($)' },
  },
]
```

## Data Structure

```typescript
interface IData {
  country: string;
  countryCode: string;
  co2Emissions2023: number;           // Current CO2 per capita
  gdp2023: number;                     // Total GDP
  population: number;
  avgCO2EmissionsSince1920: number;   // Historical average
  gdpPerCapita2023: number;           // GDP per person
}
```

## Implementation Steps

### Part 1: Create Custom Theme

1. **Define Theme Object**
   - Create `chartTheme` with type `AgChartTheme`
   - Import type from `'ag-charts-enterprise'`

2. **Configure Palette**
   - Add 5 fill colors
   - Add matching 5 stroke colors (typically darker versions)

3. **Add Bar Series Overrides**
   - Set `strokeWidth` to 2
   - Set `fillOpacity` to 0.9
   - Enable shadow with RGBA color, offsets, and blur

4. **Add Line Series Overrides**
   - Set `strokeWidth` to 3
   - Enable markers with size 8
   - Set marker `strokeWidth` to 2

5. **Add Common Overrides**
   - Style background fill
   - Customize title (size, weight, color)
   - Style category axis (line and label)
   - Style number axis (gridlines with dash pattern)

### Part 2: Configure Chart with Mixed Series

6. **Apply Theme**
   - Add `theme: chartTheme` to chart options

7. **Add Line Series**
   - Type: `'line'`
   - Map GDP per capita to Y-axis
   - Bind to `'gdp-axis'`

8. **Add Bar Series (CO2 2023)**
   - Type: `'bar'`
   - Map current CO2 emissions
   - Bind to `'co2-axis'`

9. **Add Bar Series (Average CO2)**
   - Type: `'bar'`
   - Map historical average CO2
   - Bind to `'co2-axis'`

10. **Configure Bottom Axis**
    - Type: `'category'`
    - Rotate labels 45 degrees

11. **Configure Left Axis (CO2)**
    - Type: `'number'`
    - Position: `'left'`
    - Set `keys` array for both CO2 fields
    - Set `id` to `'co2-axis'`
    - Add descriptive title

12. **Configure Right Axis (GDP)**
    - Type: `'number'`
    - Position: `'right'`
    - Set `keys` array for GDP field
    - Set `id` to `'gdp-axis'`
    - Add descriptive title

## Code Snippets

### Complete Theme Example
```typescript
const chartTheme: AgChartTheme = {
  palette: {
    fills: ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE'],
    strokes: ['#3B5BA5', '#6FA055', '#D4A037', '#C94545', '#5AA0BE'],
  },
  overrides: {
    bar: {
      series: {
        strokeWidth: 2,
        fillOpacity: 0.9,
        shadow: {
          enabled: true,
          color: 'rgba(0, 0, 0, 0.15)',
          xOffset: 2,
          yOffset: 2,
          blur: 5,
        },
      },
    },
    line: {
      series: {
        strokeWidth: 3,
        marker: {
          enabled: true,
          size: 8,
          strokeWidth: 2,
        },
      },
    },
    common: {
      background: { fill: '#f8f9fa' },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c3e50',
      },
      axes: {
        category: {
          line: { stroke: '#6c757d' },
          label: { color: '#495057', fontSize: 12 },
        },
        number: {
          line: { stroke: '#6c757d' },
          label: { color: '#495057', fontSize: 12 },
          gridLine: {
            style: [{ stroke: '#dee2e6', lineDash: [4, 4] }],
          },
        },
      },
    },
  },
};
```

### Dual Axis Configuration
```typescript
axes: [
  {
    type: 'category',
    position: 'bottom',
    label: { rotation: 45 },
  },
  {
    type: 'number',
    position: 'left',
    keys: ['co2Emissions2023', 'avgCO2EmissionsSince1920'],
    id: 'co2-axis',
    title: { text: 'CO2 Emissions (tonnes/capita)' },
  },
  {
    type: 'number',
    position: 'right',
    keys: ['gdpPerCapita2023'],
    id: 'gdp-axis',
    title: { text: 'GDP per Capita ($)' },
  },
]
```

### Series with Axis Binding
```typescript
series: [
  {
    type: 'line',
    xKey: 'country',
    yKey: 'gdpPerCapita2023',
    yName: 'GDP per Capita 2023 ($)',
    yAxis: 'gdp-axis',  // Links to axis ID
  },
  {
    type: 'bar',
    xKey: 'country',
    yKey: 'co2Emissions2023',
    yName: 'CO2 Emissions 2023 (tonnes/capita)',
    yAxis: 'co2-axis',
  },
]
```

## Documentation References

- [AG Charts Themes](https://charts.ag-grid.com/react/themes/)
- [AG Charts Theme API](https://charts.ag-grid.com/react/themes-api/)
- [AG Charts Combination Series](https://charts.ag-grid.com/react/combination-series/)
- [AG Charts Multiple Axes](https://charts.ag-grid.com/react/axes-multiple/)
- [AG Charts Bar Series](https://charts.ag-grid.com/react/bar-series/)

## Success Criteria

Your chart should display:
- Custom background color
- Styled title with custom font
- Three series: 1 line + 2 bars
- Line series on right Y-axis (GDP)
- Bar series on left Y-axis (CO2)
- Drop shadows on bars
- Markers on line series
- Dashed gridlines
- 45-degree rotated category labels
- Both Y-axes with appropriate titles
- Themed colors from the palette
- All styling applied via the theme

## Tips

- Import `AgChartTheme` from `'ag-charts-enterprise'`
- The `keys` property on axes determines which series use that axis
- Axis IDs link series to specific axes via the `yAxis` property
- Theme overrides apply globally but can be overridden per series
- Use the same axis ID in both the axis config and series config
- Test the theme by checking shadows and colors in the browser
- Ensure all three series are visible and properly scaled
- The palette colors are assigned to series in order
