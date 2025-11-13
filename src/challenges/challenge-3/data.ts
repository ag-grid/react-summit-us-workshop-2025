export interface IData {
  country: string;
  countryCode: string;
  co2Emissions2023: number;
  gdp2023: number;
  population: number;
  avgCO2EmissionsSince1920: number;
  gdpPerCapita2023: number;
}

// Combined data from CO2 emissions (challenge-1) and GDP data (challenge-2)
// CO2 emissions are in tonnes per capita
// GDP is in USD (total)
// GDP per capita is in USD
// Sorted by avgCO2EmissionsSince1920 in descending order
export const data: IData[] = [
  {
    country: 'Canada',
    countryCode: 'CAN',
    co2Emissions2023: 13.977, // From challenge-1 data
    gdp2023: 54220.33, // From challenge-2 data (GDP per capita, assuming in billions)
    population: 38781291, // From challenge-2 data
    avgCO2EmissionsSince1920: 12.85, // Calculated average from 1920-2023
    gdpPerCapita2023: 54220.33, // GDP per capita in USD
  },
  {
    country: 'Germany',
    countryCode: 'DEU',
    co2Emissions2023: 7.915,
    gdp2023: 53940.41,
    population: 83294633,
    avgCO2EmissionsSince1920: 8.42,
    gdpPerCapita2023: 53940.41,
  },
  {
    country: 'United Kingdom',
    countryCode: 'GBR',
    co2Emissions2023: 4.668,
    gdp2023: 49200.81,
    population: 67736802,
    avgCO2EmissionsSince1920: 7.12,
    gdpPerCapita2023: 49200.81,
  },
  {
    country: 'Japan',
    countryCode: 'JPN',
    co2Emissions2023: 8.508,
    gdp2023: 33836.18,
    population: 124516650,
    avgCO2EmissionsSince1920: 5.45,
    gdpPerCapita2023: 33836.18,
  },
  {
    country: 'France',
    countryCode: 'FRA',
    co2Emissions2023: 4.597,
    gdp2023: 44690.93,
    population: 64756584,
    avgCO2EmissionsSince1920: 4.95,
    gdpPerCapita2023: 44690.93,
  },
  {
    country: 'Italy',
    countryCode: 'ITA',
    co2Emissions2023: 5.353,
    gdp2023: 39065.42,
    population: 58870762,
    avgCO2EmissionsSince1920: 4.28,
    gdpPerCapita2023: 39065.42,
  },
  {
    country: 'China',
    countryCode: 'CHN',
    co2Emissions2023: 8.367,
    gdp2023: 12720.0, // Estimated GDP per capita for China
    population: 1412000000, // Approximate population
    avgCO2EmissionsSince1920: 2.68,
    gdpPerCapita2023: 12720.0,
  },
  {
    country: 'India',
    countryCode: 'IND',
    co2Emissions2023: 2.073,
    gdp2023: 2410.0, // Estimated GDP per capita for India
    population: 1428000000, // Approximate population
    avgCO2EmissionsSince1920: 0.68,
    gdpPerCapita2023: 2410.0,
  },
];

// Helper functions for data access
export function getCountryData(countryName: string): IData | undefined {
  return data.find((d) => d.country === countryName);
}

export function getAllCountries(): string[] {
  return data.map((d) => d.country);
}

export function getSortedByMetric(
  metric: keyof Omit<IData, 'country' | 'countryCode'>,
  ascending: boolean = false
): IData[] {
  return [...data].sort((a, b) => {
    const aVal = a[metric];
    const bVal = b[metric];
    return ascending ? aVal - bVal : bVal - aVal;
  });
}
