import {NavLink} from "react-router-dom";
import Footer from "./Footer";
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "../css/Aboutus.css";

const About = () => {
    return(
        <>
          <section className="aboutus_root_div">
           < div className="aboutus_main_div">
             <div className="aboutus_header_div">
             <div className="container py-5">
             <h1 className="aboutus_heading">Who We Are?</h1>
             <p className="aboutus_para">Along with FAQ and Contact pages, the About Us page is one of the first supporting pages you'll likely create for your website, regardless of the industry you're in.

They may go by different labels—“About”, “Story”, “Mission”—but these types of pages generally serve the same key purpose: to be the go-to page for a brand to say, “This is who we are.”

When a visitor wants to learn more about you or your business, it's the page they'll look for.

Unfortunately, About Us pages are too often treated as an obligation rather than the valuable opportunity they are to connect with your customers by selling your story, your vision, your mission, and what makes you, YOU.</p>
              <div className="row">

                <div className="col-lg-6 col-md-6 col-sm-12 col-12 m-auto d-block my-2 d-flex justify-content-md-end justify-content-sm-center justify-content-center">
                 <NavLink to="/contact"> <button className="contactus_button">Contact Us</button> </NavLink>

                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-12 m-auto d-block my-2 d-flex justify-content-md-start justify-content-sm-center justify-content-center">
                 <NavLink to="/signin"> <button className="signin_button">SignIn</button> </NavLink>
                </div>

              </div>

            

              <div className="row contact_us_icons_row_div text-center my-md-4 my-2 my-sm-4 ">

              {/* <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto d-block">

              </div> */}

              <div className="col-lg-4 col-md-4 col-sm-12 col-12 m-auto d-block">
              <div className="row">
         
              <div className="col-lg-3 col-md-3 col-sm-3 col-3 m-auto d-block bg-warning">
              <NavLink to="/contact"> <PhoneInTalkIcon className="aboutus_icons" />   </NavLink>
              </div>
         

              <div className="COL-lg-3 col-md-3 col-sm-3 col-3 m-auto d-block bg-danger">
              <NavLink to="/contact"><MailIcon className="aboutus_icons"  /></NavLink>
               </div>
               
               <div className="COL-lg-3 col-md-3 col-sm-3 col-3 m-auto d-block bg-primary">
               <NavLink to={{pathname: "https://www.linkedin.com/in/nisithmondal/"}} target="_blank"><LinkedInIcon className="aboutus_icons"  /></NavLink>
               </div>
               
               <div className="COL-lg-3 col-md-3 col-sm-3 col-3 m-auto d-block bg-success">
               <NavLink to="/contact"><WhatsAppIcon  className="aboutus_icons"  /></NavLink>
               </div>
               </div>
              </div>

{/*               
              <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto d-block">

              </div> */}

              </div>

             </div>
             </div>




           </div>

          </section>
        </>
    );
}

export default About;