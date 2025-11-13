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

### 1. Map Series Type
Map-shape series render geographic regions:

```typescript
series: [
  {
    type: 'map-shape',
    idKey: 'iso3',            // Key in your data
    topologyIdKey: 'iso3',    // Key in GeoJSON topology
    colorKey: 'gdp_md',       // Value to map to color
    colorName: 'GDP per Capita',
  }
]
```

### 2. Topology Data
GeoJSON topology defines geographic shapes:

```typescript
import { topology } from './topology.js';

const chartOptions: AgChartOptions = {
  topology,  // GeoJSON with country boundaries
  data,      // Your data with values
  // ...
};
```

Topology contains the geographic coordinates for drawing country shapes. The `topologyIdKey` links your data to these shapes.

### 3. Data-to-Shape Mapping
Link data records to geographic shapes:

```typescript
// Your data
{ iso3: 'USA', gdp_md: 59500 }
{ iso3: 'GBR', gdp_md: 45000 }

// Series config
idKey: 'iso3',           // Field in your data
topologyIdKey: 'iso3',   // Field in topology
```

Both must have matching identifiers.

### 4. Color Mapping
Map data values to colors automatically:

```typescript
colorKey: 'gdp_md',          // Data field for color
colorName: 'GDP per Capita', // Display name in legend
```

AG Charts automatically creates a color scale from low to high values.

### 5. Gradient Legend
Show color scale for continuous data:

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

### 6. Map Labels
Display country names or codes:

```typescript
label: {
  enabled: true,
  fontSize: 9,
}
```

Labels automatically position within shapes.

### 7. Highlight Configuration
Style for hover and selection:

```typescript
highlight: {
  highlightedItem: {
    strokeWidth: 3,
    fillOpacity: 0.9,
  },
}
```

### 8. Map Zoom
Enable interactive zooming:

```typescript
zoom: {
  enabled: true,
}
```

Users can zoom via scroll wheel and pan by dragging.

## Data Structure

```typescript
interface CountryData {
  iso3: string;      // ISO 3166-1 alpha-3 code (e.g., 'USA', 'GBR')
  gdp_md: number;    // GDP per capita in USD
  name?: string;     // Country name (optional)
}
```

The `iso3` field must match identifiers in the topology file.

## Topology Structure

```typescript
// Simplified GeoJSON topology
{
  type: "Topology",
  objects: {
    countries: {
      type: "GeometryCollection",
      geometries: [
        {
          type: "Polygon",
          properties: { iso3: "USA" },
          coordinates: [/* geographic coordinates */]
        },
        // ... more countries
      ]
    }
  }
}
```

## Implementation Steps

1. **Import Required Modules**
   - Import `AgCharts` from `'ag-charts-react'`
   - Import `AgChartOptions` from `'ag-charts-enterprise'`
   - Import `'ag-charts-enterprise'` for map features
   - Import topology and data

2. **Configure Chart Title and Subtitle**
   - Title: Descriptive text about the map
   - Subtitle: Additional context or instructions

3. **Add Data and Topology**
   - Set `data` property to your country data
   - Set `topology` property to imported GeoJSON

4. **Configure Map-Shape Series**
   - Type: `'map-shape'`
   - Set `idKey` to match data identifier (`'iso3'`)
   - Set `topologyIdKey` to match topology identifier (`'iso3'`)
   - Set `colorKey` to data field for color mapping
   - Set `colorName` for legend display

5. **Enable Labels**
   - Enable labels within series
   - Set appropriate font size (9px recommended)

6. **Configure Highlighting**
   - Set `strokeWidth` for emphasized border
   - Set `fillOpacity` for highlighted state

7. **Add Gradient Legend**
   - Enable gradient legend
   - Position at `'bottom'`
   - Set preferred length (~400px)
   - Set thickness (~12px)

8. **Enable Zoom**
   - Add `zoom: { enabled: true }`

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
    colorName: 'GDP per Capita',
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
    text: 'Global GDP Heatmap',
  },
  subtitle: {
    text: 'Countries colored by GDP - Click to select/deselect',
  },
  data: data,
  topology,
  series: [/* map-shape config */],
  gradientLegend: {/* gradient config */},
  zoom: {
    enabled: true,
  },
};
```

## Documentation References

- [AG Charts Map Series](https://charts.ag-grid.com/react/map-series/)
- [AG Charts Map Shape](https://charts.ag-grid.com/react/map-shape-series/)
- [AG Charts Topology](https://charts.ag-grid.com/react/map-topology/)
- [AG Charts Gradient Legend](https://charts.ag-grid.com/react/gradient-legend/)
- [AG Charts Map Zoom](https://charts.ag-grid.com/react/zoom/)

## Success Criteria

Your map should:
- Display world map with country boundaries
- Color countries by GDP (darker = higher)
- Show gradient legend with color scale
- Display country labels
- Highlight countries on hover with thicker border
- Allow clicking to select countries
- Enable zoom via scroll wheel
- Enable pan via dragging
- Correctly map data to countries via ISO3 codes
- Show tooltips with country data on hover

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
- Color scale is automatic based on min/max values in data
- Missing data (countries not in your dataset) appear in default color
- Labels may overlap on small regions - font size helps manage this
- Gradient legend automatically shows the data range
- Test zoom by scrolling and confirm smooth performance
- Check browser console for any data matching errors
- The `colorKey` must be a numeric field for gradient mapping

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
