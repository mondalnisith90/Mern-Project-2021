import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";

const Logout =  ({setUserLoginStatus}) => {

    const history = useHistory();
    const performUserLogout = async() => {
        const apiUrl = "http://localhost:8000/users/logout";
        try {
            const serverResponse = await axios.get(apiUrl, {withCredentials: true});
            if(serverResponse.status == 200){
                //user logout. Now send the user to login page.
                setUserLoginStatus(false);
                history.push("/login");
            }
        } catch (error) {
            
        }       
    }
  

    useEffect(() => {
        performUserLogout();
    }, []);

    return(
        <>
        </>
    );

}

export default Logout;