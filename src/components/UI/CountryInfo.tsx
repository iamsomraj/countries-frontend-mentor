import { CountryItemType } from '../../context/CountryContext';

type Props = {
  country: CountryItemType;
};

export default function CountryInfo({ country }: Props) {
  const countryFlagImage = country?.flags?.svg || country?.flag || '';

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
      <div className="overflow-hidden shadow-sm">
        <img
          src={countryFlagImage}
          alt={country.name}
          className="aspect-video  overflow-hidden object-cover text-sm text-light-mode-text transition-all duration-300 group-hover:scale-110 dark:text-dark-mode-text"
        />
      </div>
      <article className="flex flex-col gap-12 px-4 pb-8 pt-6">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-extrabold text-light-mode-text dark:text-dark-mode-text">
            {country.name}
          </h3>
          <ul className="flex flex-col gap-1">
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
            {country.capital && (
              <li className="flex gap-2">
                <span className="text-sm font-semibold text-light-mode-text dark:text-dark-mode-text">
                  Capital:
                </span>
                <span className="text-sm text-light-mode-text dark:text-dark-mode-text/70 ">
                  {country.capital}
                </span>
              </li>
            )}
          </ul>
        </div>
      </article>
    </div>
  );
}
