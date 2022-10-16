import React, { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export const LandingContext = createContext({});

export const LandingProvider = ({ children }: Props) => {
  const [stateContext, setStateContext] = useState();

  return (
    <LandingContext.Provider value={{ stateContext, setStateContext }}>
      {children}
    </LandingContext.Provider>
  );
};
export const useLandingContext = (): {} => {
  const context = useContext(LandingContext);
  if (context === undefined)
    throw new Error(`Context is out of ${LandingProvider.name}`);
  return context;
};
