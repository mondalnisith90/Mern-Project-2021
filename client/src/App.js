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
import { useState } from "react";
import("../node_modules/bootstrap/dist/css/bootstrap.min.css");
import("../node_modules/bootstrap/dist/js/bootstrap.bundle.js");
import("./App.css");

const App = () => {

  const [userLoginStatus, setUserLoginStatus] = useState(false);

  return (
    <>
     <Navbar userLoginStatus={userLoginStatus}/>
     <Switch>
       <Route exact path="/" component={() => <Home setUserLoginStatus={setUserLoginStatus} />} />
       <Route exact path="/about" component={() => <Aboutus/>} />
       <Route exact path="/contact" component={Contactus}/>
       <Route exact path="/signin" component={SignIn}/>
       <Route exact path="/login" component={() => <Login setUserLoginStatus={setUserLoginStatus} />}/>
       <Route exact path="/weather" component={Weather} />
       <Route exact path="/logout" component={() => <Logout setUserLoginStatus={setUserLoginStatus} /> }  />
       <Route component={Error}/>
     </Switch>
    </>
  );
}

export default App;
