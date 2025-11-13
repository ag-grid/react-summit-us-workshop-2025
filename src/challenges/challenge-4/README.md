# Challenge 4: Enterprise Features - High Performance Charts

## Overview

Implement an enterprise-grade chart with high-performance rendering, zoom functionality, and data navigation. This challenge showcases AG Charts Enterprise features for handling large datasets (1 million data points) with smooth interactions.

## Learning Objectives

- Work with AG Charts Enterprise features
- Handle large datasets efficiently
- Configure zoom and pan functionality
- Implement navigator/minimap for data overview
- Use ordinal-time axes for time-based data
- Configure crosshair interactions
- Optimize chart performance with animation settings
- Implement context menu functionality

## Chart Type

**High-Performance Line Chart** with 1 million data points

## What You'll Build

An enterprise-grade financial time series chart featuring:

- Line chart rendering 1 million data points
- Interactive zoom and pan (X-axis)
- Navigator mini-chart for context
- Crosshair on both axes
- Ordinal-time axis with hierarchical date display
- Context menu for chart interactions
- Auto-scaling during zoom
- Optimized rendering performance

## Key Concepts

### 1. AG Charts Enterprise

AG Charts Enterprise extends the free Community version with advanced features designed for production applications:

**Enterprise Features**:
- High-performance rendering for massive datasets
- Interactive zoom and pan
- Navigator (minimap) for data context
- Map charts with geospatial visualization
- Financial charts with technical indicators
- Advanced annotations
- Context menus

To use Enterprise features, import the enterprise package:

```typescript
import 'ag-charts-enterprise';
import { AgCharts } from 'ag-charts-react';
import type { AgCartesianAxisOptions } from 'ag-charts-enterprise';
```

The import side effect registers all enterprise features automatically.

