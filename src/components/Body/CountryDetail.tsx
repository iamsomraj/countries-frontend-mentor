import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';

import { CountryContext } from '../../context/CountryContext';
import Button from '../UI/Button';

export default function CountryDetail() {
  const { selectCountry } = useContext(CountryContext);

  const onBack = () => {
    selectCountry({ country: null });
  };

  return (
    <div className="flex flex-col gap-6 bg-light-mode-background px-4 py-6 transition-all duration-300 dark:bg-dark-mode-background lg:px-20 lg:py-12">
      <div>
        <Button withIcon text="Back" onClick={onBack} icon={ArrowLeftIcon} />
      </div>
    </div>
  );
}
