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

### 1. Enterprise Import
Enable enterprise features:

```typescript
import 'ag-charts-enterprise';
import { AgCharts } from 'ag-charts-react';
import type { AgCartesianAxisOptions } from 'ag-charts-enterprise';
```

### 2. Zoom Configuration
Enable interactive zooming:

```typescript
zoom: {
  enabled: true,
  axes: 'x',                    // Zoom on X-axis only
  anchorPointX: 'pointer',       // Zoom toward mouse X
  anchorPointY: 'pointer',       // Keep Y centered on mouse
  autoScaling: {
    enabled: true,               // Auto-scale Y-axis during zoom
  },
}
```

### 3. Navigator/Mini-Chart
Add overview panel for context:

```typescript
navigator: {
  enabled: true,
  miniChart: {
    enabled: true,               // Show mini version of chart
  },
}
```

### 4. Ordinal-Time Axis
Specialized axis for time-based data:

```typescript
{
  type: 'ordinal-time',
  position: 'bottom',
  parentLevel: { enabled: true },  // Show hierarchical dates (e.g., month/year)
  crosshair: { enabled: true },
}
```

The ordinal-time axis automatically groups time data and shows parent labels (e.g., month names above days).

### 5. Crosshair Configuration
Add cursor guides:

```typescript
{
  type: 'number',
  position: 'left',
  crosshair: {
    enabled: true,
  },
}
```

### 6. Performance Optimization
Disable animations for large datasets:

```typescript
animation: { enabled: false }
```

### 7. Context Menu
Enable right-click functionality:

```typescript
contextMenu: {
  enabled: true,
}
```

### 8. Data Slicing
Work with large datasets efficiently:

```typescript
const baseData = getData(1e6);  // Generate 1M points

const options = {
  data: baseData.slice(-1e6),   // Use last 1M points
  // ...
};
```

## Data Structure

The data generator creates time-series financial data:

```typescript
// From data.ts
interface DataPoint {
  timestamp: Date;   // Time point
  close: number;     // Closing value
}

getData(count: number): DataPoint[]
```

## Implementation Steps

1. **Import Enterprise Features**
   - Add `import 'ag-charts-enterprise';` at the top
   - Import `AgCartesianAxisOptions` type

2. **Generate Data**
   - Call `getData(1e6)` to generate 1 million data points
   - Store in a constant

3. **Configure Chart Title**
   - Set title to indicate data size
   - Use template literal with number of points

4. **Disable Animation**
   - Set `animation: { enabled: false }` for performance

5. **Configure Zoom**
   - Enable zoom on X-axis
   - Set anchor points to `'pointer'`
   - Enable auto-scaling for Y-axis

6. **Add Navigator**
   - Enable navigator panel
   - Enable miniChart within navigator

7. **Configure Line Series**
   - Type: `'line'`
   - Set `xKey` to `'timestamp'`
   - Set `yKey` to `'close'`

8. **Configure Time Axis (Bottom)**
   - Type: `'ordinal-time'`
   - Position: `'bottom'`
   - Enable parent level for date hierarchy
   - Enable crosshair

9. **Configure Number Axis (Left)**
   - Type: `'number'`
   - Position: `'left'`
   - Enable crosshair

10. **Enable Context Menu**
    - Add `contextMenu: { enabled: true }`

## Code Snippets

### Complete Zoom Configuration
```typescript
zoom: {
  enabled: true,
  axes: 'x',                    // Only zoom horizontally
  anchorPointX: 'pointer',       // Zoom toward cursor
  anchorPointY: 'pointer',       // Keep Y centered
  autoScaling: {
    enabled: true,               // Adjust Y range automatically
  },
}
```

### Ordinal-Time Axis
```typescript
{
  type: 'ordinal-time',
  position: 'bottom',
  parentLevel: { enabled: true },  // Shows month/year labels
  crosshair: { enabled: true },
}
```

### Navigator Configuration
```typescript
navigator: {
  enabled: true,
  miniChart: {
    enabled: true,
  },
}
```

### Data Generation
```typescript
const baseData = getData(1e6);

const options = {
  data: baseData.slice(-1e6),
  title: { text: `Line Series with 1 Million Data Points` },
  // ...
};
```

### Complete Axes Array
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
    parentLevel: { enabled: true },
    crosshair: { enabled: true },
  },
];
```

## Documentation References

- [AG Charts Enterprise](https://charts.ag-grid.com/react/licensing/)
- [AG Charts Zoom](https://charts.ag-grid.com/react/zoom/)
- [AG Charts Navigator](https://charts.ag-grid.com/react/navigator/)
- [AG Charts Ordinal Time Axis](https://charts.ag-grid.com/react/axes-types/#ordinal-time)
- [AG Charts Crosshair](https://charts.ag-grid.com/react/crosshair/)
- [AG Charts Context Menu](https://charts.ag-grid.com/react/context-menu/)
- [AG Charts Performance](https://charts.ag-grid.com/react/performance/)

## Success Criteria

Your chart should:
- Render smoothly with 1 million data points
- Display line chart with time-series data
- Show navigator panel at bottom with mini-chart
- Allow click-and-drag to zoom on X-axis
- Show crosshair lines on both axes when hovering
- Display hierarchical date labels (day + month/year)
- Auto-adjust Y-axis scale when zoomed
- Show context menu on right-click
- Perform smoothly without lag during interactions
- Display selected region in navigator

## Interaction Guide

Users should be able to:
1. **Zoom In**: Click and drag horizontally to select a region
2. **Zoom Out**: Double-click the chart
3. **Pan**: Drag the chart when zoomed in
4. **Use Navigator**: Drag or resize the selection box in the mini-chart
5. **See Crosshair**: Move mouse over chart to see precise values
6. **Context Menu**: Right-click for additional options

## Tips

- The `'ag-charts-enterprise'` import must come before using enterprise features
- Disabling animation is crucial for performance with large datasets
- `ordinal-time` axis is optimized for time-series data display
- The navigator mini-chart automatically matches your main series
- `autoScaling` keeps the Y-axis relevant to the zoomed region
- Use `slice(-1e6)` to take the last 1 million points if dataset is larger
- Test zoom by dragging horizontally across the chart
- The parent level shows month/year labels above the day labels
- Context menu provides built-in export and other features
- Monitor browser performance tools to verify smooth rendering
