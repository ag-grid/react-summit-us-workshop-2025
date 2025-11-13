# Challenge 5: Map Charts - Geographic Data Visualization

## Overview

Create an interactive world map with geographic data visualization using map-shape series. This challenge introduces geospatial charting, topology integration, color mapping for continuous data, and map-specific interactions.

## Learning Objectives

- Work with map-shape series
- Integrate GeoJSON topology data
- Configure color scales for heatmap visualization
- Use gradient legends for continuous data
- Implement map highlighting and interactions
- Enable map zoom and pan
- Configure geographic labels

## Chart Type

**Map Chart** with choropleth (heatmap) visualization

## What You'll Build

An interactive world map featuring:

- Countries colored by GDP per capita (heatmap)
- Click-to-select functionality
- Hover highlighting
- Gradient legend showing data range
- Country labels
- Zoom and pan capabilities
- Automatic color scaling

## Key Concepts

### 1. Understanding Map Charts

Map charts visualize geospatial data by coloring, sizing, or otherwise styling geographic regions based on data values. Common use cases include:

- **Choropleth maps**: Regions colored by value (population, GDP, temperature, etc.)
- **Distribution maps**: Showing where things are located
- **Comparison maps**: Comparing values across regions

AG Charts Enterprise includes powerful map visualization capabilities that work with standard GeoJSON data.

