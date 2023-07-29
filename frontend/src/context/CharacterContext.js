import { createContext, useReducer } from "react";

const CharacterContext = createContext();

const characterReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default function CharacterContextProvider({ children }) {
  const [state, dispatch] = useReducer(characterReducer, {
    character: null,
  });

  return (
    <CharacterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
}
