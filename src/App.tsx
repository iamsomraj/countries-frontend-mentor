import MainCountry from './components/index';
import { CountryContextProvider } from './context/CountryContext';

export default function App() {
  return (
    <CountryContextProvider>
      <MainCountry />
    </CountryContextProvider>
  );
}