[Learn more about Map Series in our documentation.](https://ag-grid.com/charts/react/map-series/)

### 2. Map-Shape Series

The `map-shape` series type renders geographic regions (countries, states, counties, etc.):

```typescript
series: [
  {
    type: 'map-shape',
    idKey: 'code',              // Key in your data
    topologyIdKey: 'iso_a3',    // Key in GeoJSON topology
    colorKey: 'value',          // Value to map to color
    colorName: 'Population',    // Display name in legend
  }
]
```

**Key properties**:

- `idKey`: The field in your data that identifies each region
- `topologyIdKey`: The field in the GeoJSON that identifies each region
- `colorKey`: The numeric field to use for color mapping
- `colorName`: Human-readable name for the legend

These keys link your data to the geographic shapes in the topology.

[Learn more about Map Shape Series in our documentation.](https://ag-grid.com/charts/react/map-shape-series/)

### 3. GeoJSON Topology

GeoJSON is a standard format for encoding geographic data. It defines shapes using coordinates:

```typescript
{
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { iso_a3: "USA", name: "United States" },
      geometry: {
        type: "Polygon",
        coordinates: [[[lon, lat], [lon, lat], ...]]
      }
    }
  ]
}
```

AG Charts accepts GeoJSON topologies that define the shapes of geographic regions. The topology is provided separately from your data:

```typescript
import { topology } from './topology.js';

const chartOptions: AgChartOptions = {
  topology,  // GeoJSON with geographic shapes
  data,      // Your data values
  series: [/* map-shape series */]
};
```

[Learn more about Topology in our documentation.](https://ag-grid.com/charts/react/map-topology/)

### 4. Linking Data to Topology

Your data must have an identifier field that matches identifiers in the topology:

```typescript
// Your data
const data = [
  { iso3: 'USA', gdp: 59500 },
  { iso3: 'GBR', gdp: 45000 },
  { iso3: 'JPN', gdp: 39300 },
];

// Series configuration
series: [{
  type: 'map-shape',
  idKey: 'iso3',           // Field in your data
  topologyIdKey: 'iso3',   // Field in topology.properties
  colorKey: 'gdp',
}]
```

Both must use the same identifier system (e.g., ISO 3166-1 alpha-3 country codes).

### 5. Color Mapping (Choropleth)

AG Charts automatically creates a color scale from your data values:

```typescript
series: [{
  type: 'map-shape',
  colorKey: 'gdpPerCapita',       // Numeric field
  colorName: 'GDP per Capita',    // Legend label
  colorRange: ['#e5f5f9', '#2ca25f'],  // Optional: custom colors
}]
```

**How it works**:

- Finds minimum and maximum values in your data
- Creates a gradient from low to high
- Assigns colors to regions based on their values
- Missing data regions use a default color

You can customize the color range with `colorRange`, or let AG Charts choose automatically.

### 6. Gradient Legend

Gradient legends show the continuous color scale for map data:

```typescript
gradientLegend: {
  enabled: true,
  position: 'bottom',  // 'top', 'right', 'bottom', 'left'
  gradient: {
    preferredLength: 400,  // Length in pixels
    thickness: 12,         // Height/width in pixels
  },
  scale: {
    label: {
      formatter: ({ value }) => `$${value.toLocaleString()}`
    }
  }
}
```

The gradient legend:

- Shows the color scale from min to max
- Displays tick labels at key values
- Updates automatically when data changes
- Can be positioned on any side of the chart

[Learn more about Gradient Legend in our documentation.](https://ag-grid.com/charts/react/gradient-legend/)

### 7. Map Labels

Labels display text within or on geographic regions:

```typescript
series: [{
  type: 'map-shape',
  label: {
    enabled: true,
    fontSize: 9,
    color: '#333',
  },
}]
```

By default, labels show the region identifier (e.g., country code). AG Charts automatically:

- Positions labels within shapes
- Hides labels that don't fit
- Adjusts label size for readability

### 8. Map Highlighting

Highlighting provides visual feedback on hover and selection:

```typescript
series: [{
  type: 'map-shape',
  highlight: {
    highlightedItem: {
      strokeWidth: 3,        // Thicker border on hover
      fillOpacity: 0.9,      // Slightly opaque on hover
    },
  },
}]
```

Highlighting helps users:

- See which region they're hovering over
- Identify selected regions
- Understand interactive elements

### 9. Map Zoom and Pan

Enable interactive navigation:

```typescript
zoom: {
  enabled: true,
}
```

**Map zoom interactions**:

- **Zoom in**: Scroll wheel up or pinch out
- **Zoom out**: Scroll wheel down or pinch in
- **Pan**: Click and drag
- **Reset**: Double-click

Zoom is especially useful for detailed maps (cities, states) or when users need to examine specific regions closely.

[Learn more about Zoom in our documentation.](https://ag-grid.com/charts/react/zoom/)

## Data Structure

The data is provided in `data.ts`:

```typescript
interface CountryData {
  iso3: string;      // ISO 3166-1 alpha-3 code (e.g., 'USA', 'GBR')
  gdp_md: number;    // GDP per capita in USD
  name?: string;     // Country name (optional)
}

// Example data
[
  { iso3: 'USA', gdp_md: 76329.5, name: 'United States' },
  { iso3: 'GBR', gdp_md: 45850.0, name: 'United Kingdom' },
  { iso3: 'CHN', gdp_md: 12720.0, name: 'China' },
]
```

The `iso3` field matches the `iso3` property in the topology file.

## Topology Structure

The topology file contains GeoJSON data with country boundaries:

```typescript
{
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        iso3: "USA",    // Must match your data's idKey
        name: "United States"
      },
      geometry: {
        type: "Polygon",
        coordinates: [/* coordinate arrays */]
      }
    },
    // ... more countries
  ]
}
```

## Implementation Steps

1. **Import Required Modules**

   - Import `AgCharts` from `'ag-charts-react'`
   - Import `AgChartOptions` type from `'ag-charts-enterprise'`
   - Import `'ag-charts-enterprise'` for map features (side effect import)
   - Import `topology` from `'./topology.js'`
   - Import `data` from `'./data.js'`

2. **Configure Chart Title and Subtitle**

   - Add title describing the map (e.g., "World GDP per Capita")
   - Add subtitle with instructions or context

3. **Add Data and Topology**

   - Set `data` property to imported country data array
   - Set `topology` property to imported GeoJSON topology

4. **Configure Map-Shape Series**

   - Set `type` to `'map-shape'`
   - Set `idKey` to your data's identifier field (e.g., `'iso3'`)
   - Set `topologyIdKey` to the topology's identifier field (e.g., `'iso3'`)
   - Set `colorKey` to the numeric field for color mapping (e.g., `'gdp_md'`)
   - Set `colorName` to a display name for the legend (e.g., `'GDP per Capita'`)

5. **Enable Labels**

   - Add `label` object to series
   - Set `enabled: true`
   - Set `fontSize` to appropriate size (8-10px recommended for world maps)

6. **Configure Highlighting**

   - Add `highlight` object to series
   - Configure `highlightedItem` properties:
     - `strokeWidth` for emphasized border
     - `fillOpacity` for hover opacity

7. **Add Gradient Legend**

   - Add `gradientLegend` object to chart options
   - Set `enabled: true`
   - Set `position` to `'bottom'`
   - Configure `gradient`:
     - `preferredLength` (400-600px works well)
     - `thickness` (10-15px recommended)

8. **Enable Zoom**
   - Add `zoom: { enabled: true }` to chart options

## Documentation References

- [AG Charts Map Series](https://ag-grid.com/charts/react/map-series/)
- [AG Charts Map Shape](https://ag-grid.com/charts/react/map-shape-series/)
- [AG Charts Topology](https://ag-grid.com/charts/react/map-topology/)
- [AG Charts Gradient Legend](https://ag-grid.com/charts/react/gradient-legend/)
- [AG Charts Zoom](https://ag-grid.com/charts/react/zoom/)

## Success Criteria

Your map should:

- Display world map with country boundaries
- Color countries by GDP (graduated color scale)
- Show gradient legend with color-to-value mapping
- Display country labels (ISO codes)
- Highlight countries on hover with thicker border
- Allow clicking to select countries
- Enable zoom via scroll wheel
- Enable pan via dragging
- Correctly map data to countries via ISO3 codes
- Show tooltips with country data on hover

## Interaction Guide

Users should be able to:

1. **Hover**: See countries highlight with emphasized borders
2. **Click**: Select/deselect countries
3. **Zoom**: Use scroll wheel or pinch to zoom in/out
4. **Pan**: Click and drag to move around when zoomed
5. **Legend**: Understand the color-to-value mapping in gradient legend
6. **Tooltips**: Hover to see exact GDP values and country names

## Tips

- The `'ag-charts-enterprise'` import is required for map features - must be at the top
- Ensure ISO3 codes in your data exactly match those in the topology
- The topology file is typically large (MB) - it's already provided and optimized
- Color scale is automatic based on min/max values in your data
- Missing data (countries not in your dataset) appear in a neutral color
- Labels may overlap on small regions - font size and zoom help manage this
- Gradient legend automatically calculates and displays the data range
- Test zoom by scrolling and confirm smooth performance
- Check browser console for any data matching errors if countries don't color
- The `colorKey` must be a numeric field for gradient color mapping
- For world maps, font size 8-9px works well for labels
- Some island nations or small countries may not be visible without zoom

## Understanding ISO3 Codes

ISO 3166-1 alpha-3 codes are standard 3-letter country identifiers:

- **USA** = United States
- **GBR** = United Kingdom
- **CAN** = Canada
- **DEU** = Germany
- **FRA** = France
- **JPN** = Japan
- **CHN** = China
- **IND** = India
- **BRA** = Brazil
- **AUS** = Australia

These codes provide a standardized way to link data to geographic shapes.

## Code Snippets

### Importing Resources

```typescript
import { AgCharts } from 'ag-charts-react';
import type { AgChartOptions } from 'ag-charts-enterprise';
import 'ag-charts-enterprise';

import { topology } from './topology.js';
import { data } from './data.js';
```

### Complete Map-Shape Series

```typescript
series: [
  {
    type: 'map-shape',
    idKey: 'iso3',
    topologyIdKey: 'iso3',
    colorKey: 'gdp_md',
    colorName: 'GDP per Capita ($)',
    label: {
      enabled: true,
      fontSize: 9,
    },
    highlight: {
      highlightedItem: {
        strokeWidth: 3,
        fillOpacity: 0.9,
      },
    },
  },
]
```

### Gradient Legend Configuration

```typescript
gradientLegend: {
  enabled: true,
  position: 'bottom',
  gradient: {
    preferredLength: 400,
    thickness: 12,
  },
}
```

### Complete Chart Options

```typescript
const chartOptions: AgChartOptions = {
  title: {
    text: 'World GDP per Capita',
  },
  subtitle: {
    text: 'Countries colored by GDP - Hover for details, scroll to zoom',
  },
  data: data,
  topology,
  series: [
    {
      type: 'map-shape',
      idKey: 'iso3',
      topologyIdKey: 'iso3',
      colorKey: 'gdp_md',
      colorName: 'GDP per Capita ($)',
      label: { enabled: true, fontSize: 9 },
      highlight: {
        highlightedItem: {
          strokeWidth: 3,
          fillOpacity: 0.9,
        },
      },
    },
  ],
  gradientLegend: {
    enabled: true,
    position: 'bottom',
    gradient: {
      preferredLength: 400,
      thickness: 12,
    },
  },
  zoom: {
    enabled: true,
  },
};
```
