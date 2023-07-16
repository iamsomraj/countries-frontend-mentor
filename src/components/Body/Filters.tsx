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
  return (
    <div className="flex flex-col items-center justify-between gap-y-8 lg:flex-row">
      <SearchInput
        value={searchQuery}
        onChange={onSearchQueryChange}
        placeholder="Search for a country..."
      />
      <SingleSelect options={regions} value={regionQuery} onChange={onRegionChange} />
    </div>
  );
}
