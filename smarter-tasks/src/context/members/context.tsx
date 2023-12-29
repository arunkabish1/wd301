import { reducer, initialState, UsersState, UsersActions } from "./reducer";
import React, { createContext, useContext, useReducer } from "react";

const UsersStateContext = createContext<UsersState | undefined>(undefined);

type UsersDispatch = React.Dispatch<UsersActions>;

const UsersDispatchContext = createContext<UsersDispatch | undefined>(
  undefined
);

export const UsersProvider: React.FC<React.PropsWithChildren> = ({
  children,}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
     
        {children}
     
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
};

export const useUsersState = () => useContext(UsersStateContext);
export const useUsersDispatch = () => useContext(UsersDispatchContext);