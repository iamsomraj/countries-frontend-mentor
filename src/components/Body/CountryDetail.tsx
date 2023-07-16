import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';

import { CountryContext, CountryItemType } from '../../context/CountryContext';
import Button from '../UI/Button';
import CountryInfo from '../UI/CountryInfo';

export default function CountryDetail() {
  const {
    state: { detailCountry: country },
    selectCountry,
  } = useContext(CountryContext);

  const onBack = () => {
    selectCountry({ country: null });
  };

  const onBorderCountryClick = (country: CountryItemType) => {
    selectCountry({ country });
  };

  return (
    <div className="flex flex-col gap-12 bg-light-mode-background px-4 py-6 transition-all duration-300 dark:bg-dark-mode-background lg:px-20 lg:py-12">
      <div className="flex justify-start">
        <Button withIcon text="Back" onClick={onBack} icon={ArrowLeftIcon} />
      </div>
      {country && (
        <CountryInfo country={country} onBorderCountryClick={onBorderCountryClick} />
      )}
    </div>
  );
}
