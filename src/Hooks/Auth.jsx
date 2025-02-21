import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const useAuth = () => {
    const auth=useContext(AuthContext)
    console.log(auth)
    return auth
};

export default useAuth;