import Services from "./Services";
import SiteFeatures from "./SiteFeatures";
import Footer from "./Footer";
import ServicesData from "../DataSrc/ServicesData";
import WebsiteFeaturesData from "../DataSrc/WebsiteFeaturesData";
import WeatherIcon from '@material-ui/icons/Cloud';
import MovieIcon from '@material-ui/icons/Movie';
import ChatIcon from '@material-ui/icons/Chat';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import developerPic from "../Images/developer1.jpg"
import "../css/Home.css";



const Home = ({setUserLoginStatus}) => {

  const [userdata, setUserData] = useState({firstName: "", lastName: "", email: ""});

  const fetchUserDataFromServer = async () => {
    try {
      const url = "http://localhost:8000/users/data";
      const serverResponse = await axios.get(url, {withCredentials: true});
      if(serverResponse.status == 200){
        //means user already loged in..
        setUserLoginStatus(true);
        const {firstName, lastName, email} = serverResponse.data;
        setUserData({...userdata, firstName: firstName});
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



    return(
        <>
          <section className="root_div_home">
           {/* Home Header */}
            <div className="header_div">
             <div className=" heading_container_div">
               <div className="row g-0 header_row_div">
                 <div className="col-lg-7 col-md-7 col-sm-12 col-12 m-auto d-block  order-md-1 order-sm-2 order-2 mt-4">
                 <h1 className="home_heading">We all are alians in this world</h1>
                 <h3 className="home_welcome_text">Hello  {userdata.firstName ? userdata.firstName : "Friend"}, Wellcome to our platform</h3>
               <p className="home_head_para">All that is gold does not glitter,
             Not all those who wander are lost;
              The old that is strong does not wither,
              Deep roots are not reached by the frost.
              All that is gold does not glitter,
              Not all those who wander are lost;
              The old that is strong does not wither,
              Deep roots are not reached by the frost.</p>

              <div className="row header_button_div">
              <div className="col-md-6  d-flex justify-content-md-end justify-content-sm-center justify-content-center my-3">
              <button className="home_about_button">About Us</button>
              </div>
              <div className="col-md-6 d-flex justify-content-md-start  justify-content-sm-center justify-content-center my-3">
              <button className="home_contact_button">Contact Us</button>
              </div>
             
              </div> 

                 </div>

                 <div className="col-lg-5 col-md-5 col-sm-12 col-12 m-auto d-block order-md-2 order-sm-1 order-1 home_img">
                 </div>
               </div>
             </div>
           </div>


          {/* our Services */}

          <div className="container services_main_div">
            <h1 className="services_heading">Our Services</h1>
            <p className="services_para">All of our services are as follows to our customers</p>
            <div className="row text-center mt-3 services_row_div">
            {ServicesData.map((values, index) => {
              return(
                <>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 m-auto d-block my-2" key={index}>
                <Services ServiceIcon={values.IconName} serviceHeading={values.heading} servicesBody = {values.body}/>
             </div>
                </>
              )
              
            })}
            </div>
          </div>

          {/* This website Features */}

          <div className="container websitefeatures_main_div">
            <h1 className="websitefeatures_heading">Our Website Features</h1>
            <p className="websitefeatures_para">All the features of our websites. To know more about site visit www.sitefeatures.in</p>
            <div className="row text-center mt-3 websitefeatures_row_div">
            {WebsiteFeaturesData.map((values, index) => {
              return(
                <>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 m-auto d-block my-4" key={index}>
                <SiteFeatures imageUrl={values.imageUrl} title={values.title} body={values.body} />
             </div>
                </>
              )
              
            })}
            </div>
          </div>

          {/* developer details */}

          <div className="container developer_main_div shadow">
          <h1 className="developer_heading">About Developers</h1>
            <div className="row text-center mt-3 developer_row_div"> 
             <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-lg-1 order-md-1 order-sm-2 order-2 m-auto d-block my-2">
               <div className="developer_details_div text-start h-100">
                <p className="dev_name">My name is Nisith Mondal</p>
                 <h3 className="dev_intro">I am a Full stack developer, Android developer, Java developer and also a coder.</h3>
                 <p className="dev_degree">Qualification: Bacholer of Technology in Electronics and Communication Engineering</p>
                <NavLink to="/contact" className="dev_navlink"><button className="home_contact_button">Contact Me</button></NavLink>
               

               </div>
              

             </div>
             <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-lg-2 order-md-2 order-sm-1 order-1 m-auto d-block my-2 text-center ">
               <img src={developerPic} className="img-fluid developer_img_tag" alt="Developer Img"/>
               <div className="row devloper_contact_icons_row my-3 " >
                 <div className="col-lg-4 col-md-6 col-sm-6 col-6 m-auto d-block">
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
               </div>
               </div>
               </div>

             </div>

          {/* page Footer */}

           <Footer/>

          </section>
           
        </>
    );
}

export default Home;