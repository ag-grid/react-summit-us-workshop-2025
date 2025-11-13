# AG Charts Workshop - React Summit US 2025

A comprehensive hands-on workshop introducing AG Charts through progressive challenges. Learn to build everything from basic line charts to advanced financial visualizations with interactive features.

## Workshop Overview

This workshop takes you on a journey through AG Charts capabilities, from fundamental concepts to enterprise-level features. Each challenge builds on previous knowledge while introducing new chart types, interactions, and advanced functionality.

### What You'll Learn

- **Core Charting**: Line, bar, pie, and donut charts
- **Advanced Features**: Themes, dual axes, mixed series types
- **Enterprise Capabilities**: High-performance rendering, zoom, pan, navigation
- **Specialized Charts**: Geographic maps, financial charts with annotations
- **Interactivity**: Click handlers, state management, custom tooltips
- **Styling**: Custom themes, formatters, and visual customization

## Prerequisites

- Basic knowledge of React and TypeScript
- Node.js 18+ installed
- Familiarity with npm or yarn

## Quick Start

### Local Development

```bash
# Clone the repository
git clone <repository-url>
cd react-summit-us-workshop-2025

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser to `http://localhost:5173` to see the application.

### Using StackBlitz

Click the StackBlitz button to open the workshop in your browser without local setup:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/<your-repo-url>)

## Repository Structure

```
react-summit-us-workshop-2025/
├── src/
│   ├── challenges/
│   │   ├── challenge-1/    # Multi-Line Chart with Cross Lines
│   │   ├── challenge-2/    # Interactive Polar Charts
│   │   ├── challenge-3/    # Custom Themes & Mixed Series
│   │   ├── challenge-4/    # Enterprise High-Performance Charts
│   │   ├── challenge-5/    # Map Charts
│   │   └── challenge-6/    # Financial Charts with Annotations
│   ├── App.tsx             # Main application with challenge navigation
│   └── ...
├── package.json
└── README.md
```

## How It Works

### Branch Structure

The repository uses a branch-based approach for solutions:

- **`main` branch**: Contains starter templates for all challenges
  - Each challenge folder has instructions (README.md)
  - Pre-configured data files
  - Empty chart templates ready to be filled in

- **Solution branches**: One per challenge (`challenge-1-solution`, `challenge-2-solution`, etc.)
  - Complete working implementations
  - Reference code for each challenge
  - Can be checked out if you get stuck

### Challenge Format

Each challenge folder contains:

1. **README.md**: Detailed instructions including:
   - Learning objectives
   - Key concepts explained
   - Step-by-step implementation guide
   - Code snippets and examples
   - Documentation links
   - Success criteria

2. **Data files**: Pre-configured datasets (`data.ts`, `topology.ts`, etc.)

3. **Component file**: Starter template with:
   - Necessary imports
   - Empty chart options
   - Component structure

4. **Utility files**: Helper functions for formatting, styling, etc.

### Workflow

```
Start Challenge → Read README → Implement Solution → Check Against Success Criteria
                                                    ↓
                                               (If stuck)
                                                    ↓
                                    View solution branch for reference
```

## Challenge Overview

### Challenge 1: Multi-Line Chart with Cross Lines
**Topics**: Basic charts, series configuration, axes, annotations

Build a time-series chart showing CO2 emissions per capita for multiple countries with cross lines marking historical events (WWI, WWII, GFC).

**Key Concepts**:
- Chart options structure
- Line series configuration
- Axis formatters
- Cross lines and ranges

---

### Challenge 2: Interactive Polar Charts with State Management
**Topics**: Pie/donut charts, React state, event handlers, tooltips

Create an interactive GDP visualization that toggles between pie and donut views, with click-to-select functionality and custom tooltips.

**Key Concepts**:
- Pie vs donut charts
- React state integration
- Custom tooltips
- Item styling
- Event listeners

---

### Challenge 3: Custom Themes and Mixed Series Types
**Topics**: Theming, combination charts, dual axes

Build a themed chart combining line and bar series on different Y-axes, showing the relationship between CO2 emissions and GDP per capita.

**Key Concepts**:
- Theme structure and palette
- Series-specific overrides
- Mixed chart types
- Dual Y-axes configuration
- Axis binding

---

### Challenge 4: Enterprise Features - High Performance
**Topics**: AG Charts Enterprise, large datasets, zoom, navigator

