import { CountryItemType } from '../../context/CountryContext';

type Props = {
  country: CountryItemType;
};

export default function CountryCard({ country }: Props) {
  const countryFlagImage = country?.flags?.svg || country?.flag || '';
  return (
    <article className="group flex flex-col rounded bg-dark-mode-text drop-shadow-md dark:bg-dark-mode-elements">
      <div className="overflow-hidden shadow-sm">
        <img
          src={countryFlagImage}
          alt={country.name}
          className="aspect-video overflow-hidden object-cover text-sm text-light-mode-text transition-all duration-300 group-hover:scale-110 dark:text-dark-mode-text"
        />
      </div>
      <div className="flex flex-1 flex-col gap-6 px-4 pb-8 pt-6">
        <h3 className="text-base font-extrabold text-light-mode-text dark:text-dark-mode-text">
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
  );
}