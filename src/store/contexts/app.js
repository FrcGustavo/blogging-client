import { createContext, useContext, useReducer } from 'react';
import { appReducer } from '../reducers';

const AppStateContext = createContext();
const AppDispatchContext = createContext();

export const AppProvider = ({ children, initialValue }) => {
  const [state, dispatch] = useReducer(appReducer, initialValue);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
export const useAppDispatch = () => useContext(AppDispatchContext);