Implement a high-performance chart rendering 1 million data points with interactive zoom, pan, and a navigator mini-chart.

**Key Concepts**:
- Enterprise features
- Zoom and pan
- Navigator/minimap
- Ordinal-time axes
- Crosshair
- Performance optimization

---

### Challenge 5: Map Charts - Geographic Visualization
**Topics**: Map series, topology, choropleth, gradient legend

Create an interactive world map with countries colored by GDP per capita using map-shape series and GeoJSON topology.

**Key Concepts**:
- Map-shape series
- GeoJSON topology integration
- Color mapping
- Gradient legends
- Geographic interactions

---

### Challenge 6: Financial Charts with Annotations
**Topics**: Financial charts component, annotations, market data

Build a professional S&P 500 chart with the specialized `AgFinancialCharts` component, pre-configured with annotations marking major market events.

**Key Concepts**:
- AgFinancialCharts component
- Annotation types (callout, comment, lines, text)
- Initial state configuration
- Date handling
- Financial styling

## Viewing Solutions

To view the complete solution for any challenge:

```bash
# View solution for Challenge 1
git checkout challenge-1-solution

# Return to starter templates
git checkout main
```

Or browse solution branches on GitHub to compare your implementation.

## Technologies Used

- **[AG Charts](https://charts.ag-grid.com/)**: Professional charting library
- **[AG Charts Enterprise](https://charts.ag-grid.com/react/licensing/)**: Advanced features (maps, financial charts, high performance)
- **[React 19](https://react.dev/)**: UI framework
- **[TypeScript](https://www.typescriptlang.org/)**: Type safety
- **[Vite](https://vite.dev/)**: Build tool and dev server

## Resources

### Documentation
- [AG Charts Documentation](https://charts.ag-grid.com/react/)
- [AG Charts API Reference](https://charts.ag-grid.com/react/api/)
- [AG Charts Examples](https://charts.ag-grid.com/react/examples/)

### Getting Help
- [AG Charts Support Forum](https://www.ag-grid.com/forum/)
- [GitHub Issues](https://github.com/ag-grid/ag-charts/issues)
- Workshop instructor during session

## Tips for Success

1. **Read the README first**: Each challenge README contains all the information you need
2. **Start simple**: Get basic functionality working before adding advanced features
3. **Use the browser console**: Check for TypeScript errors and warnings
4. **Test incrementally**: Verify each feature as you add it
5. **Refer to documentation**: Links are provided in each challenge
6. **Check solutions if stuck**: Solution branches are there to help you learn
7. **Experiment**: Try modifying values to see how they affect the chart

## Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Troubleshooting

### Development server won't start
- Ensure Node.js 18+ is installed: `node --version`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check if port 5173 is already in use

### TypeScript errors
- Make sure all imports are correct
- Check that you're using the right types from the correct packages
- Verify that `ag-charts-enterprise` is imported when using enterprise features

### Charts not rendering
- Check browser console for errors
- Ensure data is loaded correctly
- Verify chart options structure matches the documentation
- Make sure the component has a defined size (width/height)

### Enterprise features not working
- Verify `import 'ag-charts-enterprise';` is at the top of your file
- Check that `ag-charts-enterprise` package is installed

## Workshop Schedule

Approximate timing for each challenge (adjust based on your pace):

- **Challenge 1**: 20-25 minutes
- **Challenge 2**: 25-30 minutes
- **Challenge 3**: 25-30 minutes
- **Challenge 4**: 20-25 minutes
- **Challenge 5**: 20-25 minutes
- **Challenge 6**: 15-20 minutes

Total workshop time: ~2.5-3 hours including breaks and discussion.

## Next Steps

After completing the workshop:

1. Explore the [AG Charts Gallery](https://charts.ag-grid.com/react/gallery/) for more chart types
2. Review [performance best practices](https://charts.ag-grid.com/react/performance/)
3. Check out [advanced customization options](https://charts.ag-grid.com/react/themes-api/)
4. Consider [AG Charts Enterprise](https://charts.ag-grid.com/react/licensing/) for production applications

## License

This workshop repository is for educational purposes. AG Charts is available under both free and commercial licenses. See [AG Charts Licensing](https://charts.ag-grid.com/react/licensing/) for details.

## Acknowledgments

Built for React Summit US 2025 attendees to learn professional data visualization with AG Charts.

---

Happy charting! 📊
