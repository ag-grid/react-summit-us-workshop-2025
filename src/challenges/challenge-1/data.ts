export type IData = {
  country: string;
  data: {
    year: number;
    emissionsPerCapita: number;
  }[];
};

export type ICountryData = {
  year: number;
  emissionsPerCapita: number;
};

// Average annual CO2 emissions per capita since 1800
export const averageEmissionsSince1800 = 7.2938483;

// Annual CO2 emissions per capita data from 1800 to 2020
export const data: IData[] = [
  {
    country: 'Canada',
    data: [
      {
        year: 1800,
        emissionsPerCapita: 0.007328,
      },
      {
        year: 1801,
        emissionsPerCapita: 0.0071507194,
      },
      {
        year: 1802,
        emissionsPerCapita: 0.0069777183,
      },
      {
        year: 1803,
        emissionsPerCapita: 0.006808903,
      },
      {
        year: 1804,
        emissionsPerCapita: 0.006644181,
      },
      {
        year: 1805,
        emissionsPerCapita: 0.006483441,
      },
      {
        year: 1806,
        emissionsPerCapita: 0.0063265893,
      },
      {
        year: 1807,
        emissionsPerCapita: 0.006173526,
      },
      {
        year: 1808,
        emissionsPerCapita: 0.006024176,
      },
      {
        year: 1809,
        emissionsPerCapita: 0.005878427,
      },
      {
        year: 1810,
        emissionsPerCapita: 0.005732775,
      },
      {
        year: 1811,
        emissionsPerCapita: 0.0055940812,
      },
      {
        year: 1812,
        emissionsPerCapita: 0.0054587494,
      },
      {
        year: 1813,
        emissionsPerCapita: 0.005326681,
      },
      {
        year: 1814,
        emissionsPerCapita: 0.0051978193,
      },
      {
        year: 1815,
        emissionsPerCapita: 0.0050720666,
      },
      {
        year: 1816,
        emissionsPerCapita: 0.0049493583,
      },
      {
        year: 1817,
        emissionsPerCapita: 0.004829619,
      },
      {
        year: 1818,
        emissionsPerCapita: 0.0047127767,
      },
      {
        year: 1819,
        emissionsPerCapita: 0.0045876615,
      },
      {
        year: 1820,
        emissionsPerCapita: 0.004455307,
      },
      {
        year: 1821,
        emissionsPerCapita: 0.0043168045,
      },
      {
        year: 1822,
        emissionsPerCapita: 0.0041732965,
      },
      {
        year: 1823,
        emissionsPerCapita: 0.0040259357,
      },
      {
        year: 1824,
        emissionsPerCapita: 0.0038837793,
      },
      {
        year: 1825,
        emissionsPerCapita: 0.0037466397,
      },
      {
        year: 1826,
        emissionsPerCapita: 0.003614346,
      },
      {
        year: 1827,
        emissionsPerCapita: 0.003486721,
      },
      {
        year: 1828,
        emissionsPerCapita: 0.0033636033,
      },
      {
        year: 1829,
        emissionsPerCapita: 0.0032439104,
      },
      {
        year: 1830,
        emissionsPerCapita: 0.0031276222,
      },
      {
        year: 1831,
        emissionsPerCapita: 0.0030147023,
      },
      {
        year: 1832,
        emissionsPerCapita: 0.0029051213,
      },
      {
        year: 1833,
        emissionsPerCapita: 0.0027988374,
      },
      {
        year: 1834,
        emissionsPerCapita: 0.0026964413,
      },
      {
        year: 1835,
        emissionsPerCapita: 0.0025977911,
      },
      {
        year: 1836,
        emissionsPerCapita: 0.0025027494,
      },
      {
        year: 1837,
        emissionsPerCapita: 0.0024111862,
      },
      {
        year: 1838,
        emissionsPerCapita: 0.0023229716,
      },
      {
        year: 1839,
        emissionsPerCapita: 0.0022375667,
      },
      {
        year: 1840,
        emissionsPerCapita: 0.0021549126,
      },
      {
        year: 1841,
        emissionsPerCapita: 0.0020749497,
      },
      {
        year: 1842,
        emissionsPerCapita: 0.0019976208,
      },
      {
        year: 1843,
        emissionsPerCapita: 0.001922864,
      },
      {
        year: 1844,
        emissionsPerCapita: 0.0018509051,
      },
      {
        year: 1845,
        emissionsPerCapita: 0.0017816393,
      },
      {
        year: 1846,
        emissionsPerCapita: 0.012004754,
      },
      {
        year: 1847,
        emissionsPerCapita: 0.014857079,
      },
      {
        year: 1848,
        emissionsPerCapita: 0.017479105,
      },
      {
        year: 1849,
        emissionsPerCapita: 0.019917024,
      },
      {
        year: 1850,
        emissionsPerCapita: 0.023672614,
      },
      {
        year: 1851,
        emissionsPerCapita: 0.027198797,
      },
      {
        year: 1852,
        emissionsPerCapita: 0.03190351,
      },
      {
        year: 1853,
        emissionsPerCapita: 0.037688646,
      },
      {
        year: 1854,
        emissionsPerCapita: 0.044409256,
      },
      {
        year: 1855,
        emissionsPerCapita: 0.05196615,
      },
      {
        year: 1856,
        emissionsPerCapita: 0.060266335,
      },
      {
        year: 1857,
        emissionsPerCapita: 0.07041626,
      },
      {
        year: 1858,
        emissionsPerCapita: 0.08338649,
      },
      {
        year: 1859,
        emissionsPerCapita: 0.0970362,
      },
      {
        year: 1860,
        emissionsPerCapita: 0.11476422,
      },
      {
        year: 1861,
        emissionsPerCapita: 0.13540761,
      },
      {
        year: 1862,
        emissionsPerCapita: 0.16329855,
      },
      {
        year: 1863,
        emissionsPerCapita: 0.20264763,
      },
      {
        year: 1864,
        emissionsPerCapita: 0.24005882,
      },
      {
        year: 1865,
        emissionsPerCapita: 0.28693542,
      },
      {
        year: 1866,
        emissionsPerCapita: 0.34601,
      },
      {
        year: 1867,
        emissionsPerCapita: 0.43906397,
      },
      {
        year: 1868,
        emissionsPerCapita: 0.2575183,
      },
      {
        year: 1869,
        emissionsPerCapita: 0.18445463,
      },
      {
        year: 1870,
        emissionsPerCapita: 0.32536218,
      },
      {
        year: 1871,
        emissionsPerCapita: 0.46724626,
      },
      {
        year: 1872,
        emissionsPerCapita: 0.47791365,
      },
      {
        year: 1873,
        emissionsPerCapita: 0.41031522,
      },
      {
        year: 1874,
        emissionsPerCapita: 0.408123,
      },
      {
        year: 1875,
        emissionsPerCapita: 0.4649344,
      },
      {
        year: 1876,
        emissionsPerCapita: 0.45379946,
      },
      {
        year: 1877,
        emissionsPerCapita: 0.48700067,
      },
      {
        year: 1878,
        emissionsPerCapita: 0.45915452,
      },
      {
        year: 1879,
        emissionsPerCapita: 0.5112118,
      },
      {
        year: 1880,
        emissionsPerCapita: 1.208935,
      },
      {
        year: 1881,
        emissionsPerCapita: 1.2759558,
      },
      {
        year: 1882,
        emissionsPerCapita: 1.4924102,
      },
      {
        year: 1883,
        emissionsPerCapita: 1.6573254,
      },
      {
        year: 1884,
        emissionsPerCapita: 1.8968037,
      },
      {
        year: 1885,
        emissionsPerCapita: 1.7982968,
      },
      {
        year: 1886,
        emissionsPerCapita: 1.8977568,
      },
      {
        year: 1887,
        emissionsPerCapita: 2.1651986,
      },
      {
        year: 1888,
        emissionsPerCapita: 2.8083618,
      },
      {
        year: 1889,
        emissionsPerCapita: 2.3566074,
      },
      {
        year: 1890,
        emissionsPerCapita: 2.5630736,
      },
      {
        year: 1891,
        emissionsPerCapita: 2.8485932,
      },
      {
        year: 1892,
        emissionsPerCapita: 2.8091936,
      },
      {
        year: 1893,
        emissionsPerCapita: 2.9741094,
      },
      {
        year: 1894,
        emissionsPerCapita: 2.8107967,
      },
      {
        year: 1895,
        emissionsPerCapita: 2.6554804,
      },
      {
        year: 1896,
        emissionsPerCapita: 2.8461123,
      },
      {
        year: 1897,
        emissionsPerCapita: 2.8466144,
      },
      {
        year: 1898,
        emissionsPerCapita: 2.9912574,
      },
      {
        year: 1899,
        emissionsPerCapita: 3.601491,
      },
      {
        year: 1900,
        emissionsPerCapita: 3.809882,
      },
      {
        year: 1901,
        emissionsPerCapita: 4.314541,
      },
      {
        year: 1902,
        emissionsPerCapita: 4.5310693,
      },
      {
        year: 1903,
        emissionsPerCapita: 4.807077,
      },
      {
        year: 1904,
        emissionsPerCapita: 5.5376906,
      },
      {
        year: 1905,
        emissionsPerCapita: 5.762103,
      },
      {
        year: 1906,
        emissionsPerCapita: 5.924632,
      },
      {
        year: 1907,
        emissionsPerCapita: 7.2467875,
      },
      {
        year: 1908,
        emissionsPerCapita: 7.115185,
      },
      {
        year: 1909,
        emissionsPerCapita: 6.639268,
      },
      {
        year: 1910,
        emissionsPerCapita: 7.371467,
      },
      {
        year: 1911,
        emissionsPerCapita: 8.413321,
      },
      {
        year: 1912,
        emissionsPerCapita: 9.193391,
      },
      {
        year: 1913,
        emissionsPerCapita: 10.621982,
      },
      {
        year: 1914,
        emissionsPerCapita: 8.981634,
      },
      {
        year: 1915,
        emissionsPerCapita: 7.869652,
      },
      {
        year: 1916,
        emissionsPerCapita: 9.651729,
      },
      {
        year: 1917,
        emissionsPerCapita: 10.549546,
      },
      {
        year: 1918,
        emissionsPerCapita: 10.857058,
      },
      {
        year: 1919,
        emissionsPerCapita: 9.048733,
      },
      {
        year: 1920,
        emissionsPerCapita: 9.844267,
      },
      {
        year: 1921,
        emissionsPerCapita: 9.216849,
      },
      {
        year: 1922,
        emissionsPerCapita: 7.783743,
      },
      {
        year: 1923,
        emissionsPerCapita: 10.275167,
      },
      {
        year: 1924,
        emissionsPerCapita: 8.402561,
      },
      {
        year: 1925,
        emissionsPerCapita: 8.028306,
      },
      {
        year: 1926,
        emissionsPerCapita: 8.8852415,
      },
      {
        year: 1927,
        emissionsPerCapita: 9.4766445,
      },
      {
        year: 1928,
        emissionsPerCapita: 9.49147,
      },
      {
        year: 1929,
        emissionsPerCapita: 9.862325,
      },
      {
        year: 1930,
        emissionsPerCapita: 9.257836,
      },
      {
        year: 1931,
        emissionsPerCapita: 7.343073,
      },
      {
        year: 1932,
        emissionsPerCapita: 6.7147307,
      },
      {
        year: 1933,
        emissionsPerCapita: 6.573879,
      },
      {
        year: 1934,
        emissionsPerCapita: 7.4792857,
      },
      {
        year: 1935,
        emissionsPerCapita: 7.2952337,
      },
      {
        year: 1936,
        emissionsPerCapita: 7.8913813,
      },
      {
        year: 1937,
        emissionsPerCapita: 8.469536,
      },
      {
        year: 1938,
        emissionsPerCapita: 7.6667156,
      },
      {
        year: 1939,
        emissionsPerCapita: 8.410252,
      },
      {
        year: 1940,
        emissionsPerCapita: 9.483877,
      },
      {
        year: 1941,
        emissionsPerCapita: 10.331519,
      },
      {
        year: 1942,
        emissionsPerCapita: 11.084097,
      },
      {
        year: 1943,
        emissionsPerCapita: 11.464969,
      },
      {
        year: 1944,
        emissionsPerCapita: 11.450211,
      },
      {
        year: 1945,
        emissionsPerCapita: 10.452736,
      },
      {
        year: 1946,
        emissionsPerCapita: 10.886324,
      },
      {
        year: 1947,
        emissionsPerCapita: 11.086596,
      },
      {
        year: 1948,
        emissionsPerCapita: 12.02194,
      },
      {
        year: 1949,
        emissionsPerCapita: 10.782731,
      },
      {
        year: 1950,
        emissionsPerCapita: 11.216466,
      },
      {
        year: 1951,
        emissionsPerCapita: 11.551132,
      },
      {
        year: 1952,
        emissionsPerCapita: 11.006764,
      },
      {
        year: 1953,
        emissionsPerCapita: 10.780608,
      },
      {
        year: 1954,
        emissionsPerCapita: 10.638279,
      },
      {
        year: 1955,
        emissionsPerCapita: 10.77506,
      },
      {
        year: 1956,
        emissionsPerCapita: 11.745476,
      },
      {
        year: 1957,
        emissionsPerCapita: 10.985386,
      },
      {
        year: 1958,
        emissionsPerCapita: 10.649803,
      },
      {
        year: 1959,
        emissionsPerCapita: 10.53245,
      },
      {
        year: 1960,
        emissionsPerCapita: 10.766993,
      },
      {
        year: 1961,
        emissionsPerCapita: 10.622562,
      },
      {
        year: 1962,
        emissionsPerCapita: 11.120407,
      },
      {
        year: 1963,
        emissionsPerCapita: 11.121489,
      },
      {
        year: 1964,
        emissionsPerCapita: 12.295921,
      },
      {
        year: 1965,
        emissionsPerCapita: 12.797072,
      },
      {
        year: 1966,
        emissionsPerCapita: 12.919052,
      },
      {
        year: 1967,
        emissionsPerCapita: 13.7998,
      },
      {
        year: 1968,
        emissionsPerCapita: 14.626161,
      },
      {
        year: 1969,
        emissionsPerCapita: 14.598572,
      },
      {
        year: 1970,
        emissionsPerCapita: 15.9131,
      },
      {
        year: 1971,
        emissionsPerCapita: 16.089348,
      },
      {
        year: 1972,
        emissionsPerCapita: 17.128956,
      },
      {
        year: 1973,
        emissionsPerCapita: 16.93627,
      },
      {
        year: 1974,
        emissionsPerCapita: 17.070429,
      },
      {
        year: 1975,
        emissionsPerCapita: 17.140572,
      },
      {
        year: 1976,
        emissionsPerCapita: 17.00912,
      },
      {
        year: 1977,
        emissionsPerCapita: 17.184347,
      },
      {
        year: 1978,
        emissionsPerCapita: 17.329044,
      },
      {
        year: 1979,
        emissionsPerCapita: 18.223114,
      },
      {
        year: 1980,
        emissionsPerCapita: 18.050495,
      },
      {
        year: 1981,
        emissionsPerCapita: 17.292418,
      },
      {
        year: 1982,
        emissionsPerCapita: 16.485767,
      },
      {
        year: 1983,
        emissionsPerCapita: 16.068344,
      },
      {
        year: 1984,
        emissionsPerCapita: 16.56514,
      },
      {
        year: 1985,
        emissionsPerCapita: 16.265327,
      },
      {
        year: 1986,
        emissionsPerCapita: 15.440364,
      },
      {
        year: 1987,
        emissionsPerCapita: 16.238403,
      },
      {
        year: 1988,
        emissionsPerCapita: 16.921797,
      },
      {
        year: 1989,
        emissionsPerCapita: 16.91458,
      },
      {
        year: 1990,
        emissionsPerCapita: 16.481619,
      },
      {
        year: 1991,
        emissionsPerCapita: 15.973067,
      },
      {
        year: 1992,
        emissionsPerCapita: 16.263006,
      },
      {
        year: 1993,
        emissionsPerCapita: 16.09954,
      },
      {
        year: 1994,
        emissionsPerCapita: 16.421047,
      },
      {
        year: 1995,
        emissionsPerCapita: 16.681196,
      },
      {
        year: 1996,
        emissionsPerCapita: 17.056643,
      },
      {
        year: 1997,
        emissionsPerCapita: 17.366526,
      },
      {
        year: 1998,
        emissionsPerCapita: 17.462454,
      },
      {
        year: 1999,
        emissionsPerCapita: 17.7737,
      },
      {
        year: 2000,
        emissionsPerCapita: 18.330475,
      },
      {
        year: 2001,
        emissionsPerCapita: 17.888384,
      },
      {
        year: 2002,
        emissionsPerCapita: 17.875952,
      },
      {
        year: 2003,
        emissionsPerCapita: 18.242985,
      },
      {
        year: 2004,
        emissionsPerCapita: 18.024103,
      },
      {
        year: 2005,
        emissionsPerCapita: 17.658808,
      },
      {
        year: 2006,
        emissionsPerCapita: 17.343943,
      },
      {
        year: 2007,
        emissionsPerCapita: 17.886063,
      },
      {
        year: 2008,
        emissionsPerCapita: 17.213322,
      },
      {
        year: 2009,
        emissionsPerCapita: 16.04697,
      },
      {
        year: 2010,
        emissionsPerCapita: 16.221771,
      },
      {
        year: 2011,
        emissionsPerCapita: 16.301926,
      },
      {
        year: 2012,
        emissionsPerCapita: 16.156374,
      },
      {
        year: 2013,
        emissionsPerCapita: 16.117844,
      },
      {
        year: 2014,
        emissionsPerCapita: 15.896746,
      },
      {
        year: 2015,
        emissionsPerCapita: 15.728835,
      },
      {
        year: 2016,
        emissionsPerCapita: 15.373321,
      },
      {
        year: 2017,
        emissionsPerCapita: 15.474768,
      },
      {
        year: 2018,
        emissionsPerCapita: 15.526985,
      },
      {
        year: 2019,
        emissionsPerCapita: 15.404441,
      },
      {
        year: 2020,
        emissionsPerCapita: 13.795005,
      },
      {
        year: 2021,
        emissionsPerCapita: 14.050835,
      },
      {
        year: 2022,
        emissionsPerCapita: 14.18325,
      },
      {
        year: 2023,
        emissionsPerCapita: 13.977395,
      },
    ],
  },
  {
    country: 'China',
    data: [
      {
        year: 1907,
        emissionsPerCapita: 0.04840261,
      },
      {
        year: 1908,
        emissionsPerCapita: 0.055020537,
      },
      {
        year: 1909,
        emissionsPerCapita: 0.058310255,
      },
      {
        year: 1910,
        emissionsPerCapita: 0.059680074,
      },
      {
        year: 1911,
        emissionsPerCapita: 0.05827084,
      },
      {
        year: 1912,
        emissionsPerCapita: 0.039898846,
      },
      {
        year: 1913,
        emissionsPerCapita: 0.056213327,
      },
      {
        year: 1914,
        emissionsPerCapita: 0.061269186,
      },
      {
        year: 1915,
        emissionsPerCapita: 0.057669863,
      },
      {
        year: 1916,
        emissionsPerCapita: 0.0676246,
      },
      {
        year: 1917,
        emissionsPerCapita: 0.071104296,
      },
      {
        year: 1918,
        emissionsPerCapita: 0.07631273,
      },
      {
        year: 1919,
        emissionsPerCapita: 0.08266413,
      },
      {
        year: 1920,
        emissionsPerCapita: 0.08693245,
      },
      {
        year: 1921,
        emissionsPerCapita: 0.083120845,
      },
      {
        year: 1922,
        emissionsPerCapita: 0.08528475,
      },
      {
        year: 1923,
        emissionsPerCapita: 0.09890104,
      },
      {
        year: 1924,
        emissionsPerCapita: 0.103484906,
      },
      {
        year: 1925,
        emissionsPerCapita: 0.09701566,
      },
      {
        year: 1926,
        emissionsPerCapita: 0.09184579,
      },
      {
        year: 1927,
        emissionsPerCapita: 0.09602494,
      },
      {
        year: 1928,
        emissionsPerCapita: 0.09940985,
      },
      {
        year: 1929,
        emissionsPerCapita: 0.10044768,
      },
      {
        year: 1930,
        emissionsPerCapita: 0.102641396,
      },
      {
        year: 1931,
        emissionsPerCapita: 0.10696789,
      },
      {
        year: 1932,
        emissionsPerCapita: 0.10303524,
      },
      {
        year: 1933,
        emissionsPerCapita: 0.110256605,
      },
      {
        year: 1934,
        emissionsPerCapita: 0.12636147,
      },
      {
        year: 1935,
        emissionsPerCapita: 0.1462837,
      },
      {
        year: 1936,
        emissionsPerCapita: 0.15108936,
      },
      {
        year: 1937,
        emissionsPerCapita: 0.141227,
      },
      {
        year: 1938,
        emissionsPerCapita: 0.12139731,
      },
      {
        year: 1939,
        emissionsPerCapita: 0.14638789,
      },
      {
        year: 1940,
        emissionsPerCapita: 0.17756674,
      },
      {
        year: 1941,
        emissionsPerCapita: 0.22169025,
      },
      {
        year: 1942,
        emissionsPerCapita: 0.24687532,
      },
      {
        year: 1943,
        emissionsPerCapita: 0.20974888,
      },
      {
        year: 1944,
        emissionsPerCapita: 0.19717897,
      },
      {
        year: 1945,
        emissionsPerCapita: 0.1064322,
      },
      {
        year: 1946,
        emissionsPerCapita: 0.06839545,
      },
      {
        year: 1947,
        emissionsPerCapita: 0.078831576,
      },
      {
        year: 1948,
        emissionsPerCapita: 0.07197712,
      },
      {
        year: 1949,
        emissionsPerCapita: 0.11541034,
      },
      {
        year: 1950,
        emissionsPerCapita: 0.144906,
      },
      {
        year: 1951,
        emissionsPerCapita: 0.18440396,
      },
      {
        year: 1952,
        emissionsPerCapita: 0.22649479,
      },
      {
        year: 1953,
        emissionsPerCapita: 0.23163575,
      },
      {
        year: 1954,
        emissionsPerCapita: 0.27262098,
      },
      {
        year: 1955,
        emissionsPerCapita: 0.31566963,
      },
      {
        year: 1956,
        emissionsPerCapita: 0.3500462,
      },
      {
        year: 1957,
        emissionsPerCapita: 0.40577844,
      },
      {
        year: 1958,
        emissionsPerCapita: 0.81434524,
      },
      {
        year: 1959,
        emissionsPerCapita: 1.1033285,
      },
      {
        year: 1960,
        emissionsPerCapita: 1.2199105,
      },
      {
        year: 1961,
        emissionsPerCapita: 0.87016356,
      },
      {
        year: 1962,
        emissionsPerCapita: 0.6910784,
      },
      {
        year: 1963,
        emissionsPerCapita: 0.6672671,
      },
      {
        year: 1964,
        emissionsPerCapita: 0.653573,
      },
      {
        year: 1965,
        emissionsPerCapita: 0.69156134,
      },
      {
        year: 1966,
        emissionsPerCapita: 0.74011,
      },
      {
        year: 1967,
        emissionsPerCapita: 0.60474396,
      },
      {
        year: 1968,
        emissionsPerCapita: 0.63444245,
      },
      {
        year: 1969,
        emissionsPerCapita: 0.7575773,
      },
      {
        year: 1970,
        emissionsPerCapita: 0.98134804,
      },
      {
        year: 1971,
        emissionsPerCapita: 1.0771736,
      },
      {
        year: 1972,
        emissionsPerCapita: 1.1215358,
      },
      {
        year: 1973,
        emissionsPerCapita: 1.1424416,
      },
      {
        year: 1974,
        emissionsPerCapita: 1.1419429,
      },
      {
        year: 1975,
        emissionsPerCapita: 1.2915547,
      },
      {
        year: 1976,
        emissionsPerCapita: 1.3182049,
      },
      {
        year: 1977,
        emissionsPerCapita: 1.4210548,
      },
      {
        year: 1978,
        emissionsPerCapita: 1.5612195,
      },
      {
        year: 1979,
        emissionsPerCapita: 1.5740018,
      },
      {
        year: 1980,
        emissionsPerCapita: 1.5200888,
      },
      {
        year: 1981,
        emissionsPerCapita: 1.4798603,
      },
      {
        year: 1982,
        emissionsPerCapita: 1.585047,
      },
      {
        year: 1983,
        emissionsPerCapita: 1.6463653,
      },
      {
        year: 1984,
        emissionsPerCapita: 1.7673312,
      },
      {
        year: 1985,
        emissionsPerCapita: 1.8853257,
      },
      {
        year: 1986,
        emissionsPerCapita: 1.9533492,
      },
      {
        year: 1987,
        emissionsPerCapita: 2.0595717,
      },
      {
        year: 1988,
        emissionsPerCapita: 2.175213,
      },
      {
        year: 1989,
        emissionsPerCapita: 2.1725519,
      },
      {
        year: 1990,
        emissionsPerCapita: 2.1540327,
      },
      {
        year: 1991,
        emissionsPerCapita: 2.2259324,
      },
      {
        year: 1992,
        emissionsPerCapita: 2.3052905,
      },
      {
        year: 1993,
        emissionsPerCapita: 2.4401822,
      },
      {
        year: 1994,
        emissionsPerCapita: 2.5671885,
      },
      {
        year: 1995,
        emissionsPerCapita: 2.755138,
      },
      {
        year: 1996,
        emissionsPerCapita: 2.8505082,
      },
      {
        year: 1997,
        emissionsPerCapita: 2.8325534,
      },
      {
        year: 1998,
        emissionsPerCapita: 2.6898472,
      },
      {
        year: 1999,
        emissionsPerCapita: 2.822838,
      },
      {
        year: 2000,
        emissionsPerCapita: 2.8743546,
      },
      {
        year: 2001,
        emissionsPerCapita: 2.9158025,
      },
      {
        year: 2002,
        emissionsPerCapita: 3.1884,
      },
      {
        year: 2003,
        emissionsPerCapita: 3.7397094,
      },
      {
        year: 2004,
        emissionsPerCapita: 4.0068736,
      },
      {
        year: 2005,
        emissionsPerCapita: 4.4900646,
      },
      {
        year: 2006,
        emissionsPerCapita: 4.927211,
      },
      {
        year: 2007,
        emissionsPerCapita: 5.2673674,
      },
      {
        year: 2008,
        emissionsPerCapita: 5.624066,
      },
      {
        year: 2009,
        emissionsPerCapita: 5.8777986,
      },
      {
        year: 2010,
        emissionsPerCapita: 6.378234,
      },
      {
        year: 2011,
        emissionsPerCapita: 7.0077763,
      },
      {
        year: 2012,
        emissionsPerCapita: 7.140667,
      },
      {
        year: 2013,
        emissionsPerCapita: 7.219921,
      },
      {
        year: 2014,
        emissionsPerCapita: 7.19784,
      },
      {
        year: 2015,
        emissionsPerCapita: 7.0648346,
      },
      {
        year: 2016,
        emissionsPerCapita: 6.953239,
      },
      {
        year: 2017,
        emissionsPerCapita: 7.084865,
      },
      {
        year: 2018,
        emissionsPerCapita: 7.2818375,
      },
      {
        year: 2019,
        emissionsPerCapita: 7.5264,
      },
      {
        year: 2020,
        emissionsPerCapita: 7.6471825,
      },
      {
        year: 2021,
        emissionsPerCapita: 8.025529,
      },
      {
        year: 2022,
        emissionsPerCapita: 7.9642863,
      },
      {
        year: 2023,
        emissionsPerCapita: 8.366814,
      },
    ],
  },
  {
    country: 'France',
    data: [
      {
        year: 1802,
        emissionsPerCapita: 0.076622,
      },
      {
        year: 1804,
        emissionsPerCapita: 0.07393558,
      },
      {
        year: 1810,
        emissionsPerCapita: 0.070469946,
      },
      {
        year: 1811,
        emissionsPerCapita: 0.067903295,
      },
      {
        year: 1812,
        emissionsPerCapita: 0.07308623,
      },
      {
        year: 1813,
        emissionsPerCapita: 0.06727743,
      },
      {
        year: 1814,
        emissionsPerCapita: 0.06846539,
      },
      {
        year: 1815,
        emissionsPerCapita: 0.076333165,
      },
      {
        year: 1816,
        emissionsPerCapita: 0.08116601,
      },
      {
        year: 1817,
        emissionsPerCapita: 0.086080305,
      },
      {
        year: 1818,
        emissionsPerCapita: 0.07678174,
      },
      {
        year: 1819,
        emissionsPerCapita: 0.082100935,
      },
      {
        year: 1820,
        emissionsPerCapita: 0.09271228,
      },
      {
        year: 1821,
        emissionsPerCapita: 0.095714025,
      },
      {
        year: 1822,
        emissionsPerCapita: 0.100134835,
      },
      {
        year: 1823,
        emissionsPerCapita: 0.09950061,
      },
      {
        year: 1824,
        emissionsPerCapita: 0.10972901,
      },
      {
        year: 1825,
        emissionsPerCapita: 0.122663274,
      },
      {
        year: 1826,
        emissionsPerCapita: 0.12594925,
      },
      {
        year: 1827,
        emissionsPerCapita: 0.18088658,
      },
      {
        year: 1828,
        emissionsPerCapita: 0.18988127,
      },
      {
        year: 1829,
        emissionsPerCapita: 0.18364692,
      },
      {
        year: 1830,
        emissionsPerCapita: 0.19692379,
      },
      {
        year: 1831,
        emissionsPerCapita: 0.1809741,
      },
      {
        year: 1832,
        emissionsPerCapita: 0.19870651,
      },
      {
        year: 1833,
        emissionsPerCapita: 0.21459202,
      },
      {
        year: 1834,
        emissionsPerCapita: 0.26293486,
      },
      {
        year: 1835,
        emissionsPerCapita: 0.2715916,
      },
      {
        year: 1836,
        emissionsPerCapita: 0.31054175,
      },
      {
        year: 1837,
        emissionsPerCapita: 0.3298498,
      },
      {
        year: 1838,
        emissionsPerCapita: 0.3432477,
      },
      {
        year: 1839,
        emissionsPerCapita: 0.33313882,
      },
      {
        year: 1840,
        emissionsPerCapita: 0.3381736,
      },
      {
        year: 1841,
        emissionsPerCapita: 0.39443934,
      },
      {
        year: 1842,
        emissionsPerCapita: 0.41288608,
      },
      {
        year: 1843,
        emissionsPerCapita: 0.411831,
      },
      {
        year: 1844,
        emissionsPerCapita: 0.43019587,
      },
      {
        year: 1845,
        emissionsPerCapita: 0.50076497,
      },
      {
        year: 1846,
        emissionsPerCapita: 0.5180938,
      },
      {
        year: 1847,
        emissionsPerCapita: 0.5803729,
      },
      {
        year: 1848,
        emissionsPerCapita: 0.4628796,
      },
      {
        year: 1849,
        emissionsPerCapita: 0.48037285,
      },
      {
        year: 1850,
        emissionsPerCapita: 0.5401483,
      },
      {
        year: 1851,
        emissionsPerCapita: 0.5501596,
      },
      {
        year: 1852,
        emissionsPerCapita: 0.59067684,
      },
      {
        year: 1853,
        emissionsPerCapita: 0.6923327,
      },
      {
        year: 1854,
        emissionsPerCapita: 0.79631627,
      },
      {
        year: 1855,
        emissionsPerCapita: 0.8994212,
      },
      {
        year: 1856,
        emissionsPerCapita: 0.9397137,
      },
      {
        year: 1857,
        emissionsPerCapita: 0.9551182,
      },
      {
        year: 1858,
        emissionsPerCapita: 0.9344241,
      },
      {
        year: 1859,
        emissionsPerCapita: 0.9428659,
      },
      {
        year: 1860,
        emissionsPerCapita: 1.0249465,
      },
      {
        year: 1861,
        emissionsPerCapita: 1.1057359,
      },
      {
        year: 1862,
        emissionsPerCapita: 1.1638623,
      },
      {
        year: 1863,
        emissionsPerCapita: 1.1783826,
      },
      {
        year: 1864,
        emissionsPerCapita: 1.2454354,
      },
      {
        year: 1865,
        emissionsPerCapita: 1.3076444,
      },
      {
        year: 1866,
        emissionsPerCapita: 1.4167037,
      },
      {
        year: 1867,
        emissionsPerCapita: 1.431795,
      },
      {
        year: 1868,
        emissionsPerCapita: 1.4608666,
      },
      {
        year: 1869,
        emissionsPerCapita: 1.4943383,
      },
      {
        year: 1870,
        emissionsPerCapita: 1.3234235,
      },
      {
        year: 1871,
        emissionsPerCapita: 1.3137927,
      },
      {
        year: 1872,
        emissionsPerCapita: 1.5900015,
      },
      {
        year: 1873,
        emissionsPerCapita: 1.71633,
      },
      {
        year: 1874,
        emissionsPerCapita: 1.6306893,
      },
      {
        year: 1875,
        emissionsPerCapita: 1.6966279,
      },
      {
        year: 1876,
        emissionsPerCapita: 1.6970373,
      },
      {
        year: 1877,
        emissionsPerCapita: 1.6577271,
      },
      {
        year: 1878,
        emissionsPerCapita: 1.6892104,
      },
      {
        year: 1879,
        emissionsPerCapita: 1.7456038,
      },
      {
        year: 1880,
        emissionsPerCapita: 1.9661164,
      },
      {
        year: 1881,
        emissionsPerCapita: 2.009875,
      },
      {
        year: 1882,
        emissionsPerCapita: 2.1170962,
      },
      {
        year: 1883,
        emissionsPerCapita: 2.215497,
      },
      {
        year: 1884,
        emissionsPerCapita: 2.1234424,
      },
      {
        year: 1885,
        emissionsPerCapita: 2.0371127,
      },
      {
        year: 1886,
        emissionsPerCapita: 2.016362,
      },
      {
        year: 1887,
        emissionsPerCapita: 2.119315,
      },
      {
        year: 1888,
        emissionsPerCapita: 2.2001383,
      },
      {
        year: 1889,
        emissionsPerCapita: 2.2501442,
      },
      {
        year: 1890,
        emissionsPerCapita: 2.474375,
      },
      {
        year: 1891,
        emissionsPerCapita: 2.474684,
      },
      {
        year: 1892,
        emissionsPerCapita: 2.4748344,
      },
      {
        year: 1893,
        emissionsPerCapita: 2.4268293,
      },
      {
        year: 1894,
        emissionsPerCapita: 2.564161,
      },
      {
        year: 1895,
        emissionsPerCapita: 2.583201,
      },
      {
        year: 1896,
        emissionsPerCapita: 2.6682394,
      },
      {
        year: 1897,
        emissionsPerCapita: 2.7900133,
      },
      {
        year: 1898,
        emissionsPerCapita: 2.8815835,
      },
      {
        year: 1899,
        emissionsPerCapita: 3.0096476,
      },
      {
        year: 1900,
        emissionsPerCapita: 3.2303777,
      },
      {
        year: 1901,
        emissionsPerCapita: 3.1198537,
      },
      {
        year: 1902,
        emissionsPerCapita: 2.9330056,
      },
      {
        year: 1903,
        emissionsPerCapita: 3.2201838,
      },
      {
        year: 1904,
        emissionsPerCapita: 3.1330132,
      },
      {
        year: 1905,
        emissionsPerCapita: 3.1646204,
      },
      {
        year: 1906,
        emissionsPerCapita: 3.3874516,
      },
      {
        year: 1907,
        emissionsPerCapita: 3.6069126,
      },
      {
        year: 1908,
        emissionsPerCapita: 3.630096,
      },
      {
        year: 1909,
        emissionsPerCapita: 3.7144277,
      },
      {
        year: 1910,
        emissionsPerCapita: 3.7331283,
      },
      {
        year: 1911,
        emissionsPerCapita: 3.900818,
      },
      {
        year: 1912,
        emissionsPerCapita: 3.9597802,
      },
      {
        year: 1913,
        emissionsPerCapita: 4.297789,
      },
      {
        year: 1914,
        emissionsPerCapita: 2.9899921,
      },
      {
        year: 1915,
        emissionsPerCapita: 2.6233315,
      },
      {
        year: 1916,
        emissionsPerCapita: 2.8037076,
      },
      {
        year: 1917,
        emissionsPerCapita: 3.1264672,
      },
      {
        year: 1918,
        emissionsPerCapita: 2.8037887,
      },
      {
        year: 1919,
        emissionsPerCapita: 3.0121102,
      },
      {
        year: 1920,
        emissionsPerCapita: 3.9392464,
      },
      {
        year: 1921,
        emissionsPerCapita: 3.5732992,
      },
      {
        year: 1922,
        emissionsPerCapita: 4.210048,
      },
      {
        year: 1923,
        emissionsPerCapita: 4.722255,
      },
      {
        year: 1924,
        emissionsPerCapita: 5.263511,
      },
      {
        year: 1925,
        emissionsPerCapita: 5.411551,
      },
      {
        year: 1926,
        emissionsPerCapita: 5.3742137,
      },
      {
        year: 1927,
        emissionsPerCapita: 5.3222127,
      },
      {
        year: 1928,
        emissionsPerCapita: 5.25259,
      },
      {
        year: 1929,
        emissionsPerCapita: 5.7868476,
      },
      {
        year: 1930,
        emissionsPerCapita: 5.850423,
      },
      {
        year: 1931,
        emissionsPerCapita: 5.345493,
      },
      {
        year: 1932,
        emissionsPerCapita: 4.712864,
      },
      {
        year: 1933,
        emissionsPerCapita: 4.907161,
      },
      {
        year: 1934,
        emissionsPerCapita: 4.962797,
      },
      {
        year: 1935,
        emissionsPerCapita: 4.8225775,
      },
      {
        year: 1936,
        emissionsPerCapita: 4.8966165,
      },
      {
        year: 1937,
        emissionsPerCapita: 5.389734,
      },
      {
        year: 1938,
        emissionsPerCapita: 5.0033183,
      },
      {
        year: 1939,
        emissionsPerCapita: 4.8274617,
      },
      {
        year: 1940,
        emissionsPerCapita: 3.4146125,
      },
      {
        year: 1941,
        emissionsPerCapita: 2.9683535,
      },
      {
        year: 1942,
        emissionsPerCapita: 3.0239975,
      },
      {
        year: 1943,
        emissionsPerCapita: 3.0806637,
      },
      {
        year: 1944,
        emissionsPerCapita: 1.9602842,
      },
      {
        year: 1945,
        emissionsPerCapita: 2.616853,
      },
      {
        year: 1946,
        emissionsPerCapita: 4.0204406,
      },
      {
        year: 1947,
        emissionsPerCapita: 4.4513903,
      },
      {
        year: 1948,
        emissionsPerCapita: 4.7462525,
      },
      {
        year: 1949,
        emissionsPerCapita: 5.5062785,
      },
      {
        year: 1950,
        emissionsPerCapita: 4.829598,
      },
      {
        year: 1951,
        emissionsPerCapita: 5.4030056,
      },
      {
        year: 1952,
        emissionsPerCapita: 5.305868,
      },
      {
        year: 1953,
        emissionsPerCapita: 4.9631915,
      },
      {
        year: 1954,
        emissionsPerCapita: 5.182416,
      },
      {
        year: 1955,
        emissionsPerCapita: 5.4146566,
      },
      {
        year: 1956,
        emissionsPerCapita: 6.0217137,
      },
      {
        year: 1957,
        emissionsPerCapita: 6.16162,
      },
      {
        year: 1958,
        emissionsPerCapita: 5.8503675,
      },
      {
        year: 1959,
        emissionsPerCapita: 5.6977515,
      },
      {
        year: 1960,
        emissionsPerCapita: 6.3884144,
      },
      {
        year: 1961,
        emissionsPerCapita: 6.743317,
      },
      {
        year: 1962,
        emissionsPerCapita: 7.0424156,
      },
      {
        year: 1963,
        emissionsPerCapita: 7.0806637,
      },
      {
        year: 1964,
        emissionsPerCapita: 7.647903,
      },
      {
        year: 1965,
        emissionsPerCapita: 7.467896,
      },
      {
        year: 1966,
        emissionsPerCapita: 7.7491465,
      },
      {
        year: 1967,
        emissionsPerCapita: 8.179463,
      },
      {
        year: 1968,
        emissionsPerCapita: 8.390319,
      },
      {
        year: 1969,
        emissionsPerCapita: 8.8229065,
      },
      {
        year: 1970,
        emissionsPerCapita: 9.079115,
      },
      {
        year: 1971,
        emissionsPerCapita: 9.639252,
      },
      {
        year: 1972,
        emissionsPerCapita: 9.952634,
      },
      {
        year: 1973,
        emissionsPerCapita: 10.347944,
      },
      {
        year: 1974,
        emissionsPerCapita: 9.940175,
      },
      {
        year: 1975,
        emissionsPerCapita: 9.162185,
      },
      {
        year: 1976,
        emissionsPerCapita: 9.903008,
      },
      {
        year: 1977,
        emissionsPerCapita: 9.551621,
      },
      {
        year: 1978,
        emissionsPerCapita: 9.917869,
      },
      {
        year: 1979,
        emissionsPerCapita: 9.937478,
      },
      {
        year: 1980,
        emissionsPerCapita: 9.495874,
      },
      {
        year: 1981,
        emissionsPerCapita: 8.487524,
      },
      {
        year: 1982,
        emissionsPerCapita: 8.089863,
      },
      {
        year: 1983,
        emissionsPerCapita: 7.732914,
      },
      {
        year: 1984,
        emissionsPerCapita: 7.4881167,
      },
      {
        year: 1985,
        emissionsPerCapita: 7.325313,
      },
      {
        year: 1986,
        emissionsPerCapita: 7.021127,
      },
      {
        year: 1987,
        emissionsPerCapita: 6.937787,
      },
      {
        year: 1988,
        emissionsPerCapita: 6.857584,
      },
      {
        year: 1989,
        emissionsPerCapita: 7.0623293,
      },
      {
        year: 1990,
        emissionsPerCapita: 6.9085035,
      },
      {
        year: 1991,
        emissionsPerCapita: 7.2961006,
      },
      {
        year: 1992,
        emissionsPerCapita: 7.0770025,
      },
      {
        year: 1993,
        emissionsPerCapita: 6.7074523,
      },
      {
        year: 1994,
        emissionsPerCapita: 6.5654125,
      },
      {
        year: 1995,
        emissionsPerCapita: 6.629924,
      },
      {
        year: 1996,
        emissionsPerCapita: 6.8885245,
      },
      {
        year: 1997,
        emissionsPerCapita: 6.7415757,
      },
      {
        year: 1998,
        emissionsPerCapita: 7.0307403,
      },
      {
        year: 1999,
        emissionsPerCapita: 6.97345,
      },
      {
        year: 2000,
        emissionsPerCapita: 6.8277373,
      },
      {
        year: 2001,
        emissionsPerCapita: 6.8515906,
      },
      {
        year: 2002,
        emissionsPerCapita: 6.7290745,
      },
      {
        year: 2003,
        emissionsPerCapita: 6.782306,
      },
      {
        year: 2004,
        emissionsPerCapita: 6.7573004,
      },
      {
        year: 2005,
        emissionsPerCapita: 6.747178,
      },
      {
        year: 2006,
        emissionsPerCapita: 6.5456576,
      },
      {
        year: 2007,
        emissionsPerCapita: 6.3430223,
      },
      {
        year: 2008,
        emissionsPerCapita: 6.1977158,
      },
      {
        year: 2009,
        emissionsPerCapita: 5.876987,
      },
      {
        year: 2010,
        emissionsPerCapita: 5.936185,
      },
      {
        year: 2011,
        emissionsPerCapita: 5.560235,
      },
      {
        year: 2012,
        emissionsPerCapita: 5.5642834,
      },
      {
        year: 2013,
        emissionsPerCapita: 5.5709805,
      },
      {
        year: 2014,
        emissionsPerCapita: 5.0522456,
      },
      {
        year: 2015,
        emissionsPerCapita: 5.106422,
      },
      {
        year: 2016,
        emissionsPerCapita: 5.1346755,
      },
      {
        year: 2017,
        emissionsPerCapita: 5.1635537,
      },
      {
        year: 2018,
        emissionsPerCapita: 4.9136443,
      },
      {
        year: 2019,
        emissionsPerCapita: 4.792605,
      },
      {
        year: 2020,
        emissionsPerCapita: 4.255957,
      },
      {
        year: 2021,
        emissionsPerCapita: 4.6245584,
      },
      {
        year: 2022,
        emissionsPerCapita: 4.428381,
      },
      {
        year: 2023,
        emissionsPerCapita: 4.101154,
      },
    ],
  },
  {
    country: 'Germany',
    data: [
      {
        year: 1800,
        emissionsPerCapita: 0.044171557,
      },
      {
        year: 1801,
        emissionsPerCapita: 0.029240523,
      },
      {
        year: 1802,
        emissionsPerCapita: 0.029754901,
      },
      {
        year: 1803,
        emissionsPerCapita: 0.02830634,
      },
      {
        year: 1804,
        emissionsPerCapita: 0.05245813,
      },
      {
        year: 1805,
        emissionsPerCapita: 0.053302526,
      },
      {
        year: 1806,
        emissionsPerCapita: 0.047273606,
      },
      {
        year: 1807,
        emissionsPerCapita: 0.13335954,
      },
      {
        year: 1808,
        emissionsPerCapita: 0.043796904,
      },
      {
        year: 1809,
        emissionsPerCapita: 0.044674568,
      },
      {
        year: 1810,
        emissionsPerCapita: 0.046192635,
      },
      {
        year: 1811,
        emissionsPerCapita: 0.04306568,
      },
      {
        year: 1812,
        emissionsPerCapita: 0.041702244,
      },
      {
        year: 1813,
        emissionsPerCapita: 0.04004199,
      },
      {
        year: 1814,
        emissionsPerCapita: 0.039072905,
      },
      {
        year: 1815,
        emissionsPerCapita: 0.044824384,
      },
      {
        year: 1816,
        emissionsPerCapita: 0.1021735,
      },
      {
        year: 1817,
        emissionsPerCapita: 0.14253065,
      },
      {
        year: 1818,
        emissionsPerCapita: 0.14646468,
      },
      {
        year: 1819,
        emissionsPerCapita: 0.13376212,
      },
      {
        year: 1820,
        emissionsPerCapita: 0.1361196,
      },
      {
        year: 1821,
        emissionsPerCapita: 0.1402481,
      },
      {
        year: 1822,
        emissionsPerCapita: 0.14235331,
      },
      {
        year: 1823,
        emissionsPerCapita: 0.15628752,
      },
      {
        year: 1824,
        emissionsPerCapita: 0.12372251,
      },
      {
        year: 1825,
        emissionsPerCapita: 0.16412507,
      },
      {
        year: 1826,
        emissionsPerCapita: 0.15657145,
      },
      {
        year: 1827,
        emissionsPerCapita: 0.16771843,
      },
      {
        year: 1828,
        emissionsPerCapita: 0.16573869,
      },
      {
        year: 1829,
        emissionsPerCapita: 0.13103831,
      },
      {
        year: 1830,
        emissionsPerCapita: 0.17101406,
      },
      {
        year: 1831,
        emissionsPerCapita: 0.16203187,
      },
      {
        year: 1832,
        emissionsPerCapita: 0.12038958,
      },
      {
        year: 1833,
        emissionsPerCapita: 0.1513005,
      },
      {
        year: 1834,
        emissionsPerCapita: 0.15085933,
      },
      {
        year: 1835,
        emissionsPerCapita: 0.16690293,
      },
      {
        year: 1836,
        emissionsPerCapita: 0.17388494,
      },
      {
        year: 1837,
        emissionsPerCapita: 0.19722018,
      },
      {
        year: 1838,
        emissionsPerCapita: 0.21752897,
      },
      {
        year: 1839,
        emissionsPerCapita: 0.22798942,
      },
      {
        year: 1840,
        emissionsPerCapita: 0.29514763,
      },
      {
        year: 1841,
        emissionsPerCapita: 0.3044165,
      },
      {
        year: 1842,
        emissionsPerCapita: 0.34398574,
      },
      {
        year: 1843,
        emissionsPerCapita: 0.32294974,
      },
      {
        year: 1844,
        emissionsPerCapita: 0.33847037,
      },
      {
        year: 1845,
        emissionsPerCapita: 0.38910353,
      },
      {
        year: 1846,
        emissionsPerCapita: 0.40357685,
      },
      {
        year: 1847,
        emissionsPerCapita: 0.42012787,
      },
      {
        year: 1848,
        emissionsPerCapita: 0.38629287,
      },
      {
        year: 1849,
        emissionsPerCapita: 0.40705645,
      },
      {
        year: 1850,
        emissionsPerCapita: 0.4490097,
      },
      {
        year: 1851,
        emissionsPerCapita: 0.49647328,
      },
      {
        year: 1852,
        emissionsPerCapita: 0.5601497,
      },
      {
        year: 1853,
        emissionsPerCapita: 0.60221237,
      },
      {
        year: 1854,
        emissionsPerCapita: 0.70180196,
      },
      {
        year: 1855,
        emissionsPerCapita: 0.8183968,
      },
      {
        year: 1856,
        emissionsPerCapita: 0.87816346,
      },
      {
        year: 1857,
        emissionsPerCapita: 0.92877984,
      },
      {
        year: 1858,
        emissionsPerCapita: 0.9969994,
      },
      {
        year: 1859,
        emissionsPerCapita: 0.9394867,
      },
      {
        year: 1860,
        emissionsPerCapita: 1.003471,
      },
      {
        year: 1861,
        emissionsPerCapita: 1.1302289,
      },
      {
        year: 1862,
        emissionsPerCapita: 1.2347139,
      },
      {
        year: 1863,
        emissionsPerCapita: 1.3269968,
      },
      {
        year: 1864,
        emissionsPerCapita: 1.5084821,
      },
      {
        year: 1865,
        emissionsPerCapita: 1.6752176,
      },
      {
        year: 1866,
        emissionsPerCapita: 1.6456321,
      },
      {
        year: 1867,
        emissionsPerCapita: 1.7929425,
      },
      {
        year: 1868,
        emissionsPerCapita: 1.9109488,
      },
      {
        year: 1869,
        emissionsPerCapita: 1.9752913,
      },
      {
        year: 1870,
        emissionsPerCapita: 1.9321979,
      },
      {
        year: 1871,
        emissionsPerCapita: 2.1301944,
      },
      {
        year: 1872,
        emissionsPerCapita: 2.2750201,
      },
      {
        year: 1873,
        emissionsPerCapita: 2.4034545,
      },
      {
        year: 1874,
        emissionsPerCapita: 1.7304846,
      },
      {
        year: 1875,
        emissionsPerCapita: 2.4273689,
      },
      {
        year: 1876,
        emissionsPerCapita: 2.446672,
      },
      {
        year: 1877,
        emissionsPerCapita: 2.370372,
      },
      {
        year: 1878,
        emissionsPerCapita: 2.4199347,
      },
      {
        year: 1879,
        emissionsPerCapita: 2.538891,
      },
      {
        year: 1880,
        emissionsPerCapita: 2.8224943,
      },
      {
        year: 1881,
        emissionsPerCapita: 3.013424,
      },
      {
        year: 1882,
        emissionsPerCapita: 3.1931138,
      },
      {
        year: 1883,
        emissionsPerCapita: 3.3704581,
      },
      {
        year: 1884,
        emissionsPerCapita: 3.4352546,
      },
      {
        year: 1885,
        emissionsPerCapita: 3.481745,
      },
      {
        year: 1886,
        emissionsPerCapita: 3.4883993,
      },
      {
        year: 1887,
        emissionsPerCapita: 3.611334,
      },
      {
        year: 1888,
        emissionsPerCapita: 3.9121675,
      },
      {
        year: 1889,
        emissionsPerCapita: 4.1315155,
      },
      {
        year: 1890,
        emissionsPerCapita: 4.27808,
      },
      {
        year: 1891,
        emissionsPerCapita: 4.48249,
      },
      {
        year: 1892,
        emissionsPerCapita: 4.307531,
      },
      {
        year: 1893,
        emissionsPerCapita: 4.3616033,
      },
      {
        year: 1894,
        emissionsPerCapita: 4.473088,
      },
      {
        year: 1895,
        emissionsPerCapita: 4.580699,
      },
      {
        year: 1896,
        emissionsPerCapita: 4.858754,
      },
      {
        year: 1897,
        emissionsPerCapita: 5.115586,
      },
      {
        year: 1898,
        emissionsPerCapita: 5.2635717,
      },
      {
        year: 1899,
        emissionsPerCapita: 5.5158305,
      },
      {
        year: 1900,
        emissionsPerCapita: 5.8584833,
      },
      {
        year: 1901,
        emissionsPerCapita: 5.752767,
      },
      {
        year: 1902,
        emissionsPerCapita: 5.5575953,
      },
      {
        year: 1903,
        emissionsPerCapita: 5.893571,
      },
      {
        year: 1904,
        emissionsPerCapita: 6.0174766,
      },
      {
        year: 1905,
        emissionsPerCapita: 6.3640666,
      },
      {
        year: 1906,
        emissionsPerCapita: 5.935062,
      },
      {
        year: 1907,
        emissionsPerCapita: 7.143025,
      },
      {
        year: 1908,
        emissionsPerCapita: 7.10769,
      },
      {
        year: 1909,
        emissionsPerCapita: 7.010511,
      },
      {
        year: 1910,
        emissionsPerCapita: 6.9526906,
      },
      {
        year: 1911,
        emissionsPerCapita: 7.1282573,
      },
      {
        year: 1912,
        emissionsPerCapita: 7.752086,
      },
      {
        year: 1913,
        emissionsPerCapita: 8.3334255,
      },
      {
        year: 1914,
        emissionsPerCapita: 7.776015,
      },
      {
        year: 1915,
        emissionsPerCapita: 7.2489376,
      },
      {
        year: 1916,
        emissionsPerCapita: 7.8622327,
      },
      {
        year: 1917,
        emissionsPerCapita: 8.25984,
      },
      {
        year: 1918,
        emissionsPerCapita: 7.9522567,
      },
      {
        year: 1919,
        emissionsPerCapita: 6.1275907,
      },
      {
        year: 1920,
        emissionsPerCapita: 6.7833967,
      },
      {
        year: 1921,
        emissionsPerCapita: 7.458013,
      },
      {
        year: 1922,
        emissionsPerCapita: 7.145081,
      },
      {
        year: 1923,
        emissionsPerCapita: 5.1726303,
      },
      {
        year: 1924,
        emissionsPerCapita: 6.9938426,
      },
      {
        year: 1925,
        emissionsPerCapita: 7.0439167,
      },
      {
        year: 1926,
        emissionsPerCapita: 6.312412,
      },
      {
        year: 1927,
        emissionsPerCapita: 7.301617,
      },
      {
        year: 1928,
        emissionsPerCapita: 7.61232,
      },
      {
        year: 1929,
        emissionsPerCapita: 8.073647,
      },
      {
        year: 1930,
        emissionsPerCapita: 6.871657,
      },
      {
        year: 1931,
        emissionsPerCapita: 5.700178,
      },
      {
        year: 1932,
        emissionsPerCapita: 5.096256,
      },
      {
        year: 1933,
        emissionsPerCapita: 5.315258,
      },
      {
        year: 1934,
        emissionsPerCapita: 5.9089975,
      },
      {
        year: 1935,
        emissionsPerCapita: 6.495202,
      },
      {
        year: 1936,
        emissionsPerCapita: 7.124051,
      },
      {
        year: 1937,
        emissionsPerCapita: 7.9784474,
      },
      {
        year: 1938,
        emissionsPerCapita: 8.4533,
      },
      {
        year: 1939,
        emissionsPerCapita: 9.071787,
      },
      {
        year: 1940,
        emissionsPerCapita: 9.120772,
      },
      {
        year: 1941,
        emissionsPerCapita: 9.196745,
      },
      {
        year: 1942,
        emissionsPerCapita: 9.298256,
      },
      {
        year: 1943,
        emissionsPerCapita: 9.478794,
      },
      {
        year: 1944,
        emissionsPerCapita: 8.392185,
      },
      {
        year: 1945,
        emissionsPerCapita: 1.626086,
      },
      {
        year: 1946,
        emissionsPerCapita: 3.8143752,
      },
      {
        year: 1947,
        emissionsPerCapita: 4.4693284,
      },
      {
        year: 1948,
        emissionsPerCapita: 5.3269467,
      },
      {
        year: 1949,
        emissionsPerCapita: 6.0961905,
      },
      {
        year: 1950,
        emissionsPerCapita: 7.3113537,
      },
      {
        year: 1951,
        emissionsPerCapita: 8.266675,
      },
      {
        year: 1952,
        emissionsPerCapita: 8.749926,
      },
      {
        year: 1953,
        emissionsPerCapita: 8.915293,
      },
      {
        year: 1954,
        emissionsPerCapita: 9.410676,
      },
      {
        year: 1955,
        emissionsPerCapita: 10.286589,
      },
      {
        year: 1956,
        emissionsPerCapita: 10.850425,
      },
      {
        year: 1957,
        emissionsPerCapita: 10.942861,
      },
      {
        year: 1958,
        emissionsPerCapita: 10.550005,
      },
      {
        year: 1959,
        emissionsPerCapita: 10.462024,
      },
      {
        year: 1960,
        emissionsPerCapita: 11.178848,
      },
      {
        year: 1961,
        emissionsPerCapita: 11.37754,
      },
      {
        year: 1962,
        emissionsPerCapita: 11.935194,
      },
      {
        year: 1963,
        emissionsPerCapita: 12.657607,
      },
      {
        year: 1964,
        emissionsPerCapita: 12.865128,
      },
      {
        year: 1965,
        emissionsPerCapita: 12.638417,
      },
      {
        year: 1966,
        emissionsPerCapita: 12.418865,
      },
      {
        year: 1967,
        emissionsPerCapita: 12.163438,
      },
      {
        year: 1968,
        emissionsPerCapita: 12.736349,
      },
      {
        year: 1969,
        emissionsPerCapita: 13.496877,
      },
      {
        year: 1970,
        emissionsPerCapita: 13.119634,
      },
      {
        year: 1971,
        emissionsPerCapita: 13.239201,
      },
      {
        year: 1972,
        emissionsPerCapita: 13.230207,
      },
      {
        year: 1973,
        emissionsPerCapita: 13.749271,
      },
      {
        year: 1974,
        emissionsPerCapita: 13.452803,
      },
      {
        year: 1975,
        emissionsPerCapita: 12.737271,
      },
      {
        year: 1976,
        emissionsPerCapita: 13.920084,
      },
      {
        year: 1977,
        emissionsPerCapita: 13.462953,
      },
      {
        year: 1978,
        emissionsPerCapita: 13.814602,
      },
      {
        year: 1979,
        emissionsPerCapita: 14.304777,
      },
      {
        year: 1980,
        emissionsPerCapita: 14.046617,
      },
      {
        year: 1981,
        emissionsPerCapita: 13.365831,
      },
      {
        year: 1982,
        emissionsPerCapita: 12.956836,
      },
      {
        year: 1983,
        emissionsPerCapita: 12.932133,
      },
      {
        year: 1984,
        emissionsPerCapita: 13.247032,
      },
      {
        year: 1985,
        emissionsPerCapita: 13.409607,
      },
      {
        year: 1986,
        emissionsPerCapita: 13.442259,
      },
      {
        year: 1987,
        emissionsPerCapita: 13.22588,
      },
      {
        year: 1988,
        emissionsPerCapita: 13.127654,
      },
      {
        year: 1989,
        emissionsPerCapita: 12.768382,
      },
      {
        year: 1990,
        emissionsPerCapita: 13.233256,
      },
      {
        year: 1991,
        emissionsPerCapita: 12.663626,
      },
      {
        year: 1992,
        emissionsPerCapita: 11.978323,
      },
      {
        year: 1993,
        emissionsPerCapita: 11.773518,
      },
      {
        year: 1994,
        emissionsPerCapita: 11.534621,
      },
      {
        year: 1995,
        emissionsPerCapita: 11.459825,
      },
      {
        year: 1996,
        emissionsPerCapita: 11.666093,
      },
      {
        year: 1997,
        emissionsPerCapita: 11.306132,
      },
      {
        year: 1998,
        emissionsPerCapita: 11.26054,
      },
      {
        year: 1999,
        emissionsPerCapita: 10.9630375,
      },
      {
        year: 2000,
        emissionsPerCapita: 10.990293,
      },
      {
        year: 2001,
        emissionsPerCapita: 11.1706505,
      },
      {
        year: 2002,
        emissionsPerCapita: 10.952268,
      },
      {
        year: 2003,
        emissionsPerCapita: 10.893721,
      },
      {
        year: 2004,
        emissionsPerCapita: 10.677804,
      },
      {
        year: 2005,
        emissionsPerCapita: 10.577881,
      },
      {
        year: 2006,
        emissionsPerCapita: 10.849607,
      },
      {
        year: 2007,
        emissionsPerCapita: 10.407519,
      },
      {
        year: 2008,
        emissionsPerCapita: 10.560957,
      },
      {
        year: 2009,
        emissionsPerCapita: 9.760277,
      },
      {
        year: 2010,
        emissionsPerCapita: 10.227274,
      },
      {
        year: 2011,
        emissionsPerCapita: 9.949727,
      },
      {
        year: 2012,
        emissionsPerCapita: 10.060882,
      },
      {
        year: 2013,
        emissionsPerCapita: 10.263162,
      },
      {
        year: 2014,
        emissionsPerCapita: 9.739702,
      },
      {
        year: 2015,
        emissionsPerCapita: 9.757169,
      },
      {
        year: 2016,
        emissionsPerCapita: 9.642492,
      },
      {
        year: 2017,
        emissionsPerCapita: 9.441107,
      },
      {
        year: 2018,
        emissionsPerCapita: 9.116708,
      },
      {
        year: 2019,
        emissionsPerCapita: 8.494897,
      },
      {
        year: 2020,
        emissionsPerCapita: 7.7528024,
      },
      {
        year: 2021,
        emissionsPerCapita: 8.109928,
      },
      {
        year: 2022,
        emissionsPerCapita: 7.985512,
      },
      {
        year: 2023,
        emissionsPerCapita: 7.051021,
      },
    ],
  },
  {
    country: 'India',
    data: [
      {
        year: 1858,
        emissionsPerCapita: 0.0016306345,
      },
      {
        year: 1859,
        emissionsPerCapita: 0.0026225285,
      },
      {
        year: 1860,
        emissionsPerCapita: 0.0026413742,
      },
      {
        year: 1861,
        emissionsPerCapita: 0.0020357708,
      },
      {
        year: 1862,
        emissionsPerCapita: 0.0022457154,
      },
      {
        year: 1863,
        emissionsPerCapita: 0.0024812713,
      },
      {
        year: 1864,
        emissionsPerCapita: 0.0023389156,
      },
      {
        year: 1865,
        emissionsPerCapita: 0.0022912421,
      },
      {
        year: 1866,
        emissionsPerCapita: 0.0025777572,
      },
      {
        year: 1878,
        emissionsPerCapita: 0.0069541484,
      },
      {
        year: 1879,
        emissionsPerCapita: 0.00661162,
      },
      {
        year: 1880,
        emissionsPerCapita: 0.007376274,
      },
      {
        year: 1881,
        emissionsPerCapita: 0.007152246,
      },
      {
        year: 1882,
        emissionsPerCapita: 0.008483122,
      },
      {
        year: 1883,
        emissionsPerCapita: 0.00935244,
      },
      {
        year: 1884,
        emissionsPerCapita: 0.010376405,
      },
      {
        year: 1885,
        emissionsPerCapita: 0.009273,
      },
      {
        year: 1886,
        emissionsPerCapita: 0.010368174,
      },
      {
        year: 1887,
        emissionsPerCapita: 0.011375812,
      },
      {
        year: 1888,
        emissionsPerCapita: 0.012549144,
      },
      {
        year: 1889,
        emissionsPerCapita: 0.014703918,
      },
      {
        year: 1890,
        emissionsPerCapita: 0.016115645,
      },
      {
        year: 1891,
        emissionsPerCapita: 0.017284762,
      },
      {
        year: 1892,
        emissionsPerCapita: 0.018952932,
      },
      {
        year: 1893,
        emissionsPerCapita: 0.01999356,
      },
      {
        year: 1894,
        emissionsPerCapita: 0.020230243,
      },
      {
        year: 1895,
        emissionsPerCapita: 0.025301976,
      },
      {
        year: 1896,
        emissionsPerCapita: 0.027325615,
      },
      {
        year: 1897,
        emissionsPerCapita: 0.029601838,
      },
      {
        year: 1898,
        emissionsPerCapita: 0.03268272,
      },
      {
        year: 1899,
        emissionsPerCapita: 0.035929587,
      },
      {
        year: 1900,
        emissionsPerCapita: 0.042497184,
      },
      {
        year: 1901,
        emissionsPerCapita: 0.04676396,
      },
      {
        year: 1902,
        emissionsPerCapita: 0.051255062,
      },
      {
        year: 1903,
        emissionsPerCapita: 0.051971376,
      },
      {
        year: 1904,
        emissionsPerCapita: 0.05781762,
      },
      {
        year: 1905,
        emissionsPerCapita: 0.058773577,
      },
      {
        year: 1906,
        emissionsPerCapita: 0.067479804,
      },
      {
        year: 1907,
        emissionsPerCapita: 0.074727364,
      },
      {
        year: 1908,
        emissionsPerCapita: 0.08500604,
      },
      {
        year: 1909,
        emissionsPerCapita: 0.08200695,
      },
      {
        year: 1910,
        emissionsPerCapita: 0.07948412,
      },
      {
        year: 1911,
        emissionsPerCapita: 0.08363586,
      },
      {
        year: 1912,
        emissionsPerCapita: 0.09608166,
      },
      {
        year: 1913,
        emissionsPerCapita: 0.105915904,
      },
      {
        year: 1914,
        emissionsPerCapita: 0.10660639,
      },
      {
        year: 1915,
        emissionsPerCapita: 0.1113691,
      },
      {
        year: 1916,
        emissionsPerCapita: 0.11253865,
      },
      {
        year: 1917,
        emissionsPerCapita: 0.11748533,
      },
      {
        year: 1918,
        emissionsPerCapita: 0.13189174,
      },
      {
        year: 1919,
        emissionsPerCapita: 0.14359692,
      },
      {
        year: 1920,
        emissionsPerCapita: 0.11597921,
      },
      {
        year: 1921,
        emissionsPerCapita: 0.12397458,
      },
      {
        year: 1922,
        emissionsPerCapita: 0.12101957,
      },
      {
        year: 1923,
        emissionsPerCapita: 0.12333363,
      },
      {
        year: 1924,
        emissionsPerCapita: 0.13069953,
      },
      {
        year: 1925,
        emissionsPerCapita: 0.1277203,
      },
      {
        year: 1926,
        emissionsPerCapita: 0.12605053,
      },
      {
        year: 1927,
        emissionsPerCapita: 0.13091344,
      },
      {
        year: 1928,
        emissionsPerCapita: 0.12405647,
      },
      {
        year: 1929,
        emissionsPerCapita: 0.12777013,
      },
      {
        year: 1930,
        emissionsPerCapita: 0.1284197,
      },
      {
        year: 1931,
        emissionsPerCapita: 0.116239466,
      },
      {
        year: 1932,
        emissionsPerCapita: 0.10668871,
      },
      {
        year: 1933,
        emissionsPerCapita: 0.10328146,
      },
      {
        year: 1934,
        emissionsPerCapita: 0.11374881,
      },
      {
        year: 1935,
        emissionsPerCapita: 0.117218636,
      },
      {
        year: 1936,
        emissionsPerCapita: 0.1136144,
      },
      {
        year: 1937,
        emissionsPerCapita: 0.1241089,
      },
      {
        year: 1938,
        emissionsPerCapita: 0.136815,
      },
      {
        year: 1939,
        emissionsPerCapita: 0.13263759,
      },
      {
        year: 1940,
        emissionsPerCapita: 0.13995251,
      },
      {
        year: 1941,
        emissionsPerCapita: 0.14319769,
      },
      {
        year: 1942,
        emissionsPerCapita: 0.14351086,
      },
      {
        year: 1943,
        emissionsPerCapita: 0.1259883,
      },
      {
        year: 1944,
        emissionsPerCapita: 0.12979308,
      },
      {
        year: 1945,
        emissionsPerCapita: 0.14496106,
      },
      {
        year: 1946,
        emissionsPerCapita: 0.14425357,
      },
      {
        year: 1947,
        emissionsPerCapita: 0.1479919,
      },
      {
        year: 1948,
        emissionsPerCapita: 0.14916655,
      },
      {
        year: 1949,
        emissionsPerCapita: 0.15787825,
      },
      {
        year: 1950,
        emissionsPerCapita: 0.1764548,
      },
      {
        year: 1951,
        emissionsPerCapita: 0.18091984,
      },
      {
        year: 1952,
        emissionsPerCapita: 0.18632445,
      },
      {
        year: 1953,
        emissionsPerCapita: 0.18563625,
      },
      {
        year: 1954,
        emissionsPerCapita: 0.19122282,
      },
      {
        year: 1955,
        emissionsPerCapita: 0.20321785,
      },
      {
        year: 1956,
        emissionsPerCapita: 0.2056893,
      },
      {
        year: 1957,
        emissionsPerCapita: 0.22556178,
      },
      {
        year: 1958,
        emissionsPerCapita: 0.23044969,
      },
      {
        year: 1959,
        emissionsPerCapita: 0.23826177,
      },
      {
        year: 1960,
        emissionsPerCapita: 0.25533834,
      },
      {
        year: 1961,
        emissionsPerCapita: 0.26962334,
      },
      {
        year: 1962,
        emissionsPerCapita: 0.28993317,
      },
      {
        year: 1963,
        emissionsPerCapita: 0.30427772,
      },
      {
        year: 1964,
        emissionsPerCapita: 0.29106772,
      },
      {
        year: 1965,
        emissionsPerCapita: 0.31358773,
      },
      {
        year: 1966,
        emissionsPerCapita: 0.31827557,
      },
      {
        year: 1967,
        emissionsPerCapita: 0.31187224,
      },
      {
        year: 1968,
        emissionsPerCapita: 0.3330088,
      },
      {
        year: 1969,
        emissionsPerCapita: 0.3323091,
      },
      {
        year: 1970,
        emissionsPerCapita: 0.3329081,
      },
      {
        year: 1971,
        emissionsPerCapita: 0.3439615,
      },
      {
        year: 1972,
        emissionsPerCapita: 0.35590243,
      },
      {
        year: 1973,
        emissionsPerCapita: 0.35836738,
      },
      {
        year: 1974,
        emissionsPerCapita: 0.36153805,
      },
      {
        year: 1975,
        emissionsPerCapita: 0.38312688,
      },
      {
        year: 1976,
        emissionsPerCapita: 0.39105973,
      },
      {
        year: 1977,
        emissionsPerCapita: 0.40412185,
      },
      {
        year: 1978,
        emissionsPerCapita: 0.4013089,
      },
      {
        year: 1979,
        emissionsPerCapita: 0.4116552,
      },
      {
        year: 1980,
        emissionsPerCapita: 0.42439717,
      },
      {
        year: 1981,
        emissionsPerCapita: 0.44758826,
      },
      {
        year: 1982,
        emissionsPerCapita: 0.45172,
      },
      {
        year: 1983,
        emissionsPerCapita: 0.4776402,
      },
      {
        year: 1984,
        emissionsPerCapita: 0.4789657,
      },
      {
        year: 1985,
        emissionsPerCapita: 0.5145839,
      },
      {
        year: 1986,
        emissionsPerCapita: 0.5391612,
      },
      {
        year: 1987,
        emissionsPerCapita: 0.5628946,
      },
      {
        year: 1988,
        emissionsPerCapita: 0.59430265,
      },
      {
        year: 1989,
        emissionsPerCapita: 0.6390376,
      },
      {
        year: 1990,
        emissionsPerCapita: 0.668225,
      },
      {
        year: 1991,
        emissionsPerCapita: 0.6961713,
      },
      {
        year: 1992,
        emissionsPerCapita: 0.7258895,
      },
      {
        year: 1993,
        emissionsPerCapita: 0.73450357,
      },
      {
        year: 1994,
        emissionsPerCapita: 0.758703,
      },
      {
        year: 1995,
        emissionsPerCapita: 0.7918992,
      },
      {
        year: 1996,
        emissionsPerCapita: 0.8407051,
      },
      {
        year: 1997,
        emissionsPerCapita: 0.8587551,
      },
      {
        year: 1998,
        emissionsPerCapita: 0.85972553,
      },
      {
        year: 1999,
        emissionsPerCapita: 0.9253892,
      },
      {
        year: 2000,
        emissionsPerCapita: 0.93243545,
      },
      {
        year: 2001,
        emissionsPerCapita: 0.92821974,
      },
      {
        year: 2002,
        emissionsPerCapita: 0.94036025,
      },
      {
        year: 2003,
        emissionsPerCapita: 0.95606565,
      },
      {
        year: 2004,
        emissionsPerCapita: 0.9980951,
      },
      {
        year: 2005,
        emissionsPerCapita: 1.034569,
      },
      {
        year: 2006,
        emissionsPerCapita: 1.1019762,
      },
      {
        year: 2007,
        emissionsPerCapita: 1.1695087,
      },
      {
        year: 2008,
        emissionsPerCapita: 1.2330484,
      },
      {
        year: 2009,
        emissionsPerCapita: 1.3155314,
      },
      {
        year: 2010,
        emissionsPerCapita: 1.348904,
      },
      {
        year: 2011,
        emissionsPerCapita: 1.3992051,
      },
      {
        year: 2012,
        emissionsPerCapita: 1.5060124,
      },
      {
        year: 2013,
        emissionsPerCapita: 1.53963,
      },
      {
        year: 2014,
        emissionsPerCapita: 1.6371113,
      },
      {
        year: 2015,
        emissionsPerCapita: 1.6823632,
      },
      {
        year: 2016,
        emissionsPerCapita: 1.7520503,
      },
      {
        year: 2017,
        emissionsPerCapita: 1.7847193,
      },
      {
        year: 2018,
        emissionsPerCapita: 1.886328,
      },
      {
        year: 2019,
        emissionsPerCapita: 1.8810879,
      },
      {
        year: 2020,
        emissionsPerCapita: 1.726452,
      },
      {
        year: 2021,
        emissionsPerCapita: 1.8909733,
      },
      {
        year: 2022,
        emissionsPerCapita: 1.9861934,
      },
      {
        year: 2023,
        emissionsPerCapita: 2.129469,
      },
    ],
  },
  {
    country: 'Italy',
    data: [
      {
        year: 1860,
        emissionsPerCapita: 0.0011262266,
      },
      {
        year: 1861,
        emissionsPerCapita: 0.02559917,
      },
      {
        year: 1862,
        emissionsPerCapita: 0.046562288,
      },
      {
        year: 1863,
        emissionsPerCapita: 0.040323935,
      },
      {
        year: 1864,
        emissionsPerCapita: 0.060095884,
      },
      {
        year: 1865,
        emissionsPerCapita: 0.047303215,
      },
      {
        year: 1866,
        emissionsPerCapita: 0.05458293,
      },
      {
        year: 1867,
        emissionsPerCapita: 0.053961847,
      },
      {
        year: 1868,
        emissionsPerCapita: 0.06190334,
      },
      {
        year: 1869,
        emissionsPerCapita: 0.067893706,
      },
      {
        year: 1870,
        emissionsPerCapita: 0.09653522,
      },
      {
        year: 1871,
        emissionsPerCapita: 0.082708955,
      },
      {
        year: 1872,
        emissionsPerCapita: 0.105997294,
      },
      {
        year: 1873,
        emissionsPerCapita: 0.09814545,
      },
      {
        year: 1874,
        emissionsPerCapita: 0.10561151,
      },
      {
        year: 1875,
        emissionsPerCapita: 0.107471436,
      },
      {
        year: 1876,
        emissionsPerCapita: 0.14314722,
      },
      {
        year: 1877,
        emissionsPerCapita: 0.1318209,
      },
      {
        year: 1878,
        emissionsPerCapita: 0.13046588,
      },
      {
        year: 1879,
        emissionsPerCapita: 0.14930338,
      },
      {
        year: 1880,
        emissionsPerCapita: 0.17261681,
      },
      {
        year: 1881,
        emissionsPerCapita: 0.20166817,
      },
      {
        year: 1882,
        emissionsPerCapita: 0.21094054,
      },
      {
        year: 1883,
        emissionsPerCapita: 0.22198184,
      },
      {
        year: 1884,
        emissionsPerCapita: 0.24416532,
      },
      {
        year: 1885,
        emissionsPerCapita: 0.27593336,
      },
      {
        year: 1886,
        emissionsPerCapita: 0.27249047,
      },
      {
        year: 1887,
        emissionsPerCapita: 0.3298038,
      },
      {
        year: 1888,
        emissionsPerCapita: 0.35167447,
      },
      {
        year: 1889,
        emissionsPerCapita: 0.36085936,
      },
      {
        year: 1890,
        emissionsPerCapita: 0.3888937,
      },
      {
        year: 1891,
        emissionsPerCapita: 0.3482069,
      },
      {
        year: 1892,
        emissionsPerCapita: 0.34266305,
      },
      {
        year: 1893,
        emissionsPerCapita: 0.32921925,
      },
      {
        year: 1894,
        emissionsPerCapita: 0.4062961,
      },
      {
        year: 1895,
        emissionsPerCapita: 0.37176776,
      },
      {
        year: 1896,
        emissionsPerCapita: 0.3512562,
      },
      {
        year: 1897,
        emissionsPerCapita: 0.3643463,
      },
      {
        year: 1898,
        emissionsPerCapita: 0.37693927,
      },
      {
        year: 1899,
        emissionsPerCapita: 0.41044554,
      },
      {
        year: 1900,
        emissionsPerCapita: 0.41726837,
      },
      {
        year: 1901,
        emissionsPerCapita: 0.40272814,
      },
      {
        year: 1902,
        emissionsPerCapita: 0.4438756,
      },
      {
        year: 1903,
        emissionsPerCapita: 0.44913656,
      },
      {
        year: 1904,
        emissionsPerCapita: 0.47091293,
      },
      {
        year: 1905,
        emissionsPerCapita: 0.51494014,
      },
      {
        year: 1906,
        emissionsPerCapita: 0.60375595,
      },
      {
        year: 1907,
        emissionsPerCapita: 0.6477283,
      },
      {
        year: 1908,
        emissionsPerCapita: 0.6553477,
      },
      {
        year: 1909,
        emissionsPerCapita: 0.7191808,
      },
      {
        year: 1910,
        emissionsPerCapita: 0.7160845,
      },
      {
        year: 1911,
        emissionsPerCapita: 0.7351726,
      },
      {
        year: 1912,
        emissionsPerCapita: 0.7690465,
      },
      {
        year: 1913,
        emissionsPerCapita: 0.8257717,
      },
      {
        year: 1914,
        emissionsPerCapita: 0.7491461,
      },
      {
        year: 1915,
        emissionsPerCapita: 0.6527092,
      },
      {
        year: 1916,
        emissionsPerCapita: 0.6440776,
      },
      {
        year: 1917,
        emissionsPerCapita: 0.4407476,
      },
      {
        year: 1918,
        emissionsPerCapita: 0.51772255,
      },
      {
        year: 1919,
        emissionsPerCapita: 0.5058378,
      },
      {
        year: 1920,
        emissionsPerCapita: 0.48337826,
      },
      {
        year: 1921,
        emissionsPerCapita: 0.588292,
      },
      {
        year: 1922,
        emissionsPerCapita: 0.6858346,
      },
      {
        year: 1923,
        emissionsPerCapita: 0.70966345,
      },
      {
        year: 1924,
        emissionsPerCapita: 0.8440211,
      },
      {
        year: 1925,
        emissionsPerCapita: 0.8051899,
      },
      {
        year: 1926,
        emissionsPerCapita: 0.923836,
      },
      {
        year: 1927,
        emissionsPerCapita: 1.0319438,
      },
      {
        year: 1928,
        emissionsPerCapita: 0.96636665,
      },
      {
        year: 1929,
        emissionsPerCapita: 1.1057256,
      },
      {
        year: 1930,
        emissionsPerCapita: 0.9848254,
      },
      {
        year: 1931,
        emissionsPerCapita: 0.84374666,
      },
      {
        year: 1932,
        emissionsPerCapita: 0.68712944,
      },
      {
        year: 1933,
        emissionsPerCapita: 0.7399153,
      },
      {
        year: 1934,
        emissionsPerCapita: 0.95498157,
      },
      {
        year: 1935,
        emissionsPerCapita: 1.0835172,
      },
      {
        year: 1936,
        emissionsPerCapita: 0.757516,
      },
      {
        year: 1937,
        emissionsPerCapita: 1.0608381,
      },
      {
        year: 1938,
        emissionsPerCapita: 1.0474766,
      },
      {
        year: 1939,
        emissionsPerCapita: 1.0656236,
      },
      {
        year: 1940,
        emissionsPerCapita: 1.1245015,
      },
      {
        year: 1941,
        emissionsPerCapita: 0.9769447,
      },
      {
        year: 1942,
        emissionsPerCapita: 0.94786507,
      },
      {
        year: 1943,
        emissionsPerCapita: 0.15996632,
      },
      {
        year: 1944,
        emissionsPerCapita: 0.07998864,
      },
      {
        year: 1945,
        emissionsPerCapita: 0.09670476,
      },
      {
        year: 1946,
        emissionsPerCapita: 0.48959672,
      },
      {
        year: 1947,
        emissionsPerCapita: 0.80761707,
      },
      {
        year: 1948,
        emissionsPerCapita: 0.7752891,
      },
      {
        year: 1949,
        emissionsPerCapita: 0.8625921,
      },
      {
        year: 1950,
        emissionsPerCapita: 0.89306104,
      },
      {
        year: 1951,
        emissionsPerCapita: 1.0442834,
      },
      {
        year: 1952,
        emissionsPerCapita: 1.0766172,
      },
      {
        year: 1953,
        emissionsPerCapita: 1.181049,
      },
      {
        year: 1954,
        emissionsPerCapita: 1.3576268,
      },
      {
        year: 1955,
        emissionsPerCapita: 1.5222311,
      },
      {
        year: 1956,
        emissionsPerCapita: 1.7246218,
      },
      {
        year: 1957,
        emissionsPerCapita: 1.7896279,
      },
      {
        year: 1958,
        emissionsPerCapita: 1.790386,
      },
      {
        year: 1959,
        emissionsPerCapita: 1.911533,
      },
      {
        year: 1960,
        emissionsPerCapita: 2.2054744,
      },
      {
        year: 1961,
        emissionsPerCapita: 2.4967232,
      },
      {
        year: 1962,
        emissionsPerCapita: 2.9151537,
      },
      {
        year: 1963,
        emissionsPerCapita: 3.2539659,
      },
      {
        year: 1964,
        emissionsPerCapita: 3.444189,
      },
      {
        year: 1965,
        emissionsPerCapita: 3.68154,
      },
      {
        year: 1966,
        emissionsPerCapita: 4.121458,
      },
      {
        year: 1967,
        emissionsPerCapita: 4.473389,
      },
      {
        year: 1968,
        emissionsPerCapita: 4.727034,
      },
      {
        year: 1969,
        emissionsPerCapita: 5.082176,
      },
      {
        year: 1970,
        emissionsPerCapita: 5.5509133,
      },
      {
        year: 1971,
        emissionsPerCapita: 5.791509,
      },
      {
        year: 1972,
        emissionsPerCapita: 6.070876,
      },
      {
        year: 1973,
        emissionsPerCapita: 6.4893556,
      },
      {
        year: 1974,
        emissionsPerCapita: 6.5349445,
      },
      {
        year: 1975,
        emissionsPerCapita: 6.182289,
      },
      {
        year: 1976,
        emissionsPerCapita: 6.595732,
      },
      {
        year: 1977,
        emissionsPerCapita: 6.361312,
      },
      {
        year: 1978,
        emissionsPerCapita: 6.637123,
      },
      {
        year: 1979,
        emissionsPerCapita: 6.863338,
      },
      {
        year: 1980,
        emissionsPerCapita: 6.8501816,
      },
      {
        year: 1981,
        emissionsPerCapita: 6.625272,
      },
      {
        year: 1982,
        emissionsPerCapita: 6.468342,
      },
      {
        year: 1983,
        emissionsPerCapita: 6.313786,
      },
      {
        year: 1984,
        emissionsPerCapita: 6.417863,
      },
      {
        year: 1985,
        emissionsPerCapita: 6.4898276,
      },
      {
        year: 1986,
        emissionsPerCapita: 6.3856063,
      },
      {
        year: 1987,
        emissionsPerCapita: 6.681064,
      },
      {
        year: 1988,
        emissionsPerCapita: 6.7797422,
      },
      {
        year: 1989,
        emissionsPerCapita: 7.1036334,
      },
      {
        year: 1990,
        emissionsPerCapita: 7.683602,
      },
      {
        year: 1991,
        emissionsPerCapita: 7.669526,
      },
      {
        year: 1992,
        emissionsPerCapita: 7.666276,
      },
      {
        year: 1993,
        emissionsPerCapita: 7.526,
      },
      {
        year: 1994,
        emissionsPerCapita: 7.3929815,
      },
      {
        year: 1995,
        emissionsPerCapita: 7.8147864,
      },
      {
        year: 1996,
        emissionsPerCapita: 7.747128,
      },
      {
        year: 1997,
        emissionsPerCapita: 7.8436007,
      },
      {
        year: 1998,
        emissionsPerCapita: 8.05421,
      },
      {
        year: 1999,
        emissionsPerCapita: 8.1324215,
      },
      {
        year: 2000,
        emissionsPerCapita: 8.199387,
      },
      {
        year: 2001,
        emissionsPerCapita: 8.195995,
      },
      {
        year: 2002,
        emissionsPerCapita: 8.308955,
      },
      {
        year: 2003,
        emissionsPerCapita: 8.574556,
      },
      {
        year: 2004,
        emissionsPerCapita: 8.606286,
      },
      {
        year: 2005,
        emissionsPerCapita: 8.567441,
      },
      {
        year: 2006,
        emissionsPerCapita: 8.440842,
      },
      {
        year: 2007,
        emissionsPerCapita: 8.28394,
      },
      {
        year: 2008,
        emissionsPerCapita: 8.027411,
      },
      {
        year: 2009,
        emissionsPerCapita: 7.07901,
      },
      {
        year: 2010,
        emissionsPerCapita: 7.2420187,
      },
      {
        year: 2011,
        emissionsPerCapita: 7.0218515,
      },
      {
        year: 2012,
        emissionsPerCapita: 6.6649795,
      },
      {
        year: 2013,
        emissionsPerCapita: 6.0915275,
      },
      {
        year: 2014,
        emissionsPerCapita: 5.759583,
      },
      {
        year: 2015,
        emissionsPerCapita: 5.963722,
      },
      {
        year: 2016,
        emissionsPerCapita: 5.9218845,
      },
      {
        year: 2017,
        emissionsPerCapita: 5.8399863,
      },
      {
        year: 2018,
        emissionsPerCapita: 5.79092,
      },
      {
        year: 2019,
        emissionsPerCapita: 5.6483083,
      },
      {
        year: 2020,
        emissionsPerCapita: 5.0507174,
      },
      {
        year: 2021,
        emissionsPerCapita: 5.6250033,
      },
      {
        year: 2022,
        emissionsPerCapita: 5.714146,
      },
      {
        year: 2023,
        emissionsPerCapita: 5.2682943,
      },
    ],
  },
  {
    country: 'Japan',
    data: [
      {
        year: 1868,
        emissionsPerCapita: 0.0003208706,
      },
      {
        year: 1869,
        emissionsPerCapita: 0.0005324431,
      },
      {
        year: 1870,
        emissionsPerCapita: 0.0005297938,
      },
      {
        year: 1871,
        emissionsPerCapita: 0.0007375793,
      },
      {
        year: 1872,
        emissionsPerCapita: 0.0009424727,
      },
      {
        year: 1873,
        emissionsPerCapita: 0.0011441378,
      },
      {
        year: 1874,
        emissionsPerCapita: 0.016529704,
      },
      {
        year: 1875,
        emissionsPerCapita: 0.040327102,
      },
      {
        year: 1876,
        emissionsPerCapita: 0.03903576,
      },
      {
        year: 1877,
        emissionsPerCapita: 0.035634115,
      },
      {
        year: 1878,
        emissionsPerCapita: 0.050978925,
      },
      {
        year: 1879,
        emissionsPerCapita: 0.063095115,
      },
      {
        year: 1880,
        emissionsPerCapita: 0.063514106,
      },
      {
        year: 1881,
        emissionsPerCapita: 0.06478428,
      },
      {
        year: 1882,
        emissionsPerCapita: 0.06688372,
      },
      {
        year: 1883,
        emissionsPerCapita: 0.0715289,
      },
      {
        year: 1884,
        emissionsPerCapita: 0.07733513,
      },
      {
        year: 1885,
        emissionsPerCapita: 0.08683663,
      },
      {
        year: 1886,
        emissionsPerCapita: 0.09268413,
      },
      {
        year: 1887,
        emissionsPerCapita: 0.11401958,
      },
      {
        year: 1888,
        emissionsPerCapita: 0.1306304,
      },
      {
        year: 1889,
        emissionsPerCapita: 0.15664284,
      },
      {
        year: 1890,
        emissionsPerCapita: 0.16768903,
      },
      {
        year: 1891,
        emissionsPerCapita: 0.1997487,
      },
      {
        year: 1892,
        emissionsPerCapita: 0.19670391,
      },
      {
        year: 1893,
        emissionsPerCapita: 0.20682833,
      },
      {
        year: 1894,
        emissionsPerCapita: 0.26339594,
      },
      {
        year: 1895,
        emissionsPerCapita: 0.2892916,
      },
      {
        year: 1896,
        emissionsPerCapita: 0.3026436,
      },
      {
        year: 1897,
        emissionsPerCapita: 0.31426576,
      },
      {
        year: 1898,
        emissionsPerCapita: 0.39637116,
      },
      {
        year: 1899,
        emissionsPerCapita: 0.3929726,
      },
      {
        year: 1900,
        emissionsPerCapita: 0.43704188,
      },
      {
        year: 1901,
        emissionsPerCapita: 0.518305,
      },
      {
        year: 1902,
        emissionsPerCapita: 0.5492697,
      },
      {
        year: 1903,
        emissionsPerCapita: 0.56122357,
      },
      {
        year: 1904,
        emissionsPerCapita: 0.62492174,
      },
      {
        year: 1905,
        emissionsPerCapita: 0.636351,
      },
      {
        year: 1906,
        emissionsPerCapita: 0.6903917,
      },
      {
        year: 1907,
        emissionsPerCapita: 0.728403,
      },
      {
        year: 1908,
        emissionsPerCapita: 0.7725069,
      },
      {
        year: 1909,
        emissionsPerCapita: 0.77609915,
      },
      {
        year: 1910,
        emissionsPerCapita: 0.789576,
      },
      {
        year: 1911,
        emissionsPerCapita: 0.8758014,
      },
      {
        year: 1912,
        emissionsPerCapita: 0.96459967,
      },
      {
        year: 1913,
        emissionsPerCapita: 1.0503626,
      },
      {
        year: 1914,
        emissionsPerCapita: 1.1084434,
      },
      {
        year: 1915,
        emissionsPerCapita: 0.99746436,
      },
      {
        year: 1916,
        emissionsPerCapita: 1.0928257,
      },
      {
        year: 1917,
        emissionsPerCapita: 1.2434045,
      },
      {
        year: 1918,
        emissionsPerCapita: 1.3025132,
      },
      {
        year: 1919,
        emissionsPerCapita: 1.424043,
      },
      {
        year: 1920,
        emissionsPerCapita: 1.318704,
      },
      {
        year: 1921,
        emissionsPerCapita: 1.1705152,
      },
      {
        year: 1922,
        emissionsPerCapita: 1.2345562,
      },
      {
        year: 1923,
        emissionsPerCapita: 1.2937083,
      },
      {
        year: 1924,
        emissionsPerCapita: 1.333551,
      },
      {
        year: 1925,
        emissionsPerCapita: 1.3591632,
      },
      {
        year: 1926,
        emissionsPerCapita: 1.3499742,
      },
      {
        year: 1927,
        emissionsPerCapita: 1.4420434,
      },
      {
        year: 1928,
        emissionsPerCapita: 1.4682201,
      },
      {
        year: 1929,
        emissionsPerCapita: 1.4871978,
      },
      {
        year: 1930,
        emissionsPerCapita: 1.3324836,
      },
      {
        year: 1931,
        emissionsPerCapita: 1.1888456,
      },
      {
        year: 1932,
        emissionsPerCapita: 1.1746082,
      },
      {
        year: 1933,
        emissionsPerCapita: 1.3583847,
      },
      {
        year: 1934,
        emissionsPerCapita: 1.4858857,
      },
      {
        year: 1935,
        emissionsPerCapita: 1.5420762,
      },
      {
        year: 1936,
        emissionsPerCapita: 1.6722602,
      },
      {
        year: 1937,
        emissionsPerCapita: 1.772255,
      },
      {
        year: 1938,
        emissionsPerCapita: 1.8376632,
      },
      {
        year: 1939,
        emissionsPerCapita: 1.7589908,
      },
      {
        year: 1940,
        emissionsPerCapita: 2.0823512,
      },
      {
        year: 1941,
        emissionsPerCapita: 2.0727978,
      },
      {
        year: 1942,
        emissionsPerCapita: 1.9546081,
      },
      {
        year: 1943,
        emissionsPerCapita: 1.9648433,
      },
      {
        year: 1944,
        emissionsPerCapita: 1.7846761,
      },
      {
        year: 1945,
        emissionsPerCapita: 0.9722865,
      },
      {
        year: 1946,
        emissionsPerCapita: 0.6595026,
      },
      {
        year: 1947,
        emissionsPerCapita: 0.8642439,
      },
      {
        year: 1948,
        emissionsPerCapita: 1.0720428,
      },
      {
        year: 1949,
        emissionsPerCapita: 1.1819394,
      },
      {
        year: 1950,
        emissionsPerCapita: 1.1862228,
      },
      {
        year: 1951,
        emissionsPerCapita: 1.4053243,
      },
      {
        year: 1952,
        emissionsPerCapita: 1.463261,
      },
      {
        year: 1953,
        emissionsPerCapita: 1.6153115,
      },
      {
        year: 1954,
        emissionsPerCapita: 1.5609264,
      },
      {
        year: 1955,
        emissionsPerCapita: 1.5367649,
      },
      {
        year: 1956,
        emissionsPerCapita: 1.7229395,
      },
      {
        year: 1957,
        emissionsPerCapita: 2.0007293,
      },
      {
        year: 1958,
        emissionsPerCapita: 1.9127765,
      },
      {
        year: 1959,
        emissionsPerCapita: 2.0175116,
      },
      {
        year: 1960,
        emissionsPerCapita: 2.4152505,
      },
      {
        year: 1961,
        emissionsPerCapita: 2.9123466,
      },
      {
        year: 1962,
        emissionsPerCapita: 2.9903045,
      },
      {
        year: 1963,
        emissionsPerCapita: 3.2868834,
      },
      {
        year: 1964,
        emissionsPerCapita: 3.5974417,
      },
      {
        year: 1965,
        emissionsPerCapita: 3.8345695,
      },
      {
        year: 1966,
        emissionsPerCapita: 4.1200213,
      },
      {
        year: 1967,
        emissionsPerCapita: 4.7580194,
      },
      {
        year: 1968,
        emissionsPerCapita: 5.396918,
      },
      {
        year: 1969,
        emissionsPerCapita: 6.199048,
      },
      {
        year: 1970,
        emissionsPerCapita: 7.2132244,
      },
      {
        year: 1971,
        emissionsPerCapita: 7.4073963,
      },
      {
        year: 1972,
        emissionsPerCapita: 7.8822284,
      },
      {
        year: 1973,
        emissionsPerCapita: 8.265285,
      },
      {
        year: 1974,
        emissionsPerCapita: 8.162709,
      },
      {
        year: 1975,
        emissionsPerCapita: 7.675496,
      },
      {
        year: 1976,
        emissionsPerCapita: 7.943522,
      },
      {
        year: 1977,
        emissionsPerCapita: 8.094621,
      },
      {
        year: 1978,
        emissionsPerCapita: 7.7636647,
      },
      {
        year: 1979,
        emissionsPerCapita: 8.144295,
      },
      {
        year: 1980,
        emissionsPerCapita: 8.014067,
      },
      {
        year: 1981,
        emissionsPerCapita: 7.818616,
      },
      {
        year: 1982,
        emissionsPerCapita: 7.538247,
      },
      {
        year: 1983,
        emissionsPerCapita: 7.373303,
      },
      {
        year: 1984,
        emissionsPerCapita: 7.8127036,
      },
      {
        year: 1985,
        emissionsPerCapita: 7.574667,
      },
      {
        year: 1986,
        emissionsPerCapita: 7.531289,
      },
      {
        year: 1987,
        emissionsPerCapita: 7.3983235,
      },
      {
        year: 1988,
        emissionsPerCapita: 8.039859,
      },
      {
        year: 1989,
        emissionsPerCapita: 8.306624,
      },
      {
        year: 1990,
        emissionsPerCapita: 9.379217,
      },
      {
        year: 1991,
        emissionsPerCapita: 9.43655,
      },
      {
        year: 1992,
        emissionsPerCapita: 9.477865,
      },
      {
        year: 1993,
        emissionsPerCapita: 9.387158,
      },
      {
        year: 1994,
        emissionsPerCapita: 9.792672,
      },
      {
        year: 1995,
        emissionsPerCapita: 9.860497,
      },
      {
        year: 1996,
        emissionsPerCapita: 9.936032,
      },
      {
        year: 1997,
        emissionsPerCapita: 9.855353,
      },
      {
        year: 1998,
        emissionsPerCapita: 9.518783,
      },
      {
        year: 1999,
        emissionsPerCapita: 9.7884865,
      },
      {
        year: 2000,
        emissionsPerCapita: 9.950525,
      },
      {
        year: 2001,
        emissionsPerCapita: 9.817633,
      },
      {
        year: 2002,
        emissionsPerCapita: 10.032543,
      },
      {
        year: 2003,
        emissionsPerCapita: 10.084455,
      },
      {
        year: 2004,
        emissionsPerCapita: 10.037062,
      },
      {
        year: 2005,
        emissionsPerCapita: 10.087269,
      },
      {
        year: 2006,
        emissionsPerCapita: 9.900958,
      },
      {
        year: 2007,
        emissionsPerCapita: 10.172689,
      },
      {
        year: 2008,
        emissionsPerCapita: 9.614812,
      },
      {
        year: 2009,
        emissionsPerCapita: 9.075358,
      },
      {
        year: 2010,
        emissionsPerCapita: 9.476892,
      },
      {
        year: 2011,
        emissionsPerCapita: 9.873785,
      },
      {
        year: 2012,
        emissionsPerCapita: 10.208827,
      },
      {
        year: 2013,
        emissionsPerCapita: 10.297997,
      },
      {
        year: 2014,
        emissionsPerCapita: 9.913243,
      },
      {
        year: 2015,
        emissionsPerCapita: 9.610615,
      },
      {
        year: 2016,
        emissionsPerCapita: 9.461973,
      },
      {
        year: 2017,
        emissionsPerCapita: 9.345512,
      },
      {
        year: 2018,
        emissionsPerCapita: 9.0020485,
      },
      {
        year: 2019,
        emissionsPerCapita: 8.725202,
      },
      {
        year: 2020,
        emissionsPerCapita: 8.237894,
      },
      {
        year: 2021,
        emissionsPerCapita: 8.449323,
      },
      {
        year: 2022,
        emissionsPerCapita: 8.261654,
      },
      {
        year: 2023,
        emissionsPerCapita: 7.950287,
      },
    ],
  },
  {
    country: 'United Kingdom',
    data: [
      {
        year: 1800,
        emissionsPerCapita: 2.9153564,
      },
      {
        year: 1801,
        emissionsPerCapita: 2.8286498,
      },
      {
        year: 1802,
        emissionsPerCapita: 2.7656965,
      },
      {
        year: 1803,
        emissionsPerCapita: 2.5437405,
      },
      {
        year: 1804,
        emissionsPerCapita: 2.4763212,
      },
      {
        year: 1805,
        emissionsPerCapita: 2.5825114,
      },
      {
        year: 1806,
        emissionsPerCapita: 2.695625,
      },
      {
        year: 1807,
        emissionsPerCapita: 2.811327,
      },
      {
        year: 1808,
        emissionsPerCapita: 2.8766963,
      },
      {
        year: 1809,
        emissionsPerCapita: 2.915259,
      },
      {
        year: 1810,
        emissionsPerCapita: 2.8722124,
      },
      {
        year: 1811,
        emissionsPerCapita: 2.8188872,
      },
      {
        year: 1812,
        emissionsPerCapita: 2.7279038,
      },
      {
        year: 1813,
        emissionsPerCapita: 2.6192143,
      },
      {
        year: 1814,
        emissionsPerCapita: 2.5276635,
      },
      {
        year: 1815,
        emissionsPerCapita: 2.4391406,
      },
      {
        year: 1816,
        emissionsPerCapita: 2.3177464,
      },
      {
        year: 1817,
        emissionsPerCapita: 2.3279696,
      },
      {
        year: 1818,
        emissionsPerCapita: 2.303634,
      },
      {
        year: 1819,
        emissionsPerCapita: 2.1739373,
      },
      {
        year: 1820,
        emissionsPerCapita: 2.0557053,
      },
      {
        year: 1821,
        emissionsPerCapita: 2.0387487,
      },
      {
        year: 1822,
        emissionsPerCapita: 2.0682518,
      },
      {
        year: 1823,
        emissionsPerCapita: 2.1145442,
      },
      {
        year: 1824,
        emissionsPerCapita: 2.1529691,
      },
      {
        year: 1825,
        emissionsPerCapita: 2.1886015,
      },
      {
        year: 1826,
        emissionsPerCapita: 2.1842163,
      },
      {
        year: 1827,
        emissionsPerCapita: 2.2401965,
      },
      {
        year: 1828,
        emissionsPerCapita: 2.2364638,
      },
      {
        year: 1829,
        emissionsPerCapita: 2.234891,
      },
      {
        year: 1830,
        emissionsPerCapita: 2.8095102,
      },
      {
        year: 1831,
        emissionsPerCapita: 2.6452432,
      },
      {
        year: 1832,
        emissionsPerCapita: 2.5387402,
      },
      {
        year: 1833,
        emissionsPerCapita: 2.4873807,
      },
      {
        year: 1834,
        emissionsPerCapita: 2.6161683,
      },
      {
        year: 1835,
        emissionsPerCapita: 2.8411562,
      },
      {
        year: 1836,
        emissionsPerCapita: 3.0594063,
      },
      {
        year: 1837,
        emissionsPerCapita: 2.9013233,
      },
      {
        year: 1838,
        emissionsPerCapita: 2.8080924,
      },
      {
        year: 1839,
        emissionsPerCapita: 2.8675888,
      },
      {
        year: 1840,
        emissionsPerCapita: 3.0363529,
      },
      {
        year: 1841,
        emissionsPerCapita: 3.0412488,
      },
      {
        year: 1842,
        emissionsPerCapita: 3.1750915,
      },
      {
        year: 1843,
        emissionsPerCapita: 3.2955952,
      },
      {
        year: 1844,
        emissionsPerCapita: 3.490339,
      },
      {
        year: 1845,
        emissionsPerCapita: 3.7006795,
      },
      {
        year: 1846,
        emissionsPerCapita: 3.5360403,
      },
      {
        year: 1847,
        emissionsPerCapita: 3.7643142,
      },
      {
        year: 1848,
        emissionsPerCapita: 4.0223227,
      },
      {
        year: 1849,
        emissionsPerCapita: 4.3204474,
      },
      {
        year: 1850,
        emissionsPerCapita: 4.489172,
      },
      {
        year: 1851,
        emissionsPerCapita: 4.252994,
      },
      {
        year: 1852,
        emissionsPerCapita: 4.2159934,
      },
      {
        year: 1853,
        emissionsPerCapita: 4.167399,
      },
      {
        year: 1854,
        emissionsPerCapita: 4.9915624,
      },
      {
        year: 1855,
        emissionsPerCapita: 4.6457763,
      },
      {
        year: 1856,
        emissionsPerCapita: 4.969304,
      },
      {
        year: 1857,
        emissionsPerCapita: 4.8508296,
      },
      {
        year: 1858,
        emissionsPerCapita: 4.7254786,
      },
      {
        year: 1859,
        emissionsPerCapita: 5.21251,
      },
      {
        year: 1860,
        emissionsPerCapita: 5.8072352,
      },
      {
        year: 1861,
        emissionsPerCapita: 6.007872,
      },
      {
        year: 1862,
        emissionsPerCapita: 5.7708826,
      },
      {
        year: 1863,
        emissionsPerCapita: 6.086277,
      },
      {
        year: 1864,
        emissionsPerCapita: 6.4942226,
      },
      {
        year: 1865,
        emissionsPerCapita: 6.8250237,
      },
      {
        year: 1866,
        emissionsPerCapita: 6.974182,
      },
      {
        year: 1867,
        emissionsPerCapita: 7.1007743,
      },
      {
        year: 1868,
        emissionsPerCapita: 6.907395,
      },
      {
        year: 1869,
        emissionsPerCapita: 7.185026,
      },
      {
        year: 1870,
        emissionsPerCapita: 7.273863,
      },
      {
        year: 1871,
        emissionsPerCapita: 7.6345577,
      },
      {
        year: 1872,
        emissionsPerCapita: 7.967353,
      },
      {
        year: 1873,
        emissionsPerCapita: 8.189286,
      },
      {
        year: 1874,
        emissionsPerCapita: 7.8809423,
      },
      {
        year: 1875,
        emissionsPerCapita: 8.238478,
      },
      {
        year: 1876,
        emissionsPerCapita: 8.144492,
      },
      {
        year: 1877,
        emissionsPerCapita: 8.210754,
      },
      {
        year: 1878,
        emissionsPerCapita: 7.9860015,
      },
      {
        year: 1879,
        emissionsPerCapita: 7.9602866,
      },
      {
        year: 1880,
        emissionsPerCapita: 8.59724,
      },
      {
        year: 1881,
        emissionsPerCapita: 8.958958,
      },
      {
        year: 1882,
        emissionsPerCapita: 8.960591,
      },
      {
        year: 1883,
        emissionsPerCapita: 9.250244,
      },
      {
        year: 1884,
        emissionsPerCapita: 8.935579,
      },
      {
        year: 1885,
        emissionsPerCapita: 8.759362,
      },
      {
        year: 1886,
        emissionsPerCapita: 8.611424,
      },
      {
        year: 1887,
        emissionsPerCapita: 8.762649,
      },
      {
        year: 1888,
        emissionsPerCapita: 9.038788,
      },
      {
        year: 1889,
        emissionsPerCapita: 9.284015,
      },
      {
        year: 1890,
        emissionsPerCapita: 9.419005,
      },
      {
        year: 1891,
        emissionsPerCapita: 9.533845,
      },
      {
        year: 1892,
        emissionsPerCapita: 9.25243,
      },
      {
        year: 1893,
        emissionsPerCapita: 8.21112,
      },
      {
        year: 1894,
        emissionsPerCapita: 9.315627,
      },
      {
        year: 1895,
        emissionsPerCapita: 9.317141,
      },
      {
        year: 1896,
        emissionsPerCapita: 9.494172,
      },
      {
        year: 1897,
        emissionsPerCapita: 9.656031,
      },
      {
        year: 1898,
        emissionsPerCapita: 9.589032,
      },
      {
        year: 1899,
        emissionsPerCapita: 10.180933,
      },
      {
        year: 1900,
        emissionsPerCapita: 10.215249,
      },
      {
        year: 1901,
        emissionsPerCapita: 9.90617,
      },
      {
        year: 1902,
        emissionsPerCapita: 10.200084,
      },
      {
        year: 1903,
        emissionsPerCapita: 10.190824,
      },
      {
        year: 1904,
        emissionsPerCapita: 10.149534,
      },
      {
        year: 1905,
        emissionsPerCapita: 10.193703,
      },
      {
        year: 1906,
        emissionsPerCapita: 10.467203,
      },
      {
        year: 1907,
        emissionsPerCapita: 10.839091,
      },
      {
        year: 1908,
        emissionsPerCapita: 10.481716,
      },
      {
        year: 1909,
        emissionsPerCapita: 10.493224,
      },
      {
        year: 1910,
        emissionsPerCapita: 10.50297,
      },
      {
        year: 1911,
        emissionsPerCapita: 10.698935,
      },
      {
        year: 1912,
        emissionsPerCapita: 10.082025,
      },
      {
        year: 1913,
        emissionsPerCapita: 10.975125,
      },
      {
        year: 1914,
        emissionsPerCapita: 10.597855,
      },
      {
        year: 1915,
        emissionsPerCapita: 10.691779,
      },
      {
        year: 1916,
        emissionsPerCapita: 11.030396,
      },
      {
        year: 1917,
        emissionsPerCapita: 10.85709,
      },
      {
        year: 1918,
        emissionsPerCapita: 10.07166,
      },
      {
        year: 1919,
        emissionsPerCapita: 9.811919,
      },
      {
        year: 1920,
        emissionsPerCapita: 10.318364,
      },
      {
        year: 1921,
        emissionsPerCapita: 7.1308627,
      },
      {
        year: 1922,
        emissionsPerCapita: 9.444493,
      },
      {
        year: 1923,
        emissionsPerCapita: 10.033588,
      },
      {
        year: 1924,
        emissionsPerCapita: 10.532615,
      },
      {
        year: 1925,
        emissionsPerCapita: 9.965467,
      },
      {
        year: 1926,
        emissionsPerCapita: 5.655135,
      },
      {
        year: 1927,
        emissionsPerCapita: 10.448244,
      },
      {
        year: 1928,
        emissionsPerCapita: 9.884894,
      },
      {
        year: 1929,
        emissionsPerCapita: 10.408271,
      },
      {
        year: 1930,
        emissionsPerCapita: 10.021771,
      },
      {
        year: 1931,
        emissionsPerCapita: 9.352548,
      },
      {
        year: 1932,
        emissionsPerCapita: 8.96392,
      },
      {
        year: 1933,
        emissionsPerCapita: 8.869657,
      },
      {
        year: 1934,
        emissionsPerCapita: 9.531863,
      },
      {
        year: 1935,
        emissionsPerCapita: 9.610427,
      },
      {
        year: 1936,
        emissionsPerCapita: 10.09914,
      },
      {
        year: 1937,
        emissionsPerCapita: 10.368437,
      },
      {
        year: 1938,
        emissionsPerCapita: 9.919003,
      },
      {
        year: 1939,
        emissionsPerCapita: 9.903666,
      },
      {
        year: 1940,
        emissionsPerCapita: 10.3948345,
      },
      {
        year: 1941,
        emissionsPerCapita: 10.344048,
      },
      {
        year: 1942,
        emissionsPerCapita: 10.161616,
      },
      {
        year: 1943,
        emissionsPerCapita: 10.065381,
      },
      {
        year: 1944,
        emissionsPerCapita: 10.015328,
      },
      {
        year: 1945,
        emissionsPerCapita: 9.231059,
      },
      {
        year: 1946,
        emissionsPerCapita: 9.4255495,
      },
      {
        year: 1947,
        emissionsPerCapita: 9.810102,
      },
      {
        year: 1948,
        emissionsPerCapita: 10.14036,
      },
      {
        year: 1949,
        emissionsPerCapita: 10.181252,
      },
      {
        year: 1950,
        emissionsPerCapita: 9.991659,
      },
      {
        year: 1951,
        emissionsPerCapita: 10.829935,
      },
      {
        year: 1952,
        emissionsPerCapita: 10.470209,
      },
      {
        year: 1953,
        emissionsPerCapita: 10.649365,
      },
      {
        year: 1954,
        emissionsPerCapita: 10.852213,
      },
      {
        year: 1955,
        emissionsPerCapita: 11.273707,
      },
      {
        year: 1956,
        emissionsPerCapita: 11.17351,
      },
      {
        year: 1957,
        emissionsPerCapita: 11.048381,
      },
      {
        year: 1958,
        emissionsPerCapita: 10.711639,
      },
      {
        year: 1959,
        emissionsPerCapita: 10.466076,
      },
      {
        year: 1960,
        emissionsPerCapita: 11.116029,
      },
      {
        year: 1961,
        emissionsPerCapita: 11.130099,
      },
      {
        year: 1962,
        emissionsPerCapita: 11.130091,
      },
      {
        year: 1963,
        emissionsPerCapita: 11.246088,
      },
      {
        year: 1964,
        emissionsPerCapita: 11.254874,
      },
      {
        year: 1965,
        emissionsPerCapita: 11.444496,
      },
      {
        year: 1966,
        emissionsPerCapita: 11.304241,
      },
      {
        year: 1967,
        emissionsPerCapita: 10.769831,
      },
      {
        year: 1968,
        emissionsPerCapita: 10.97902,
      },
      {
        year: 1969,
        emissionsPerCapita: 11.33115,
      },
      {
        year: 1970,
        emissionsPerCapita: 11.723551,
      },
      {
        year: 1971,
        emissionsPerCapita: 11.815778,
      },
      {
        year: 1972,
        emissionsPerCapita: 11.555548,
      },
      {
        year: 1973,
        emissionsPerCapita: 11.738589,
      },
      {
        year: 1974,
        emissionsPerCapita: 10.977119,
      },
      {
        year: 1975,
        emissionsPerCapita: 10.730088,
      },
      {
        year: 1976,
        emissionsPerCapita: 10.649713,
      },
      {
        year: 1977,
        emissionsPerCapita: 10.758394,
      },
      {
        year: 1978,
        emissionsPerCapita: 10.7647085,
      },
      {
        year: 1979,
        emissionsPerCapita: 11.464372,
      },
      {
        year: 1980,
        emissionsPerCapita: 10.288091,
      },
      {
        year: 1981,
        emissionsPerCapita: 9.955751,
      },
      {
        year: 1982,
        emissionsPerCapita: 9.739092,
      },
      {
        year: 1983,
        emissionsPerCapita: 9.683387,
      },
      {
        year: 1984,
        emissionsPerCapita: 9.372823,
      },
      {
        year: 1985,
        emissionsPerCapita: 9.886288,
      },
      {
        year: 1986,
        emissionsPerCapita: 10.018232,
      },
      {
        year: 1987,
        emissionsPerCapita: 10.049351,
      },
      {
        year: 1988,
        emissionsPerCapita: 10.000498,
      },
      {
        year: 1989,
        emissionsPerCapita: 10.170591,
      },
      {
        year: 1990,
        emissionsPerCapita: 10.4927225,
      },
      {
        year: 1991,
        emissionsPerCapita: 10.588317,
      },
      {
        year: 1992,
        emissionsPerCapita: 10.288521,
      },
      {
        year: 1993,
        emissionsPerCapita: 10.017321,
      },
      {
        year: 1994,
        emissionsPerCapita: 9.896297,
      },
      {
        year: 1995,
        emissionsPerCapita: 9.735405,
      },
      {
        year: 1996,
        emissionsPerCapita: 10.0647545,
      },
      {
        year: 1997,
        emissionsPerCapita: 9.62765,
      },
      {
        year: 1998,
        emissionsPerCapita: 9.697672,
      },
      {
        year: 1999,
        emissionsPerCapita: 9.545588,
      },
      {
        year: 2000,
        emissionsPerCapita: 9.635275,
      },
      {
        year: 2001,
        emissionsPerCapita: 9.748509,
      },
      {
        year: 2002,
        emissionsPerCapita: 9.40991,
      },
      {
        year: 2003,
        emissionsPerCapita: 9.555585,
      },
      {
        year: 2004,
        emissionsPerCapita: 9.530167,
      },
      {
        year: 2005,
        emissionsPerCapita: 9.412128,
      },
      {
        year: 2006,
        emissionsPerCapita: 9.301154,
      },
      {
        year: 2007,
        emissionsPerCapita: 9.09334,
      },
      {
        year: 2008,
        emissionsPerCapita: 8.785364,
      },
      {
        year: 2009,
        emissionsPerCapita: 7.9049363,
      },
      {
        year: 2010,
        emissionsPerCapita: 8.124634,
      },
      {
        year: 2011,
        emissionsPerCapita: 7.3959785,
      },
      {
        year: 2012,
        emissionsPerCapita: 7.62153,
      },
      {
        year: 2013,
        emissionsPerCapita: 7.4175463,
      },
      {
        year: 2014,
        emissionsPerCapita: 6.764833,
      },
      {
        year: 2015,
        emissionsPerCapita: 6.461413,
      },
      {
        year: 2016,
        emissionsPerCapita: 6.061766,
      },
      {
        year: 2017,
        emissionsPerCapita: 5.8378453,
      },
      {
        year: 2018,
        emissionsPerCapita: 5.6886244,
      },
      {
        year: 2019,
        emissionsPerCapita: 5.4350777,
      },
      {
        year: 2020,
        emissionsPerCapita: 4.84416,
      },
      {
        year: 2021,
        emissionsPerCapita: 5.091122,
      },
      {
        year: 2022,
        emissionsPerCapita: 4.6030793,
      },
      {
        year: 2023,
        emissionsPerCapita: 4.4428244,
      },
    ],
  },
  {
    country: 'United States',
    data: [
      {
        year: 1800,
        emissionsPerCapita: 0.042136,
      },
      {
        year: 1801,
        emissionsPerCapita: 0.043749023,
      },
      {
        year: 1802,
        emissionsPerCapita: 0.046463702,
      },
      {
        year: 1803,
        emissionsPerCapita: 0.04675338,
      },
      {
        year: 1804,
        emissionsPerCapita: 0.051547863,
      },
      {
        year: 1805,
        emissionsPerCapita: 0.05170035,
      },
      {
        year: 1806,
        emissionsPerCapita: 0.049647022,
      },
      {
        year: 1807,
        emissionsPerCapita: 0.055148073,
      },
      {
        year: 1808,
        emissionsPerCapita: 0.056223534,
      },
      {
        year: 1809,
        emissionsPerCapita: 0.05672419,
      },
      {
        year: 1810,
        emissionsPerCapita: 0.057195846,
      },
      {
        year: 1811,
        emissionsPerCapita: 0.05957973,
      },
      {
        year: 1812,
        emissionsPerCapita: 0.0625836,
      },
      {
        year: 1813,
        emissionsPerCapita: 0.06519789,
      },
      {
        year: 1814,
        emissionsPerCapita: 0.06802918,
      },
      {
        year: 1815,
        emissionsPerCapita: 0.070616506,
      },
      {
        year: 1816,
        emissionsPerCapita: 0.07547438,
      },
      {
        year: 1817,
        emissionsPerCapita: 0.079147205,
      },
      {
        year: 1818,
        emissionsPerCapita: 0.08329477,
      },
      {
        year: 1819,
        emissionsPerCapita: 0.0788342,
      },
      {
        year: 1820,
        emissionsPerCapita: 0.07940742,
      },
      {
        year: 1821,
        emissionsPerCapita: 0.08064995,
      },
      {
        year: 1822,
        emissionsPerCapita: 0.08181233,
      },
      {
        year: 1823,
        emissionsPerCapita: 0.08290245,
      },
      {
        year: 1824,
        emissionsPerCapita: 0.09074809,
      },
      {
        year: 1825,
        emissionsPerCapita: 0.09872902,
      },
      {
        year: 1826,
        emissionsPerCapita: 0.111148365,
      },
      {
        year: 1827,
        emissionsPerCapita: 0.11888613,
      },
      {
        year: 1828,
        emissionsPerCapita: 0.12727666,
      },
      {
        year: 1829,
        emissionsPerCapita: 0.13939415,
      },
      {
        year: 1830,
        emissionsPerCapita: 0.15767905,
      },
      {
        year: 1831,
        emissionsPerCapita: 0.16626401,
      },
      {
        year: 1832,
        emissionsPerCapita: 0.21589011,
      },
      {
        year: 1833,
        emissionsPerCapita: 0.2451494,
      },
      {
        year: 1834,
        emissionsPerCapita: 0.22857675,
      },
      {
        year: 1835,
        emissionsPerCapita: 0.28379282,
      },
      {
        year: 1836,
        emissionsPerCapita: 0.30255765,
      },
      {
        year: 1837,
        emissionsPerCapita: 0.33012334,
      },
      {
        year: 1838,
        emissionsPerCapita: 0.3045117,
      },
      {
        year: 1839,
        emissionsPerCapita: 0.3247494,
      },
      {
        year: 1840,
        emissionsPerCapita: 0.3359056,
      },
      {
        year: 1841,
        emissionsPerCapita: 0.34518078,
      },
      {
        year: 1842,
        emissionsPerCapita: 0.37302932,
      },
      {
        year: 1843,
        emissionsPerCapita: 0.40623948,
      },
      {
        year: 1844,
        emissionsPerCapita: 0.47249264,
      },
      {
        year: 1845,
        emissionsPerCapita: 0.5519618,
      },
      {
        year: 1846,
        emissionsPerCapita: 0.6075555,
      },
      {
        year: 1847,
        emissionsPerCapita: 0.6989572,
      },
      {
        year: 1848,
        emissionsPerCapita: 0.7553745,
      },
      {
        year: 1849,
        emissionsPerCapita: 0.79568434,
      },
      {
        year: 1850,
        emissionsPerCapita: 0.83870095,
      },
      {
        year: 1851,
        emissionsPerCapita: 1.0133029,
      },
      {
        year: 1852,
        emissionsPerCapita: 1.0699053,
      },
      {
        year: 1853,
        emissionsPerCapita: 1.1693825,
      },
      {
        year: 1854,
        emissionsPerCapita: 1.2480785,
      },
      {
        year: 1855,
        emissionsPerCapita: 1.394424,
      },
      {
        year: 1856,
        emissionsPerCapita: 1.4202958,
      },
      {
        year: 1857,
        emissionsPerCapita: 1.4139436,
      },
      {
        year: 1858,
        emissionsPerCapita: 1.3925428,
      },
      {
        year: 1859,
        emissionsPerCapita: 1.4731518,
      },
      {
        year: 1860,
        emissionsPerCapita: 1.5011375,
      },
      {
        year: 1861,
        emissionsPerCapita: 1.4090402,
      },
      {
        year: 1862,
        emissionsPerCapita: 1.4285618,
      },
      {
        year: 1863,
        emissionsPerCapita: 1.6126716,
      },
      {
        year: 1864,
        emissionsPerCapita: 1.6866376,
      },
      {
        year: 1865,
        emissionsPerCapita: 1.6529324,
      },
      {
        year: 1866,
        emissionsPerCapita: 1.6266301,
      },
      {
        year: 1867,
        emissionsPerCapita: 1.9555545,
      },
      {
        year: 1868,
        emissionsPerCapita: 2.1599026,
      },
      {
        year: 1869,
        emissionsPerCapita: 2.401964,
      },
      {
        year: 1870,
        emissionsPerCapita: 2.4715502,
      },
      {
        year: 1871,
        emissionsPerCapita: 2.524375,
      },
      {
        year: 1872,
        emissionsPerCapita: 3.0265274,
      },
      {
        year: 1873,
        emissionsPerCapita: 3.2694678,
      },
      {
        year: 1874,
        emissionsPerCapita: 3.0782638,
      },
      {
        year: 1875,
        emissionsPerCapita: 3.0432105,
      },
      {
        year: 1876,
        emissionsPerCapita: 2.912211,
      },
      {
        year: 1877,
        emissionsPerCapita: 3.1561265,
      },
      {
        year: 1878,
        emissionsPerCapita: 3.0182126,
      },
      {
        year: 1879,
        emissionsPerCapita: 3.5994267,
      },
      {
        year: 1880,
        emissionsPerCapita: 3.986088,
      },
      {
        year: 1881,
        emissionsPerCapita: 4.1242743,
      },
      {
        year: 1882,
        emissionsPerCapita: 4.517172,
      },
      {
        year: 1883,
        emissionsPerCapita: 4.764769,
      },
      {
        year: 1884,
        emissionsPerCapita: 4.911519,
      },
      {
        year: 1885,
        emissionsPerCapita: 4.885538,
      },
      {
        year: 1886,
        emissionsPerCapita: 5.0466657,
      },
      {
        year: 1887,
        emissionsPerCapita: 5.2776074,
      },
      {
        year: 1888,
        emissionsPerCapita: 6.2780514,
      },
      {
        year: 1889,
        emissionsPerCapita: 5.5148797,
      },
      {
        year: 1890,
        emissionsPerCapita: 6.468085,
      },
      {
        year: 1891,
        emissionsPerCapita: 6.7461,
      },
      {
        year: 1892,
        emissionsPerCapita: 6.9749255,
      },
      {
        year: 1893,
        emissionsPerCapita: 6.9034314,
      },
      {
        year: 1894,
        emissionsPerCapita: 6.3442984,
      },
      {
        year: 1895,
        emissionsPerCapita: 7.033352,
      },
      {
        year: 1896,
        emissionsPerCapita: 6.918819,
      },
      {
        year: 1897,
        emissionsPerCapita: 7.067037,
      },
      {
        year: 1898,
        emissionsPerCapita: 7.563029,
      },
      {
        year: 1899,
        emissionsPerCapita: 8.516529,
      },
      {
        year: 1900,
        emissionsPerCapita: 8.856599,
      },
      {
        year: 1901,
        emissionsPerCapita: 9.463163,
      },
      {
        year: 1902,
        emissionsPerCapita: 9.83929,
      },
      {
        year: 1903,
        emissionsPerCapita: 11.294751,
      },
      {
        year: 1904,
        emissionsPerCapita: 10.9292755,
      },
      {
        year: 1905,
        emissionsPerCapita: 11.993248,
      },
      {
        year: 1906,
        emissionsPerCapita: 12.352037,
      },
      {
        year: 1907,
        emissionsPerCapita: 14.090626,
      },
      {
        year: 1908,
        emissionsPerCapita: 12.090888,
      },
      {
        year: 1909,
        emissionsPerCapita: 13.149926,
      },
      {
        year: 1910,
        emissionsPerCapita: 14.104886,
      },
      {
        year: 1911,
        emissionsPerCapita: 13.743023,
      },
      {
        year: 1912,
        emissionsPerCapita: 14.455241,
      },
      {
        year: 1913,
        emissionsPerCapita: 15.308516,
      },
      {
        year: 1914,
        emissionsPerCapita: 13.795953,
      },
      {
        year: 1915,
        emissionsPerCapita: 14.121179,
      },
      {
        year: 1916,
        emissionsPerCapita: 15.469336,
      },
      {
        year: 1917,
        emissionsPerCapita: 16.785204,
      },
      {
        year: 1918,
        emissionsPerCapita: 17.309261,
      },
      {
        year: 1919,
        emissionsPerCapita: 14.442194,
      },
      {
        year: 1920,
        emissionsPerCapita: 16.730282,
      },
      {
        year: 1921,
        emissionsPerCapita: 13.506341,
      },
      {
        year: 1922,
        emissionsPerCapita: 13.424879,
      },
      {
        year: 1923,
        emissionsPerCapita: 17.478342,
      },
      {
        year: 1924,
        emissionsPerCapita: 15.423299,
      },
      {
        year: 1925,
        emissionsPerCapita: 15.735723,
      },
      {
        year: 1926,
        emissionsPerCapita: 16.812035,
      },
      {
        year: 1927,
        emissionsPerCapita: 16.192951,
      },
      {
        year: 1928,
        emissionsPerCapita: 15.685378,
      },
      {
        year: 1929,
        emissionsPerCapita: 16.603048,
      },
      {
        year: 1930,
        emissionsPerCapita: 14.58597,
      },
      {
        year: 1931,
        emissionsPerCapita: 12.289558,
      },
      {
        year: 1932,
        emissionsPerCapita: 10.321664,
      },
      {
        year: 1933,
        emissionsPerCapita: 10.991698,
      },
      {
        year: 1934,
        emissionsPerCapita: 11.621933,
      },
      {
        year: 1935,
        emissionsPerCapita: 11.991493,
      },
      {
        year: 1936,
        emissionsPerCapita: 13.672,
      },
      {
        year: 1937,
        emissionsPerCapita: 14.204154,
      },
      {
        year: 1938,
        emissionsPerCapita: 11.926593,
      },
      {
        year: 1939,
        emissionsPerCapita: 13.037762,
      },
      {
        year: 1940,
        emissionsPerCapita: 14.487894,
      },
      {
        year: 1941,
        emissionsPerCapita: 15.615902,
      },
      {
        year: 1942,
        emissionsPerCapita: 16.58958,
      },
      {
        year: 1943,
        emissionsPerCapita: 16.911407,
      },
      {
        year: 1944,
        emissionsPerCapita: 17.948437,
      },
      {
        year: 1945,
        emissionsPerCapita: 17.084375,
      },
      {
        year: 1946,
        emissionsPerCapita: 16.121332,
      },
      {
        year: 1947,
        emissionsPerCapita: 17.508738,
      },
      {
        year: 1948,
        emissionsPerCapita: 17.940481,
      },
      {
        year: 1949,
        emissionsPerCapita: 14.822593,
      },
      {
        year: 1950,
        emissionsPerCapita: 16.48146,
      },
      {
        year: 1951,
        emissionsPerCapita: 16.734978,
      },
      {
        year: 1952,
        emissionsPerCapita: 16.066198,
      },
      {
        year: 1953,
        emissionsPerCapita: 16.212685,
      },
      {
        year: 1954,
        emissionsPerCapita: 15.213387,
      },
      {
        year: 1955,
        emissionsPerCapita: 16.417036,
      },
      {
        year: 1956,
        emissionsPerCapita: 16.940592,
      },
      {
        year: 1957,
        emissionsPerCapita: 16.535189,
      },
      {
        year: 1958,
        emissionsPerCapita: 15.768463,
      },
      {
        year: 1959,
        emissionsPerCapita: 15.986401,
      },
      {
        year: 1960,
        emissionsPerCapita: 16.07168,
      },
      {
        year: 1961,
        emissionsPerCapita: 15.733178,
      },
      {
        year: 1962,
        emissionsPerCapita: 16.033813,
      },
      {
        year: 1963,
        emissionsPerCapita: 16.470348,
      },
      {
        year: 1964,
        emissionsPerCapita: 16.929379,
      },
      {
        year: 1965,
        emissionsPerCapita: 17.37532,
      },
      {
        year: 1966,
        emissionsPerCapita: 18.013336,
      },
      {
        year: 1967,
        emissionsPerCapita: 18.462694,
      },
      {
        year: 1968,
        emissionsPerCapita: 18.91976,
      },
      {
        year: 1969,
        emissionsPerCapita: 19.65487,
      },
      {
        year: 1970,
        emissionsPerCapita: 20.884323,
      },
      {
        year: 1971,
        emissionsPerCapita: 20.745802,
      },
      {
        year: 1972,
        emissionsPerCapita: 21.485434,
      },
      {
        year: 1973,
        emissionsPerCapita: 22.257154,
      },
      {
        year: 1974,
        emissionsPerCapita: 21.289358,
      },
      {
        year: 1975,
        emissionsPerCapita: 20.437992,
      },
      {
        year: 1976,
        emissionsPerCapita: 21.468273,
      },
      {
        year: 1977,
        emissionsPerCapita: 21.902563,
      },
      {
        year: 1978,
        emissionsPerCapita: 21.924551,
      },
      {
        year: 1979,
        emissionsPerCapita: 22.010122,
      },
      {
        year: 1980,
        emissionsPerCapita: 20.92102,
      },
      {
        year: 1981,
        emissionsPerCapita: 20.183939,
      },
      {
        year: 1982,
        emissionsPerCapita: 18.959597,
      },
      {
        year: 1983,
        emissionsPerCapita: 18.69184,
      },
      {
        year: 1984,
        emissionsPerCapita: 19.47947,
      },
      {
        year: 1985,
        emissionsPerCapita: 19.251644,
      },
      {
        year: 1986,
        emissionsPerCapita: 19.11719,
      },
      {
        year: 1987,
        emissionsPerCapita: 19.605083,
      },
      {
        year: 1988,
        emissionsPerCapita: 20.334122,
      },
      {
        year: 1989,
        emissionsPerCapita: 20.474888,
      },
      {
        year: 1990,
        emissionsPerCapita: 20.211107,
      },
      {
        year: 1991,
        emissionsPerCapita: 19.740822,
      },
      {
        year: 1992,
        emissionsPerCapita: 19.931076,
      },
      {
        year: 1993,
        emissionsPerCapita: 20.07686,
      },
      {
        year: 1994,
        emissionsPerCapita: 20.206358,
      },
      {
        year: 1995,
        emissionsPerCapita: 20.227972,
      },
      {
        year: 1996,
        emissionsPerCapita: 20.722767,
      },
      {
        year: 1997,
        emissionsPerCapita: 20.800028,
      },
      {
        year: 1998,
        emissionsPerCapita: 20.763779,
      },
      {
        year: 1999,
        emissionsPerCapita: 20.81858,
      },
      {
        year: 2000,
        emissionsPerCapita: 21.351597,
      },
      {
        year: 2001,
        emissionsPerCapita: 20.781439,
      },
      {
        year: 2002,
        emissionsPerCapita: 20.712757,
      },
      {
        year: 2003,
        emissionsPerCapita: 20.731209,
      },
      {
        year: 2004,
        emissionsPerCapita: 20.877535,
      },
      {
        year: 2005,
        emissionsPerCapita: 20.736685,
      },
      {
        year: 2006,
        emissionsPerCapita: 20.26138,
      },
      {
        year: 2007,
        emissionsPerCapita: 20.308895,
      },
      {
        year: 2008,
        emissionsPerCapita: 19.395718,
      },
      {
        year: 2009,
        emissionsPerCapita: 17.79321,
      },
      {
        year: 2010,
        emissionsPerCapita: 18.259064,
      },
      {
        year: 2011,
        emissionsPerCapita: 17.656881,
      },
      {
        year: 2012,
        emissionsPerCapita: 16.852184,
      },
      {
        year: 2013,
        emissionsPerCapita: 17.119564,
      },
      {
        year: 2014,
        emissionsPerCapita: 17.110548,
      },
      {
        year: 2015,
        emissionsPerCapita: 16.485851,
      },
      {
        year: 2016,
        emissionsPerCapita: 15.957656,
      },
      {
        year: 2017,
        emissionsPerCapita: 15.689611,
      },
      {
        year: 2018,
        emissionsPerCapita: 16.050419,
      },
      {
        year: 2019,
        emissionsPerCapita: 15.578152,
      },
      {
        year: 2020,
        emissionsPerCapita: 13.889587,
      },
      {
        year: 2021,
        emissionsPerCapita: 14.793602,
      },
      {
        year: 2022,
        emissionsPerCapita: 14.870761,
      },
      {
        year: 2023,
        emissionsPerCapita: 14.299026,
      },
    ],
  },
];
