import React, { createContext, useState } from "react";

export const RefetchContext = createContext(null);

const RefetchProvider = ({ children }) => {
  const [refetch, setRefetch] = useState(false);

  return (
    <RefetchContext.Provider value={{ refetch, setRefetch }}>
      {children}
    </RefetchContext.Provider>
  );
};

export default RefetchProvider;
