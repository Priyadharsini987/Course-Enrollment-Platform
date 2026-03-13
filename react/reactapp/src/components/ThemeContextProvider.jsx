import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
  darkMode: false
};

const reducer = (state, action) => {
  switch(action.type){
    case "TOGGLE_THEME":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <div style={{ background: state.darkMode ? "#121212" : "#fff", color: state.darkMode ? "#fff" : "#000", minHeight: "100vh" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
