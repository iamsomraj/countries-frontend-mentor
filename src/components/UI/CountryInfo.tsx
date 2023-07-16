import { CountryItemType } from '../../context/CountryContext';
import BorderCountryCard from './BorderCountryCard';

type Props = {
  country: CountryItemType;
  onBorderCountryClick: (country: CountryItemType) => void;
};

export default function CountryInfo({ country, onBorderCountryClick }: Props) {
  const countryFlagImage = country?.flags?.svg || country?.flag || '';

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
      <div className="overflow-hidden shadow-sm">
        <img
          src={countryFlagImage}
          alt={country.name}
          className="aspect-video max-h-none w-full overflow-hidden object-cover text-sm text-light-mode-text transition-all duration-300 group-hover:scale-110 dark:text-dark-mode-text lg:max-h-[50vh] lg:w-auto"
        />
      </div>
      <article className="flex flex-col gap-12 px-4 pb-8 pt-6">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-extrabold text-light-mode-text transition-all duration-300 dark:text-dark-mode-text">
            {country.name}
          </h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2">
                <span className="text-sm font-semibold text-light-mode-text dark:text-dark-mode-text">
                  Native Name:
                </span>
                <span className="text-sm text-light-mode-text dark:text-dark-mode-text/70 ">
                  {country.nativeName}
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-sm font-semibold text-light-mode-text dark:text-dark-mode-text">
                  Population:
                </span>
                <span className="text-sm text-light-mode-text dark:text-dark-mode-text/70 ">
                  {country.population.toLocaleString()}
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-sm font-semibold text-light-mode-text dark:text-dark-mode-text">
                  Region:
                </span>
                <span className="text-sm text-light-mode-text dark:text-dark-mode-text/70 ">
                  {country.region}
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-sm font-semibold text-light-mode-text dark:text-dark-mode-text">
                  Sub Region:
                </span>
                <span className="text-sm text-light-mode-text dark:text-dark-mode-text/70 ">
                  {country.subregion}
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-sm font-semibold text-light-mode-text dark:text-dark-mode-text">
                  Capital:
                </span>
                <span className="text-sm text-light-mode-text dark:text-dark-mode-text/70 ">
                  {country.capital}
                </span>
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2">
                <span className="text-sm font-semibold text-light-mode-text dark:text-dark-mode-text">
                  Top Level Domain:
                </span>
                <span className="text-sm text-light-mode-text dark:text-dark-mode-text/70 ">
                  {country.topLevelDomain}
                </span>
              </li>
              {country.currencies && (
                <li className="flex gap-2">
                  <span className="text-sm font-semibold text-light-mode-text dark:text-dark-mode-text">
                    Currencies:
                  </span>
                  <span className="text-sm text-light-mode-text dark:text-dark-mode-text/70 ">
                    {country.currencies.map((currency) => currency.name).join(', ')}
                  </span>
                </li>
              )}

              {country.languages && (
                <li className="flex gap-2">
                  <span className="text-sm font-semibold text-light-mode-text dark:text-dark-mode-text">
                    Languages:
                  </span>
                  <span className="text-sm text-light-mode-text dark:text-dark-mode-text/70 ">
                    {country.languages.map((lang) => lang.name).join(', ')}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row lg:flex-wrap lg:items-center">
          <span className="flex-shrink-0 text-sm font-semibold text-light-mode-text dark:text-dark-mode-text">
            Border Countries:
          </span>
          <div className="flex flex-wrap items-center justify-start gap-6">
            {country.borders &&
              country.borders.map((country) => (
                <BorderCountryCard
                  key={country}
                  country={country}
                  onClick={onBorderCountryClick}
                />
              ))}
          </div>
        </div>
      </article>
    </div>
  );
}
