import { useContext } from 'react';

import { CountryContext } from '../../context/CountryContext';
import CountryDetail from './CountryDetail';
import CountryList from './CountryList';
import Filters from './Filters';

export default function BodyMain() {
  const {
    state: { detailCountry },
  } = useContext(CountryContext);

  const initialContent = (
    <div className="flex flex-col gap-6 bg-light-mode-background px-4 py-6 transition-all duration-300 dark:bg-dark-mode-background lg:px-20 lg:py-12">
      <Filters />
      <CountryList />
    </div>
  );

  if (!detailCountry) {
    return initialContent;
  }

  const countryDetailContent = <CountryDetail />;

  return countryDetailContent;
}
