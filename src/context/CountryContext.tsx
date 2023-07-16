import { createContext, ReactElement, useReducer } from 'react';

import Countries from '../data/data.json';

const regions = new Set<string>();

Countries.forEach((country) => {
  regions.add(country.region);
});

type CountryListType = typeof Countries;

export type CountryItemType = CountryListType[number];

type StateType = {
  searchQuery: string;
  regionQuery: string;
  countries: CountryListType;
  regions: string[];
  detailCountry: null | CountryItemType;
};

const initState: StateType = {
  countries: Countries,
  searchQuery: '',
  regionQuery: '',
  regions: new Array(...regions),
  detailCountry: null,
};

enum ActionType {
  HANDLE_SEARCH_QUERY_ACTION,
  HANDLE_REGION_QUERY_ACTION,
  SELECT_COUNTRY_ACTION,
}

type HandleSearchQueryAction = {
  type: ActionType.HANDLE_SEARCH_QUERY_ACTION;
  payload: string;
};

type HandleRegionQueryAction = {
  type: ActionType.HANDLE_REGION_QUERY_ACTION;
  payload: string;
};

type SelectCountryAction = {
  type: ActionType.SELECT_COUNTRY_ACTION;
  payload: CountryItemType | null;
};

type Action = HandleSearchQueryAction | HandleRegionQueryAction | SelectCountryAction;

const reducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case ActionType.HANDLE_SEARCH_QUERY_ACTION: {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    case ActionType.HANDLE_REGION_QUERY_ACTION: {
      return {
        ...state,
        regionQuery: action.payload,
      };
    }
    case ActionType.SELECT_COUNTRY_ACTION: {
      return {
        ...state,
        detailCountry: action.payload,
      };
    }
    default: {
      throw new Error(`Invalid action!`);
    }
  }
};

const useCountryContext = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const onSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.HANDLE_SEARCH_QUERY_ACTION,
      payload: event.target.value,
    });
  };

  const onRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: ActionType.HANDLE_REGION_QUERY_ACTION,
      payload: event.target.value,
    });
  };

  const selectCountry = ({ country }: { country: CountryItemType | null }) => {
    dispatch({
      type: ActionType.SELECT_COUNTRY_ACTION,
      payload: country,
    });
  };

  return { state, onSearchQueryChange, onRegionChange, selectCountry };
};

type UseCountryContextType = ReturnType<typeof useCountryContext>;

const initialContextState: UseCountryContextType = {
  state: initState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  onSearchQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  onRegionChange: (event: React.ChangeEvent<HTMLSelectElement>) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  selectCountry: ({ country }: { country: CountryItemType | null }) => {},
};

export const CountryContext = createContext<UseCountryContextType>(initialContextState);

type Props = {
  children: ReactElement;
};

export const CountryContextProvider = ({ children }: Props): ReactElement => {
  return (
    <CountryContext.Provider value={useCountryContext()}>
      {children}
    </CountryContext.Provider>
  );
};
