import { CountryItemType, countryList } from '../../context/CountryContext';

type Props = {
  country: string;
  onClick: (country: CountryItemType) => void;
};

export default function BorderCountryCard({ country, onClick }: Props) {
  const countryDetail = countryList.find(
    (countryItem) => countryItem.alpha3Code === country,
  );

  if (!countryDetail) {
    return (
      <button
        key={country}
        className="rounded border border-light-mode-text/10 bg-dark-mode-text px-8 py-2 text-xs text-light-mode-text outline-none drop-shadow transition-all duration-300 dark:border-none dark:bg-dark-mode-elements dark:text-dark-mode-text"
      >
        {country}
      </button>
    );
  }

  return (
    <button
      key={countryDetail.alpha3Code}
      onClick={() => onClick(countryDetail)}
      className="rounded border border-light-mode-text/10 bg-dark-mode-text px-8 py-2 text-xs text-light-mode-text outline-none drop-shadow transition-all duration-300 dark:border-none dark:bg-dark-mode-elements dark:text-dark-mode-text"
    >
      {countryDetail.name}
    </button>
  );
}
