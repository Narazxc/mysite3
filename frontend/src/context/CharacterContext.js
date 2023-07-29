import { createContext, useReducer } from "react";

export const CharacterContext = createContext();

export const characterReducer = (state, action) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      return { characters: action.payload };
    case "DELETE_CHARACTER":
      return {
        characters: state.characters.filter(
          (c) => !(c._id === action.payload._id)
        ),
      };
    default:
      return state;
  }
};

export default function CharacterContextProvider({ children }) {
  const [state, dispatch] = useReducer(characterReducer, {
    characters: null,
  });

  return (
    <CharacterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
}
