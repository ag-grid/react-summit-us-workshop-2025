export const formatPopulation = (pop: number) => {
  if (pop >= 1000000000) {
    return `${(pop / 1000000000).toFixed(2)}B`;
  } else if (pop >= 1000000) {
    return `${(pop / 1000000).toFixed(2)}M`;
  }
  return pop.toLocaleString();
};

export const formatGdp = (gdp: number) => {
  return `$${gdp.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
