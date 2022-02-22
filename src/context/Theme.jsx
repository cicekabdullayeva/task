import React, { useState, useCallback } from "react";

const context = React.createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const [price, setPrice] = useState(0);

  return (
    <context.Provider value={{ theme, setTheme, price, setPrice }}>
      {children}
    </context.Provider>
  );
};

export { context };
export default ThemeContext;
