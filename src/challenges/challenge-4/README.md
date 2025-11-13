# Challenge 4: Enterprise Features - Interactive Charts

## Overview

Implement an enterprise-grade chart with zoom functionality, navigator, and context menu. This challenge showcases AG Charts Enterprise features for creating professional, interactive data visualizations with historical CO2 data.

## Learning Objectives

- Work with AG Charts Enterprise features
- Configure zoom and pan functionality
- Implement navigator/minimap for data overview
- Configure crosshair interactions
- Implement context menu functionality

## Chart Type

Line Chart with Enterprise Features, including zooming, navigator, crosshair, and context menu.

## What You'll Build

An enterprise-grade chart featuring:

- Line chart displaying historical CO2 levels (year 154-1996)
- Interactive zoom and pan (X-axis)
- Navigator mini-chart for context
- Crosshair on both axes
- Context menu for chart interactions
- Auto-scaling during zoom

## Key Concepts

### 1. AG Charts Enterprise

AG Charts Enterprise extends the free Community version with advanced features designed for production applications:

**Enterprise Features**:

- Interactive zoom and pan
- Navigator (minimap) for data context
- Map charts with geospatial visualization
- Financial charts with technical indicators
- Advanced annotations
- Context menus

To use Enterprise features, simply import the enterprise package:

```typescript
import 'ag-charts-enterprise';
```

The import side effect registers all enterprise features automatically.

You don't need an enterprise licence to install & test AG Charts Enterprise, but if you don't have a licence, you can't run in production, and a watermark + console error will appear.

