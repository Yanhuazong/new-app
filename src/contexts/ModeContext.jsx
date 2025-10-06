import { createContext, useState } from "react";
const ModeContext = createContext();

export default ModeContext;

export const ModeProvider = ({children}) =>{
  const [mode, setMode] = useState("light");
  const changeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
    return <ModeContext.Provider value={{mode, changeMode}}>
        {children}
    </ModeContext.Provider>
}
