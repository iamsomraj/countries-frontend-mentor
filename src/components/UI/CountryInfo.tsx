import { CountryItemType } from '../../context/CountryContext';

type Props = {
  country: CountryItemType;
};

export default function CountryInfo({ country }: Props) {
  return <div>{JSON.stringify(country)}</div>;
}
