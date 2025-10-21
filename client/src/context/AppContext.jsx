import { createContext,useEffect,useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppProvider = (props) => {
  const [user,setUser] = useState(null);
  const [showlogin,setShowLogin] = useState(false);
  const [isloading,setIsLoading] = useState(true);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  console.log("hi",backendURL);
  useEffect(()=>{
    const fetchUser = async() => {
      try {
        const response = await axios.get(`${backendURL}/api/user/me`,{withCredentials:true});
        setUser(response.data.user);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUser();
  },[]);
  const updateUserCredits = (newCreditBalance) => {
    setUser((prevUser) => ({
      ...prevUser,
      creditBalance: newCreditBalance,
    }));
  }
  const value = {
    user,setUser,showlogin,setShowLogin,backendURL,isloading,setIsLoading,updateUserCredits
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider;