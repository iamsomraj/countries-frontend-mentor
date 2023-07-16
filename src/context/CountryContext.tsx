import { createContext, ReactElement, useReducer } from 'react';

import Countries from '../data/data.json';

type CountriesType = typeof Countries;

type StateType = {
  searchQuery: string;
  regionQuery: string;
  countries: CountriesType;
};

const initState: StateType = {
  countries: [],
  searchQuery: '',
  regionQuery: '',
};

enum ActionType {
  HANDLE_SEARCH_QUERY_ACTION,
  HANDLE_REGION_QUERY_ACTION,
}

type HandleSearchQueryAction = {
  type: ActionType.HANDLE_SEARCH_QUERY_ACTION;
  payload: string;
};

type HandleRegionQueryAction = {
  type: ActionType.HANDLE_REGION_QUERY_ACTION;
  payload: string;
};

type Action = HandleSearchQueryAction | HandleRegionQueryAction;

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

  return { state, onSearchQueryChange, onRegionChange };
};

type UseCountryContextType = ReturnType<typeof useCountryContext>;

const initialContextState: UseCountryContextType = {
  state: initState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  onSearchQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  onRegionChange: (event: React.ChangeEvent<HTMLSelectElement>) => {},
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
