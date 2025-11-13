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

### 1. Understanding Chart Themes

Themes in AG Charts provide a centralized way to control the visual appearance of your charts. Instead of styling individual elements, you define a theme once and apply it to all charts in your application.

A theme controls:

- **Color palettes**: Default colors for series
- **Typography**: Font sizes, weights, and families
- **Series styling**: Line widths, markers, shadows
- **Axis styling**: Grid lines, labels, tick marks
- **Background colors**: Chart and legend backgrounds

Benefits of using themes:

- **Consistency**: All charts share the same visual language
- **Maintainability**: Update styling in one place
- **Reusability**: Apply the same theme across multiple charts

### 2. Theme Structure

An AG Charts theme consists of two main parts: `palette` and `overrides`.

```typescript
const myTheme: AgChartTheme = {
  palette: {
    fills: ['#color1', '#color2', '#color3'],
    strokes: ['#border1', '#border2', '#border3'],
  },
  overrides: {
    // Series-specific styling
    line: { /* line series style */ },
    bar: { /* bar series style */ },

    // Common styling for all charts
    common: { /* shared settings */ }
  }
};
```

[Learn more about Themes in our documentation.](https://ag-grid.com/charts/react/themes/)

### 3. Theme Palette

The palette defines the default colors used by series. Colors are assigned to series in order:

```typescript
palette: {
  fills: [
    '#5470C6',  // First series
    '#91CC75',  // Second series
    '#FAC858',  // Third series
    '#EE6666',  // Fourth series
  ],
  strokes: [
    '#3B5BA5',  // Border for first series
    '#6FA055',  // Border for second series
    '#D4A037',  // Border for third series
    '#C94545',  // Border for fourth series
  ],
}
```

- `fills`: Background/fill colors for series elements
- `strokes`: Border colors that typically complement the fills

Choose stroke colors that are slightly darker versions of your fill colors for good visual hierarchy.

### 4. Series-Specific Overrides

Overrides allow you to customize styling per series type. Each series type (line, bar, area, etc.) can have its own default styling:

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

This applies the specified styling to **all** bar or line series in your chart automatically.

### 5. Common Overrides

The `common` section applies to all chart types. Use this for consistent styling across your entire application:

```typescript
overrides: {
  common: {
    background: {
      fill: '#f8f9fa',  // Light gray background
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
        line: { stroke: '#6c757d' },
        label: { color: '#495057', fontSize: 12 },
        gridLine: {
          style: [{ stroke: '#dee2e6', lineDash: [4, 4] }],
        },
      },
    },
  },
}
```

Common overrides include:

- Background colors
- Title and subtitle styling
- Axis styling (per axis type)
- Legend styling
- Tooltip styling

[Learn more about Theme API in our documentation.](https://ag-grid.com/charts/react/themes-api/)

### 6. Applying Themes

Once defined, apply your theme to the chart options:

```typescript
const chartOptions: AgChartOptions = {
  theme: myTheme,  // Apply custom theme
  title: { text: 'My Chart' },
  series: [...],
  // ... other options
};
```

The theme applies automatically - you don't need to manually style individual elements.

### 7. Mixed Series Types (Combination Charts)

AG Charts allows you to combine different series types in a single chart:

```typescript
series: [
  {
    type: 'line',
    xKey: 'month',
    yKey: 'temperature',
  },
  {
    type: 'bar',
    xKey: 'month',
    yKey: 'rainfall',
  },
  {
    type: 'area',
    xKey: 'month',
    yKey: 'humidity',
  },
]
```

This creates a chart with three different visual representations of data, making it easy to compare different metrics.

[Learn more about Combination Series in our documentation.](https://ag-grid.com/charts/react/combination-series-cartesian/)

### 8. Dual Y-Axes Configuration

When comparing metrics with different scales (e.g., temperature in degrees vs. rainfall in mm), use multiple Y-axes:

```typescript
axes: [
  {
    type: 'category',
    position: 'bottom',
  },
  {
    type: 'number',
    position: 'left',
    keys: ['temperature', 'humidity'],  // Series that use this axis
    id: 'temp-axis',  // Unique identifier
    title: { text: 'Temperature (°C)' },
  },
  {
    type: 'number',
    position: 'right',
    keys: ['rainfall'],  // Different series
    id: 'rain-axis',  // Different identifier
    title: { text: 'Rainfall (mm)' },
  },
]
```

**Key points**:

- `keys`: Array of `yKey` values that should use this axis
- `id`: Unique identifier for the axis
- Each axis can have its own position, scale, and formatting

You can also explicitly bind a series to an axis:

```typescript
series: [
  {
    type: 'line',
    xKey: 'month',
    yKey: 'temperature',
    yAxis: 'temp-axis',  // Links to axis ID
  },
]
```

[Learn more about Multiple Axes in our documentation.](https://ag-grid.com/charts/react/axes-multiple/)

## Data Structure

The data is provided in `data.ts`:

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

// Example data point
{
  country: 'United States',
  countryCode: 'USA',
  co2Emissions2023: 14.9,
  gdp2023: 25462700000000,
  population: 331900000,
  avgCO2EmissionsSince1920: 16.2,
  gdpPerCapita2023: 76329.5
}
```

## Implementation Steps

### Part 1: Create Custom Theme

1. **Define Theme Object**

   - Create `chartTheme` constant with type `AgChartTheme`
   - Import the type from `'ag-charts-enterprise'`

2. **Configure Palette**

   - Add `palette` object with `fills` array (5 colors recommended)
   - Add matching `strokes` array with complementary border colors
   - Strokes should typically be darker versions of fills

3. **Add Bar Series Overrides**

   - Create `overrides.bar.series` object
   - Set `strokeWidth` (e.g., 2)
   - Set `fillOpacity` (e.g., 0.9 for slight transparency)
   - Configure `shadow` object:
     - `enabled: true`
     - `color`: RGBA value with transparency
     - `xOffset` and `yOffset` for shadow position
     - `blur` for shadow softness

4. **Add Line Series Overrides**

   - Create `overrides.line.series` object
   - Set `strokeWidth` (e.g., 3 for prominent lines)
   - Configure `marker` object:
     - `enabled: true`
     - `size` (e.g., 8 pixels)
     - `strokeWidth` (e.g., 2 for marker borders)

5. **Add Common Overrides**

   - Create `overrides.common` object
   - Style `background.fill`
   - Customize `title` (fontSize, fontWeight, color)
   - Style `axes.category`:
     - `line.stroke` for axis line color
     - `label.color` and `label.fontSize`
   - Style `axes.number`:
     - Same as category axis
     - Add `gridLine.style` with stroke and lineDash pattern

### Part 2: Configure Chart with Mixed Series

6. **Apply Theme**

   - Add `theme: chartTheme` to chart options

7. **Create Title and Subtitle**

   - Add descriptive title about the data
   - Add subtitle explaining what the axes represent

8. **Add Line Series (GDP)**

   - Type: `'line'`
   - Set `xKey` to country field
   - Set `yKey` to GDP per capita field
   - Set `yName` for legend label
   - Set `yAxis: 'gdp-axis'` to bind to right axis

9. **Add First Bar Series (Current CO2)**

   - Type: `'bar'`
   - Set `xKey` to country field
   - Set `yKey` to current CO2 emissions field
   - Set `yName` for legend label
   - Set `yAxis: 'co2-axis'` to bind to left axis

10. **Add Second Bar Series (Average CO2)**

    - Type: `'bar'`
    - Set `xKey` to country field
    - Set `yKey` to average CO2 emissions field
    - Set `yName` for legend label
    - Set `yAxis: 'co2-axis'` to bind to left axis

11. **Configure Bottom Axis (Categories)**

    - Type: `'category'`
    - Position: `'bottom'`
    - Rotate labels 45 degrees for readability with `label.rotation`

12. **Configure Left Axis (CO2)**

    - Type: `'number'`
    - Position: `'left'`
    - Set `keys` array with both CO2 field names
    - Set `id` to `'co2-axis'`
    - Add title describing the metric and unit

13. **Configure Right Axis (GDP)**
    - Type: `'number'`
    - Position: `'right'`
    - Set `keys` array with GDP field name
    - Set `id` to `'gdp-axis'`
    - Add title describing the metric and unit

## Documentation References

- [AG Charts Themes](https://ag-grid.com/charts/react/themes/)
- [AG Charts Theme API](https://ag-grid.com/charts/react/themes-api/)
- [AG Charts Combination Series](https://ag-grid.com/charts/react/combination-series-cartesian/)
- [AG Charts Multiple Axes](https://ag-grid.com/charts/react/axes-multiple/)
- [AG Charts Bar Series](https://ag-grid.com/charts/react/bar-series/)
- [AG Charts Line Series](https://ag-grid.com/charts/react/line-series/)

## Success Criteria

Your chart should display:

- Custom background color (from theme)
- Styled title with custom font (from theme)
- Three series: 1 line + 2 bars
- Line series on right Y-axis (GDP)
- Two bar series on left Y-axis (CO2)
- Drop shadows on bar series
- Markers visible on line series
- Dashed gridlines
- 45-degree rotated category labels on X-axis
- Both Y-axes with appropriate titles
- Themed colors from your palette (automatically assigned)
- All styling applied via the theme (no manual series styling needed)

## Tips

- Start by creating the theme first, then build the chart configuration
- Import `AgChartTheme` type from `'ag-charts-enterprise'`
- The `keys` property on axes determines which series use that axis by matching `yKey` values
- Axis IDs provide an alternative way to link series via the `yAxis` property
- Theme overrides are applied globally but can be overridden at the series level if needed
- Use the same axis ID in both the axis config and series config for explicit binding
- Test the theme by checking if shadows and colors appear correctly in the browser
- Ensure all three series are visible and properly scaled on their respective axes
- The palette colors are assigned to series in order (first series gets first color, etc.)
- RGBA colors like `rgba(0, 0, 0, 0.15)` provide transparency for subtle shadows
- Label rotation helps prevent overlapping on the X-axis with many categories

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

### Mixed Series with Axis Binding

```typescript
series: [
  {
    type: 'line',
    xKey: 'country',
    yKey: 'gdpPerCapita2023',
    yName: 'GDP per Capita 2023 ($)',
    yAxis: 'gdp-axis',  // Links to right axis
  },
  {
    type: 'bar',
    xKey: 'country',
    yKey: 'co2Emissions2023',
    yName: 'CO2 Emissions 2023 (tonnes/capita)',
    yAxis: 'co2-axis',  // Links to left axis
  },
  {
    type: 'bar',
    xKey: 'country',
    yKey: 'avgCO2EmissionsSince1920',
    yName: 'Average CO2 Since 1920 (tonnes/capita)',
    yAxis: 'co2-axis',  // Links to left axis
  },
]
```