[Learn more about AG Charts Enterprise in our documentation.](https://ag-grid.com/charts/react/licensing/)

### 2. Handling Large Datasets

AG Charts can efficiently render millions of data points through:

- **Optimized rendering**: Canvas-based rendering with intelligent update cycles
- **Data decimation**: Automatic reduction of visible points when zoomed out
- **Virtual rendering**: Only renders visible portions of the chart
- **Efficient updates**: Incremental updates instead of full re-renders

Best practices for large datasets:

```typescript
// Disable animations for better performance
animation: { enabled: false }

// Use time or number axes instead of category
axes: [
  { type: 'ordinal-time', position: 'bottom' },
  { type: 'number', position: 'left' }
]

// Simplify markers
series: [{
  type: 'line',
  marker: { enabled: false },  // Markers slow down rendering
}]
```

[Learn more about Performance in our documentation.](https://ag-grid.com/charts/react/performance/)

### 3. Zoom Configuration

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

### 4. Navigator (Minimap)

The navigator provides a miniature version of your chart for context and quick navigation:

```typescript
navigator: {
  enabled: true,
  height: 50,  // Height of navigator panel
  min: 0.5,    // Initial minimum (0-1, 0.5 = 50% of data)
  max: 1.0,    // Initial maximum (0-1, 1.0 = 100% of data)
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

### 5. Ordinal-Time Axis

The ordinal-time axis is optimized for time-series data with irregular intervals:

```typescript
{
  type: 'ordinal-time',
  position: 'bottom',
  parentLevel: { enabled: true },  // Show hierarchical dates
  crosshair: { enabled: true },
}
```

**Benefits over regular time axes**:
- **Irregular intervals**: Handles missing data (e.g., weekends in stock data)
- **Hierarchical labels**: Shows both primary (days) and parent (months/years) labels
- **Better performance**: Optimized for large time-series datasets
- **No gaps**: Data points are evenly spaced regardless of actual time intervals

**Parent Level**: Displays higher-level time periods above the main labels:
```
Jan     |     Feb     |     Mar
1  5  10  15  20  25   1   5  10
```

[Learn more about Ordinal Time Axis in our documentation.](https://ag-grid.com/charts/react/axes-types/#ordinal-time)

### 6. Crosshair

Crosshairs are cursor-following lines that help users read precise values:

```typescript
// On the axis configuration
{
  type: 'number',
  position: 'left',
  crosshair: {
    enabled: true,
    snap: true,  // Snap to nearest data point
    label: {
      enabled: true,  // Show value label
    },
  },
}
```

Crosshairs provide:
- Vertical and horizontal guide lines
- Value labels showing exact coordinates
- Snap-to-data for precise readings
- Synchronized across multiple axes

[Learn more about Crosshair in our documentation.](https://ag-grid.com/charts/react/crosshair/)

### 7. Performance Optimization

For charts with massive datasets, disable expensive features:

```typescript
const chartOptions: AgChartOptions = {
  animation: { enabled: false },  // Animations slow down updates
  series: [{
    type: 'line',
    marker: { enabled: false },  // Markers add rendering overhead
    tooltip: { enabled: true },  // Tooltips are fine, they're lazy
  }],
};
```

**Performance tips**:
- Disable animations for datasets over 10,000 points
- Disable markers for datasets over 1,000 points
- Use number or time axes instead of category axes
- Consider data aggregation or sampling for extremely large datasets
- Enable zoom to let users focus on smaller regions

### 8. Context Menu

The context menu provides right-click functionality:

```typescript
contextMenu: {
  enabled: true,
}
```

Built-in menu options include:
- Download chart as PNG
- Download chart as JPG
- Copy chart to clipboard
- Print chart

You can also add custom menu items through the API.

[Learn more about Context Menu in our documentation.](https://ag-grid.com/charts/react/context-menu/)

## Data Structure

The data generator creates time-series financial data:

```typescript
interface DataPoint {
  timestamp: Date;   // Time point
  close: number;     // Closing value
}

// Generated by getData(count)
[
  { timestamp: Date('2020-01-01'), close: 100.5 },
  { timestamp: Date('2020-01-02'), close: 101.2 },
  // ... million data points
]
```

The `getData(count)` function generates realistic financial data with trends and volatility.

## Implementation Steps

1. **Import Enterprise Features**

   - Add `import 'ag-charts-enterprise';` at the top of the file
   - Import `AgCartesianAxisOptions` type from `'ag-charts-enterprise'`

2. **Generate Large Dataset**

   - Call `getData(1e6)` to generate 1 million data points
   - Store in a constant (e.g., `baseData`)

3. **Configure Chart Title**

   - Set title text indicating dataset size
   - Use template literal: `` `Line Series with ${dataPoints} Data Points` ``

4. **Disable Animation**

   - Add `animation: { enabled: false }` to chart options
   - This is critical for performance with large datasets

5. **Configure Zoom**

   - Enable zoom with `zoom: { enabled: true }`
   - Set `axes: 'x'` to zoom only horizontally
   - Set `anchorPointX: 'pointer'` and `anchorPointY: 'pointer'`
   - Enable auto-scaling with `autoScaling: { enabled: true }`

6. **Add Navigator**

   - Enable navigator panel with `navigator: { enabled: true }`
   - Enable mini-chart with `miniChart: { enabled: true }`

7. **Configure Line Series**

   - Type: `'line'`
   - Set `data` to your generated dataset
   - Set `xKey` to `'timestamp'`
   - Set `yKey` to `'close'`
   - Disable markers with `marker: { enabled: false }`

8. **Configure Ordinal-Time Axis (Bottom)**

   - Type: `'ordinal-time'`
   - Position: `'bottom'`
   - Enable parent level with `parentLevel: { enabled: true }`
   - Enable crosshair with `crosshair: { enabled: true }`

9. **Configure Number Axis (Left)**

   - Type: `'number'`
   - Position: `'left'`
   - Enable crosshair with `crosshair: { enabled: true }`

10. **Enable Context Menu**
    - Add `contextMenu: { enabled: true }` to chart options

## Documentation References

- [AG Charts Enterprise](https://ag-grid.com/charts/react/licensing/)
- [AG Charts Zoom](https://ag-grid.com/charts/react/zoom/)
- [AG Charts Navigator](https://ag-grid.com/charts/react/navigator/)
- [AG Charts Ordinal Time Axis](https://ag-grid.com/charts/react/axes-types/#ordinal-time)
- [AG Charts Crosshair](https://ag-grid.com/charts/react/crosshair/)
- [AG Charts Context Menu](https://ag-grid.com/charts/react/context-menu/)
- [AG Charts Performance](https://ag-grid.com/charts/react/performance/)

## Success Criteria

Your chart should:

- Render smoothly with 1 million data points (no lag)
- Display line chart with time-series financial data
- Show navigator panel at bottom with mini-chart representation
- Allow click-and-drag horizontal zooming on the main chart
- Show crosshair lines on both axes when hovering
- Display hierarchical date labels (e.g., day numbers with month/year above)
- Auto-adjust Y-axis scale when zoomed to show relevant range
- Show context menu on right-click with download/copy options
- Perform smoothly during pan and zoom without stuttering
- Display current zoom selection in the navigator panel

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
- Disabling animation is crucial - without it, the chart will be very slow with 1M points
- The `ordinal-time` axis is specifically optimized for time-series data
- The navigator mini-chart automatically matches your main series configuration
- `autoScaling` ensures the Y-axis stays relevant when zoomed in
- Use `slice()` on your data array if you want to work with a subset (e.g., `baseData.slice(-1e5)` for last 100k points)
- Test zoom by dragging horizontally - vertical dragging won't work with `axes: 'x'`
- The parent level shows larger time periods (months/years) above day labels
- Context menu appears on right-click and provides built-in export functionality
- Monitor browser DevTools Performance tab to verify smooth 60fps rendering
- If performance is poor, check that animation is disabled and markers are off

## Code Snippets

### Enterprise Import and Setup

```typescript
import 'ag-charts-enterprise';
import { AgCharts } from 'ag-charts-react';
import type { AgChartOptions, AgCartesianAxisOptions } from 'ag-charts-enterprise';
import { getData } from './data.ts';

const baseData = getData(1e6);  // Generate 1 million points
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

### Ordinal-Time Axis with Crosshair

```typescript
const timeAxes: AgCartesianAxisOptions[] = [
  {
    type: 'number',
    position: 'left',
    crosshair: {
      enabled: true,
    },
  },
  {
    type: 'ordinal-time',
    position: 'bottom',
    parentLevel: { enabled: true },  // Shows hierarchical dates
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

### Performance-Optimized Series

```typescript
series: [{
  type: 'line',
  data: baseData,
  xKey: 'timestamp',
  yKey: 'close',
  marker: {
    enabled: false,  // Critical for performance
  },
}]
```

### Complete Chart Options Structure

```typescript
const chartOptions: AgChartOptions = {
  data: baseData,
  title: { text: 'Line Series with 1 Million Data Points' },
  animation: { enabled: false },  // Critical for performance
  zoom: { /* zoom config */ },
  navigator: { /* navigator config */ },
  series: [{ /* series config */ }],
  axes: [/* axes config */],
  contextMenu: { enabled: true },
};
```
