import { createContext,useEffect,useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppProvider = (props) => {
  const [user,setUser] = useState(null);
  const [showlogin,setShowLogin] = useState(false);
    console.log('All env vars:', import.meta.env);

  const backendURL = import.meta.env.VITE_BACKEND_URL;
  console.log("hi",backendURL);
  useEffect(()=>{
    const fetchUser = async() => {
      try {
        const response = await axios.get(`${backendURL}/api/user/me`,{withCredentials:true});
        setUser(response.data.user);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchUser();
  },[]);
  const value = {
    user,setUser,showlogin,setShowLogin,backendURL
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider;