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

**Map Chart** with choropleth (heatmap) and bubble visualizations

## What You'll Build

An interactive world map featuring:

- Countries colored by GDP per capita (heatmap)
- Population bubbles (map markers) sized by population
- Hover highlighting
- Custom tooltips showing GDP and population
- Gradient legend showing data range
- Zoom and pan capabilities
- Automatic color scaling

## Key Concepts

### 1. Understanding Map Charts

Map charts visualize geospatial data by coloring, sizing, or otherwise styling geographic regions based on data values. Common use cases include:

- **Choropleth maps**: Regions colored by value (population, GDP, temperature, etc.)
- **Distribution maps**: Showing where things are located
- **Comparison maps**: Comparing values across regions

AG Charts Enterprise includes powerful map visualization capabilities that work with standard GeoJSON data.

[Learn more about Map Series in our documentation.](https://ag-grid.com/charts/react/maps/)

### 2. Map-Shape Series

The `map-shape` series type renders geographic regions (countries, states, counties, etc.):

```typescript
series: [
  {
    type: 'map-shape',
    idKey: 'code', // Key in your data
    topologyIdKey: 'code', // Key in GeoJSON topology
    colorKey: 'value', // Value to map to color
    colorName: 'valueName', // Display name in legend
  },
];
```

**Key properties**:

- `idKey`: The field in your data that identifies each region
- `topologyIdKey`: The field in the GeoJSON that identifies each region
- `colorKey`: The numeric field to use for color mapping
- `colorName`: Human-readable name for the legend

These keys link your data to the geographic shapes in the topology.

[Learn more about Map Shape Series in our documentation.](https://ag-grid.com/charts/react/map-shapes/)

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
  topology, // GeoJSON with geographic shapes
  data, // Your data values
  series: [
    /* map-shape series */
  ],
};
```

[Learn more about Topology in our documentation.](https://ag-grid.com/charts/react/map-topology/)

### 4. Linking Data to Topology

Your data must have an identifier field that matches identifiers in the topology:

```typescript
// Your data
const data = [
  { country: 'USA', gdp: 59500 },
  { country: 'GBR', gdp: 45000 },
  { country: 'JPN', gdp: 39300 },
];

// Series configuration
series: [
  {
    type: 'map-shape',
    idKey: 'country', // Field in your data
    topologyIdKey: 'country', // Field in topology.properties
    colorKey: 'gdp',
  },
];
```

### 5. Color Mapping (Choropleth)

AG Charts automatically creates a color scale from your data values:

```typescript
series: [
  {
    type: 'map-shape',
    colorKey: 'country', // Numeric field
    colorName: 'GDP per Capita', // Legend label
    colorRange: ['#e5f5f9', '#2ca25f'], // Optional: custom colors
  },
];
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

### 7. Map Highlighting

Highlighting provides visual feedback on hover and selection:

```typescript
series: [
  {
    type: 'map-shape',
    highlight: {
      highlightedItem: {
        strokeWidth: 3, // Thicker border on hover
        fillOpacity: 0.9, // Slightly opaque on hover
      },
    },
  },
];
```

Highlighting helps users:

- See which region they're hovering over
- Identify selected regions
- Understand interactive elements

### 8. Map Markers (Bubbles)

Add markers/bubbles to show additional data dimensions:

```typescript
{
  type: 'map-marker',
  idKey: 'country',
  topologyIdKey: 'country',
  sizeKey: 'population',  // Field for bubble size
  sizeName: 'Population',
  maxSize: 30,            // Maximum bubble radius
  strokeWidth: 1,
}
```

Map markers create bubbles positioned at country centers, sized by a data field. This allows dual encoding: color for one metric, size for another.

### 9. Custom Tooltips

Format tooltip data with a renderer function:

```typescript
tooltip: {
  renderer: ({ datum }) => ({
    data: [
      { label: 'GDP', value: `$${formatNumber(datum.gdp_md)}` },
      { label: 'Population', value: formatNumber(datum.pop_est) },
    ],
  }),
}
```

### 10. Map Zoom

Enable interactive zooming:

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
  iso3: string; // ISO 3166-1 alpha-3 code (e.g., 'USA', 'GBR')
  gdp_md: number; // GDP per capita in USD
  pop_est: number; // Population estimate
  name?: string; // Country name (optional)
}

// Example data
[
  { iso3: 'USA', gdp_md: 76329.5, name: 'United States' },
  { iso3: 'GBR', gdp_md: 45850.0, name: 'United Kingdom' },
  { iso3: 'CHN', gdp_md: 12720.0, name: 'China' },
];
```

The `iso3` field must match identifiers in the topology file.

## Utility Functions

A `formatNumber` utility is provided in `utils.js` to format large numbers for display in tooltips.

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

   - Import the enterprise package for map features
   - Import chart component and types
   - Import topology data (GeoJSON) and country data
   - Import the utility function for number formatting

2. **Configure Chart Metadata**

   - Add a descriptive title for the map visualization
   - Include a subtitle with instructions for users

3. **Provide Data and Geographic Shapes**

   - Supply the country data array to the chart
   - Supply the GeoJSON topology defining country boundaries

4. **Configure Map-Shape Series (Colored Countries)**

   - Define a map-shape series type for the choropleth
   - Link your data to the topology using ISO3 identifiers
   - Specify GDP field for color mapping
   - Enable country labels with appropriate font size
   - Configure hover highlighting effects
   - Add custom tooltip showing formatted GDP values

5. **Add Map-Marker Series (Population Bubbles)**

   - Define a map-marker series type for population bubbles
   - Link to the same data using ISO3 identifiers
   - Specify population field for bubble sizing
   - Set maximum bubble size
   - Add custom tooltip showing formatted population

6. **Add Gradient Legend**

   - Enable a gradient legend for the color scale
   - Position it on the chart (right or bottom)
   - Configure the gradient bar dimensions

7. **Enable Map Zoom**
   - Add zoom capability for exploring regions in detail

## Code Snippets

### Importing Resources

```typescript
import { AgCharts } from 'ag-charts-react';
import type { AgChartOptions } from 'ag-charts-enterprise';
import 'ag-charts-enterprise';

import { topology } from './topology.js';
import { data } from './data.js';
import { formatNumber } from './utils.js';
```

### Complete Series Configuration

```typescript
series: [
  // Map-shape series for colored countries
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
    tooltip: {
      renderer: ({ datum }) => ({
        data: [{ label: 'GDP', value: `$${formatNumber(datum.gdp_md)}` }],
      }),
    },
  },
  // Map-marker series for population bubbles
  {
    type: 'map-marker',
    idKey: 'iso3',
    topologyIdKey: 'iso3',
    sizeKey: 'pop_est',
    sizeName: 'Population',
    maxSize: 30,
    strokeWidth: 1,
    tooltip: {
      renderer: ({ datum }) => ({
        data: [{ label: 'Population', value: formatNumber(datum.pop_est) }],
      }),
    },
  },
];
```

### Gradient Legend Configuration

```typescript
gradientLegend: {
  enabled: true,
  position: 'right',
  gradient: {
    preferredLength: 400,
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
      // ... shape series config with tooltip
    },
    {
      type: 'map-marker',
      // ... marker series config with tooltip
    },
  ],
  gradientLegend: {
    enabled: true,
    position: 'right',
    gradient: {
      preferredLength: 400,
    },
  },
  zoom: {
    enabled: true,
  },
};
```

## Documentation References

- [AG Charts Map Series](https://ag-grid.com/charts/react/map-series/)
- [AG Charts Map Shape](https://ag-grid.com/charts/react/map-shape-series/)
- [AG Charts Map Marker](https://ag-grid.com/charts/react/map-marker-series/)
- [AG Charts Topology](https://ag-grid.com/charts/react/map-topology/)
- [AG Charts Gradient Legend](https://ag-grid.com/charts/react/gradient-legend/)
- [AG Charts Tooltips](https://ag-grid.com/charts/react/tooltips/)
- [AG Charts Zoom](https://ag-grid.com/charts/react/zoom/)

## Success Criteria

Your map should:

- Display world map with country boundaries
- Color countries by GDP (gradient from low to high)
- Show population bubbles sized by population
- Display gradient legend with color scale on the right
- Show country labels (ISO3 codes)
- Highlight countries on hover with thicker border
- Allow clicking to select countries
- Show custom tooltips with formatted GDP and population values
- Enable zoom via scroll wheel
- Enable pan via dragging
- Correctly map data to countries via ISO3 codes
- Display both map-shape and map-marker series simultaneously

## Interaction Guide

Users should be able to:

1. **Hover**: See countries highlight with thicker borders
2. **Click**: Select/deselect countries
3. **Zoom**: Use scroll wheel to zoom in/out
4. **Pan**: Click and drag to move around when zoomed
5. **Legend**: See color-to-value mapping in gradient
6. **Tooltips**: Hover to see exact GDP values

## Tips

- The `'ag-charts-enterprise'` import is required for map features
- Ensure ISO3 codes in data match those in topology
- The topology file is typically large - it's already provided
- You need TWO series: one `map-shape` for countries, one `map-marker` for bubbles
- Color scale is automatic based on min/max values in data
- Missing data (countries not in your dataset) appear in default color
- Labels may overlap on small regions - font size helps manage this
- Population bubbles are positioned at country centroids automatically
- Use the `formatNumber` utility for consistent number formatting in tooltips
- Gradient legend position `'right'` works well with map layouts
- Test zoom by scrolling and confirm smooth performance
- Check browser console for any data matching errors
- The `colorKey` and `sizeKey` must be numeric fields
- Map markers layer on top of the map shapes

## Understanding ISO3 Codes

ISO 3166-1 alpha-3 codes are standard 3-letter country codes:

- USA = United States
- GBR = United Kingdom
- CAN = Canada
- DEU = Germany
- FRA = France
- JPN = Japan
- CHN = China
- IND = India

These codes link your data to the geographic shapes in the topology.
