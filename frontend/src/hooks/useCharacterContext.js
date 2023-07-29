import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";

export default function useCharacterContext() {
  const context = useContext(CharacterContext);

  if (!context) {
    throw Error(
      "useCharacterContext must be used inside a CharacterContextProvider"
    );
  }

  return context;
}
