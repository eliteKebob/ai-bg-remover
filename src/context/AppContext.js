import React from "react";

import { useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [userImage, setUserImage] = useState({});

  return (
    <AppContext.Provider value={{ userImage, setUserImage }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
