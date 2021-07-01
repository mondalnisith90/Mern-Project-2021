import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Button from '@material-ui/core/Button';
import ContactusCardElements from "./ContactusCardElement";
import SendIcon from '@material-ui/icons/Send';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from "./Footer";
import axios from "axios";
import validator from "validator";
import { ToastContainer, toast } from 'react-toastify';
import "../css/Contactus.css";



const reactToastStyle = {
  position: "top-center",
  autoClose: 1600,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  };



const Contact = () => {

     
           const [inputFieldsData, setInputFieldsData] = useState({
             firstName: "",
             lastName: "",
             email: "",
             message: ""
         });
         
         const [inputFieldsError, setInputFieldsError] = useState({
             firstNameError: "",
             lastNameError: "",
             emailError: "",
             messageError: "",
             serverError: ""
         });
       

         const {firstName, lastName, email, message} = inputFieldsData;
         const {firstNameError, lastNameError, emailError, messageError, serverError} = inputFieldsError;
         //this will called when the page will loading
         useEffect( async () => {
           const url = "http://localhost:8000/users/data";
           try {
            const serverResponse = await axios.get(url, {withCredentials: true});
            if(serverResponse.status == 200){
              const {firstName, lastName, email} = serverResponse.data;
              setInputFieldsData({...inputFieldsData, firstName, lastName, email});
            }
           } catch (error) {
           }
           
         }, []);

         const inputTextChange = (event) => {
           const inputFieldName = event.target.name;
           const inputFieldValue = event.target.value;
           setInputFieldsData({ ...inputFieldsData, [inputFieldName]: inputFieldValue });
           setInputFieldsError({ FirstNameError: "", lastNameError: "", emailError: "", messageError: "", serverError: ""})
          }

        
         
         const formValidation = () => {
           if(firstName.trim().length<3){
             setInputFieldsError({...inputFieldsError, firstNameError: "Name length must be atleast of 3 character"});
             return false;
           } 
           if(! validator.isAlpha(firstName.trim())){
            setInputFieldsError({...inputFieldsError, firstNameError: "Name must contains only alphabates not spaces, numbers, special characters."});
            return false;
           }
           if(lastName.trim().length<1){
            setInputFieldsError({...inputFieldsError, lastNameError: "Please enter your last name."});
            return false;
           }
           if(! validator.isAlpha(lastName.trim())){
            setInputFieldsError({...inputFieldsError, lastNameError: "Name must contains only alphabates not spaces, numbers, special characters."});
            return false;
           }
           if(! validator.isEmail(email.trim())){
            setInputFieldsError({...inputFieldsError, emailError: "Invalid email address."});
            return false;
           }

           if(message.trim().length<1){
            setInputFieldsError({...inputFieldsError, messageError: "Please write your message."});
            return false;
           }

           if(message.trim().length<5){
            setInputFieldsError({...inputFieldsError, messageError: "Too short message. Write more."});
            return false;
           }


           return true;
         }


         const sendMessageForm = async (event) => {
           event.preventDefault();
           const isAllOk = formValidation();
           if(isAllOk){
             //send data to the server for storing user messages
             const url = "http://localhost:8000/users/message";
             const data = {firstName, lastName, email, message};
             try {
              const serverResponse = await axios.post(url, data, {withCredentials: true});
              if(serverResponse.status == 200){
                //clear the message field if message is send to sever
                setInputFieldsData({ ...inputFieldsData, message: "" });
                toast.success("Message Send", reactToastStyle);
              }
           
             } catch (error) {
               const serverResponse = error.response;
               toast.error("Message not Send", reactToastStyle);
               if(serverResponse){
                 setInputFieldsError({...inputFieldsError, serverError: serverResponse.data});
               }else{
                setInputFieldsError({...inputFieldsError, serverError: error.message});
               }
             }
           }
         }


    return(
        <>
         <section className="root_div">
         <div className="main_div container ">
          <div className="row  row1_div text-center">
            <ContactusCardElements text={"6296747720"} IconName={PhoneInTalkIcon} icon_color={"blue"} />
            <ContactusCardElements text={"mondalnisith90@gmail.com"} IconName={EmailIcon} icon_color={"orange"} />
            <ContactusCardElements text={"Linkedin"} IconName={LinkedInIcon} icon_color={"blue"} />
            <ContactusCardElements text={"6296747720"} IconName={WhatsAppIcon} icon_color={"green"} />
          </div>

          <div className="row2_div shadow">
            <div className="contact_heading_div">
                <h3 className="contact_heading">Our services is always open for you</h3>
                <ToastContainer />
            </div>
            <div className=" d-flex justify-content-center">
          <form method="POST" className="form_style_contact  w-100" onSubmit={sendMessageForm}>
                <div className="pl-5 pb-5 pt-2 pr-5">
                <p className="text-center text-danger">{serverError}</p>
                <div className="row g-3 my-0 ">
                <div className="col-md-12">
                <label htmlFor="exampleInputFirstName" className="form-label fw-bold "><PersonOutlineIcon className="metrial_icon " />First Name*</label>
                <input type="text" id="exampleInputFirstName" className="form-control" placeholder="Enter your first name" aria-label="First name" onChange={inputTextChange} name="firstName" value={firstName}   required />
                <span className="input_error_span">{firstNameError}</span>
                 </div>
                 <div className="col-md-12">
                <label htmlFor="exampleInputLastName" className="form-label fw-bold "><PersonOutlineIcon className="metrial_icon " />Last Name*</label>
                <input type="text" id="exampleInputLastName" className="form-control" placeholder="Enter your last name" aria-label="last name" onChange={inputTextChange} name="lastName" value={lastName}   required />
                <span className="input_error_span">{lastNameError}</span>
                 </div>
                </div>
                <div className="row my-3">
                <div className="col-md-12">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold "><EmailIcon className="metrial_icon mb-1 " />Email Address*</label>
               <input type="email" placeholder="Enter email address" id="exampleInputEmail1" className="form-control" aria-label="First name"  onChange={inputTextChange} name="email" value={email}  required />
               <span className="input_error_span">{emailError}</span>
                </div>
                 </div>
                 <div className="row my-3">
                 <div className="col-md-12">
                 <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold "><MailOutlineIcon className="metrial_icon mb-1 " />Your Message*</label>
                 <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  onChange={inputTextChange} name="message" value={message} required/>
                 <span className="input_error_span">{messageError}</span>
                 </div>
                 </div>

                    <div className="row my-2">
                     <div className="col-md-4 col-sm-12 col-12">
                     <Button variant="contained" className="mt-3 contact_btn" color="secondary"  endIcon={<SendIcon />}  type="submit">
                     Send Message
                    </Button>
                   </div>
                 <div className="col-md-4 col-sm-12 col-12 mt-4">
               <NavLink to="/login" className="nav_link">I already have an account</NavLink>
               </div>
               <div className="col-md-4 col-sm-12 col-12 mt-4">
               <NavLink to="/signin" className="nav_link">New user? Create account</NavLink>
               </div>
             </div>

            </div>
             </form>
             </div>

          </div>

          </div>
       {/* page Footer */}

      <Footer/>   
         </section>
        </>
    );
}

export default Contact;