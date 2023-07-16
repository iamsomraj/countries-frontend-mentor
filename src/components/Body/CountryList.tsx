import { useContext } from 'react';

import { CountryContext } from '../../context/CountryContext';
import CountryCard from '../UI/CountryCard';

const CountryList = () => {
  const {
    state: { countries, searchQuery, regionQuery },
  } = useContext(CountryContext);

  let filteredCountries = countries;

  if (searchQuery.length > 0) {
    filteredCountries = filteredCountries.filter((country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  if (regionQuery.length > 0) {
    filteredCountries = filteredCountries.filter(
      (country) => country.region.toLowerCase() === regionQuery.toLowerCase(),
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
      {filteredCountries.map((country, index) => (
        <CountryCard key={country.alpha2Code + index} country={country} />
      ))}
    </div>
  );
};
export default CountryList;
