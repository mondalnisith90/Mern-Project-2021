import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import SignIn from "./Components/SignIn";
import Login from "./Components/Login";
import Error from "./Components/Error";
import Weather from "./Components/Weather";
import Logout from "./Components/Logout";
import {Switch, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import("../node_modules/bootstrap/dist/css/bootstrap.min.css");
import("../node_modules/bootstrap/dist/js/bootstrap.bundle.js");
import("./App.css");

const App = () => {

  const [userLoginStatus, setUserLoginStatus] = useState(false);

  const fetchUserDataFromServer = async () => {
    try {
      const url = "http://localhost:8000/users/data";
      const serverResponse = await axios.get(url, {withCredentials: true});
      if(serverResponse.status == 200){
        //means user already loged in..
        setUserLoginStatus(true);
        // const {firstName, lastName, email} = serverResponse.data;
        // setUserData({...userdata, firstName: firstName});
      }else{
        throw new Error();
      }
    } catch (error) {
      //user data not get may be for internet error or available or unauthorize user
      //new user
      setUserLoginStatus(false);
    }
  }


  
  useEffect(() => {
    fetchUserDataFromServer();
  }, []);

  return (
    <>
     <Navbar userLoginStatus={userLoginStatus}/>
     <Switch>
       <Route exact path="/" component={() => <Home  userLoginStatus={userLoginStatus} />} />
       <Route exact path="/about" component={() => <Aboutus/>} />
       <Route exact path="/contact" component={() => <Contactus userLoginStatus={userLoginStatus} />}/>
       <Route exact path="/signin" component={SignIn}/>
       <Route exact path="/login" component={() => <Login setUserLoginStatus={setUserLoginStatus} />}/>
       <Route exact path="/weather" component= {() => < Weather userLoginStatus={userLoginStatus} />}   />
       <Route exact path="/logout" component={() => <Logout setUserLoginStatus={setUserLoginStatus} /> }  />
       <Route component={Error}/>
     </Switch>
    </>
  );
}

export default App;
