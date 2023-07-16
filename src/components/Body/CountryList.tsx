import { useContext } from 'react';

import { CountryContext } from '../../context/CountryContext';
import CountryCard from '../UI/CountryCard';

const CountryList = () => {
  const {
    state: { countries },
  } = useContext(CountryContext);
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
      {countries.map((country, index) => (
        <CountryCard key={country.alpha2Code + index} country={country} />
      ))}
    </div>
  );
};
export default CountryList;
