export const selectedCountries = new Set<string>();

export type IData = {
  country: string;
  gdp2023: number;
  population: number;
  selected?: boolean;
};

export const getData = (): IData[] => {
  const countries = [
    { country: 'Canada', gdp2023: 54220.3285039875, population: 38781291 },
    { country: 'Germany', gdp2023: 53940.4073447462, population: 83294633 },
    { country: 'France', gdp2023: 44690.9345395117, population: 64756584 },
    {
      country: 'United Kingdom',
      gdp2023: 49200.8101526146,
      population: 67736802,
    },
    { country: 'Italy', gdp2023: 39065.4244365633, population: 58870762 },
    { country: 'Japan', gdp2023: 33836.1756271617, population: 124516650 },
    { country: 'United States', gdp2023: 80035.0, population: 339996563 },
  ];

  return countries.map((item) => ({
    ...item,
    selected: selectedCountries.has(item.country),
  }));
};