[Learn more about AG Charts Enterprise in our documentation.](https://ag-grid.com/charts/react/licensing/)

### 2. Zoom Configuration

Zoom allows users to focus on specific data ranges by selecting regions to magnify:

```typescript
zoom: {
  enabled: true,
  axes: 'x',  // Zoom only horizontally: 'x', 'y', or 'xy'
  anchorPointX: 'pointer',  // Zoom toward mouse X position
  anchorPointY: 'middle',   // Keep Y centered: 'top', 'middle', 'bottom', 'pointer'
  autoScaling: {
    enabled: true,  // Auto-adjust Y-axis range
  },
}
```

**Zoom interactions**:

- **Select region**: Click and drag horizontally to zoom in
- **Zoom out**: Double-click the chart
- **Pan**: Drag the chart when zoomed in

**Auto-scaling**: When enabled, the Y-axis automatically adjusts its range to fit the visible data, ensuring you always see the relevant scale.

[Learn more about Zoom in our documentation.](https://ag-grid.com/charts/react/zoom/)

### 3. Navigator (Minimap)

The navigator provides a miniature version of your chart for context and quick navigation:

```typescript
navigator: {
  enabled: true,
  miniChart: {
    enabled: true,  // Show mini version of main chart
  },
}
```

The navigator appears at the bottom of the chart with:

- A miniature version of your chart
- A selection handle showing the current zoom region
- Click-and-drag to pan through data
- Resize handles to adjust the zoom level

[Learn more about Navigator in our documentation.](https://ag-grid.com/charts/react/navigator/)

### 4. Crosshair

Crosshairs are cursor-following lines that help users read precise values:

```typescript
// On the axis configuration
{
  type: 'number',
  position: 'left',
  crosshair: {
    enabled: true,
  },
}
```

Crosshairs provide:

- Vertical and horizontal guide lines
- Value labels showing exact coordinates

[Learn more about Crosshair in our documentation.](https://ag-grid.com/charts/react/crosshair/)

### 5. Context Menu

The context menu provides right-click functionality:

```typescript
contextMenu: {
  enabled: true,
}
```

Built-in menu options include:

- Download chart as PNG
- Zoom
- Pan

You can also add custom menu items through the API.

[Learn more about Context Menu in our documentation.](https://ag-grid.com/charts/react/context-menu/)

## Data Structure

The data is provided in `data.js`:

```javascript
export const data = [
  {
    year: 154,
    co2: 278.18,
  },
  {
    year: 155,
    co2: 278.14,
  },
  // ... 1,843 data points total
];
```

This dataset contains historical CO2 concentration measurements (in ppm) from year 154 to year 1996, providing nearly 2,000 years of atmospheric data.

## Implementation Steps

1. **Import Enterprise Features**

   - Import the enterprise package to enable advanced features
   - Import the CO2 data from the data file

2. **Configure Chart Metadata**

   - Add a descriptive title about historical CO2 levels
   - Include a subtitle explaining the data timeframe

3. **Enable Zoom Functionality**

   - Configure zoom to work on the horizontal axis only
   - Set zoom to follow the pointer position
   - Enable automatic Y-axis scaling to match the visible data range

4. **Add Navigator Panel**

   - Enable the navigator feature for overview and quick navigation
   - Configure it to display a miniature version of the chart

5. **Create Line Series**

   - Define a line series using the year and CO2 data
   - Map the appropriate data fields to the X and Y axes
   - Provide a meaningful name for the legend

6. **Configure Axes**

   - Set up a numeric X-axis for years with an appropriate title
   - Set up a numeric Y-axis for CO2 concentration with units
   - Enable crosshairs on both axes for precise value reading

7. **Enable Context Menu**
   - Add context menu support for additional chart interactions

## Documentation References

- [AG Charts Enterprise](https://ag-grid.com/charts/react/licensing/)
- [AG Charts Zoom](https://ag-grid.com/charts/react/zoom/)
- [AG Charts Navigator](https://ag-grid.com/charts/react/navigator/)
- [AG Charts Crosshair](https://ag-grid.com/charts/react/crosshair/)
- [AG Charts Context Menu](https://ag-grid.com/charts/react/context-menu/)
- [AG Charts Performance](https://ag-grid.com/charts/react/performance/)

## Success Criteria

Your chart should:

- Display line chart with historical CO2 data (year 154-1996)
- Show navigator panel at bottom with mini-chart representation
- Allow click-and-drag horizontal zooming on the main chart
- Show crosshair lines on both axes when hovering
- Auto-adjust Y-axis scale when zoomed to show relevant range
- Show context menu on right-click with zoom and download options
- Perform smoothly during pan and zoom
- Display current zoom selection in the navigator panel
- Show year values on X-axis and CO2 concentration on Y-axis

## Interaction Guide

Users should be able to:

1. **Zoom In**: Click and drag horizontally across chart to select region
2. **Zoom Out**: Double-click anywhere on the chart
3. **Pan**: Drag the chart left/right when zoomed in
4. **Navigator Zoom**: Drag or resize the selection box in the navigator
5. **Crosshair**: Move mouse over chart to see precise values on both axes
6. **Context Menu**: Right-click for download and copy options

## Tips

- The `'ag-charts-enterprise'` import must come before any other AG Charts imports
- The navigator mini-chart automatically matches your main series configuration
- `autoScaling` ensures the Y-axis stays relevant when zoomed in
- Test zoom by dragging horizontally - vertical dragging won't work with `axes: 'x'`
- Context menu appears on right-click and provides built-in export functionality
- The chart should perform smoothly with this dataset size (1,843 points)
- Use number axes for both X and Y since we have numeric year and CO2 values
- The crosshair helps users see precise values when hovering over the chart

## Code Snippets

### Enterprise Import and Setup

```typescript
import 'ag-charts-enterprise';
import { AgCharts } from 'ag-charts-react';
import type { AgChartOptions } from 'ag-charts-enterprise';
import { data } from './data.js';
```

### Complete Zoom Configuration

```typescript
zoom: {
  enabled: true,
  axes: 'x',                    // Only zoom horizontally
  anchorPointX: 'pointer',       // Zoom toward cursor
  anchorPointY: 'pointer',       // Keep Y centered on cursor
  autoScaling: {
    enabled: true,               // Adjust Y range automatically
  },
}
```

### Axes Configuration with Crosshair

```typescript
axes: [
  {
    type: 'number',
    position: 'bottom',
    title: { text: 'Year' },
    crosshair: { enabled: true },
  },
  {
    type: 'number',
    position: 'left',
    title: { text: 'CO2 (ppm)' },
    crosshair: { enabled: true },
  },
];
```

### Navigator Configuration

```typescript
navigator: {
  enabled: true,
  miniChart: {
    enabled: true,  // Shows miniature version of your chart
  },
}
```

### Line Series Configuration

```typescript
series: [
  {
    type: 'line',
    data: data,
    xKey: 'year',
    yKey: 'co2',
    yName: 'CO2 Concentration (ppm)',
  },
];
```

### Complete Chart Options Structure

```typescript
const chartOptions: AgChartOptions = {
  title: { text: 'Historical CO2 Levels' },
  subtitle: { text: 'Atmospheric CO2 concentration from year 154 to 1996' },
  data: data,
  zoom: {
    enabled: true,
    axes: 'x',
    anchorPointX: 'pointer',
    anchorPointY: 'pointer',
    autoScaling: { enabled: true },
  },
  navigator: {
    enabled: true,
    miniChart: { enabled: true },
  },
  series: [
    {
      type: 'line',
      xKey: 'year',
      yKey: 'co2',
      yName: 'CO2 Concentration (ppm)',
    },
  ],
  axes: [
    {
      type: 'number',
      position: 'bottom',
      title: { text: 'Year' },
      crosshair: { enabled: true },
    },
    {
      type: 'number',
      position: 'left',
      title: { text: 'CO2 (ppm)' },
      crosshair: { enabled: true },
    },
  ],
  contextMenu: { enabled: true },
};
```
