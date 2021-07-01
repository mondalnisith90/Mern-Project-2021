import { NavLink } from "react-router-dom";
import "../css/Error.css";

const Error = () => {
  // navigator.geolocation.getCurrentPosition((position) => {
  //   console.log("Position obj ", position);
  // }, (error) => {
  //   console.log("permission denie");
  // });
    return(
        <>
          <section className="error_root_div">
          <div className="container error_main_div">
             <h1 className="error_heading">Page Not Found</h1>
             <NavLink to="/"><button className="error_home_btn">Go To Home Page</button></NavLink>
          </div>

          </section>
        </>
    );
}

export default Error;