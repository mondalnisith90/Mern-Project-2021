import { NavLink } from 'react-router-dom';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
const ContactusCardElements = ({IconName, text, icon_color}) => {
    return(
        <>
         <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto d-block  p-3">
         <div className="d-flex  justify-content-center align-items-center pt-4 pb-3 bg-white shadow" style={{borderRadius: "0.3cm"}}>
         <IconName size="medium"  style={{marginBottom: "15px", marginRight: "7px", color: icon_color}}/>
         {text!="Linkedin"? <p style={{fontSize: "17px"}}>{text}</p> : <NavLink to={{pathname: "https://www.linkedin.com/in/nisithmondal/"}} target="_blank"> <p style={{fontSize: "17px"}}>{text}</p></NavLink>}
         
        </div>
         </div>
        </>
    );
}
    

export default ContactusCardElements;


