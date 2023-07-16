import { useContext } from 'react';

import { CountryContext } from '../../context/CountryContext';
import SearchInput from '../UI/SearchInput';
import SingleSelect from '../UI/SingleSelect';

export default function Filters() {
  const {
    state: { searchQuery, regionQuery, regions },
    onSearchQueryChange,
    onRegionChange,
  } = useContext(CountryContext);

  const onOptionChange = (region: string) => {
    onRegionChange(region);
  };

  return (
    <div className="flex flex-col items-center justify-between gap-y-8 lg:flex-row">
      <SearchInput
        value={searchQuery}
        onChange={onSearchQueryChange}
        placeholder="Search for a country..."
      />
      <SingleSelect
        placeholder="Filter by Region"
        options={regions}
        value={regionQuery}
        onOptionChange={onOptionChange}
      />
    </div>
  );
}
