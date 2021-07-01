import { NavLink } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LoginIcon from '@material-ui/icons/ExitToApp';
import AndroidIcon from '@material-ui/icons/Android';
import "../css/Footer.css";

const Footer = ({userLoginStatus}) => {
    return(
        <>
          <div className="container">
            <div className="footer_main_div">
            <div className="footer_head_div d-flex justify-content-end align-items-center">
             <NavLink to="/contact"> <FacebookIcon  className="footer_header_icons"/> </NavLink>
             <NavLink to="/contact"><MailIcon className="footer_header_icons" /></NavLink>
             <NavLink to={{ pathname: "https://www.linkedin.com/in/nisithmondal/" }} target="_blank"><LinkedInIcon className="footer_header_icons" /></NavLink>
             <NavLink to="/contact"><WhatsAppIcon  className="footer_header_icons"/></NavLink>
             <NavLink to="/contact"><PhoneInTalkIcon  className="footer_header_icons" /></NavLink>
            </div>

            <div className="footer_body_div">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto d-block my-3 text-start">
               <h2 className="footer_conpany_name">Sun-Tech</h2>
               <p className="footer_about_company">This is an very famnous and good company to start your carrier. You have definitly try it in any cost. Otherwise you make a greate mistake in your life.</p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto d-block my-3">
               <h2 className="go_to">Explore</h2>
               <NavLink to="/" style={{textDecoration: "none"}}><p className="goto_link"><HomeIcon className="footer_body_icons"/>Home</p></NavLink>
               <NavLink style={{textDecoration: "none"}} to="/about"><p className="goto_link"><InfoIcon className="footer_body_icons"/>About Us</p></NavLink>
               <NavLink style={{textDecoration: "none"}} to="/contact"><p className="goto_link"><ContactSupportIcon className="footer_body_icons"/>Contact Us</p></NavLink>
               {
                userLoginStatus ? null : <>
               <NavLink style={{textDecoration: "none"}} to="/signin"><p className="goto_link"><PersonAddIcon className="footer_body_icons"/>Sing In</p></NavLink>
               <NavLink style={{textDecoration: "none"}} to="/login"><p className="goto_link"><LoginIcon className="footer_body_icons"/>Login</p></NavLink> </>
               }
             </div>
             <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto d-block my-3">
               <h2 className="contactus_text">Contact Us</h2>
                <a href="#" target="_blank" style={{textDecoration: "none"}}><p className="contactus_link"><FacebookIcon className="footer_body_icons" /> Facebook</p></a>
                <a><p className="contactus_link"><MailIcon className="footer_body_icons" /> mondalnisith90@gmail.com</p></a>
                <a href="#" target="_blank"  style={{textDecoration: "none"}}><p className="contactus_link"><LinkedInIcon className="footer_body_icons" /> Linkedin</p></a>
                <p className="contactus_link"><WhatsAppIcon className="footer_body_icons" /> 6296747720</p>
                <p className="contactus_link"><PhoneInTalkIcon className="footer_body_icons" /> +91 6296747720</p>
             </div>

             <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto d-block my-3">

               <h2 className="contactus_text">Other Links</h2>
                <a href="https://play.google.com/store/apps/details?id=com.nisithmondaltechnology.unitnumberandcurrencyallconverter" target="_blank" style={{textDecoration: "none"}}><p className="contactus_link"><AndroidIcon className="footer_body_icons" /> Currency Converter app</p></a>
                <a href="https://play.google.com/store/apps/details?id=com.nisithmondaltechnology.questionsworld" target="_blank"  style={{textDecoration: "none"}}><p className="contactus_link"><AndroidIcon className="footer_body_icons" /> Quiz App</p></a>
             </div>
            </div>
            <p style={{color: "white", textAlign: "center", paddingBottom: "18px"}}>@ 2021 Sun_tech. All Rights Preserved.</p>
            </div>

            </div>
          </div>
        </>
    );
}

export default Footer;