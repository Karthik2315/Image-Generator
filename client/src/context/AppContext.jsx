import { createContext,useState } from "react";

export const AppContext = createContext();

const AppProvider = (props) => {
  const [user,setUser] = useState(null);
  const [showlogin,setShowLogin] = useState(false);
  
  const value = {
    user,setUser,showlogin,setShowLogin
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider;