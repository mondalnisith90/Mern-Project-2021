import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { NavLink } from 'react-router-dom';
import "../css/SiteFeatures.css";


const SiteFeatures = ({imageUrl, title, body, link}) => {
    return(
        <>
          <div className="card shadow text-center m-auto d-block hover-zoom bg-image" style={{width: "18rem" }}>
           <img src={imageUrl} className="card-img-top  img-fluid" height="0px" width="100px" alt="Card Img" />
           <div className="card-body">
             <h5 className="card-title">{title}</h5>
             <p className="card-text text-start">{body}</p>
           </div>
           <div className="card-body">
             <NavLink to={link} style={{textDecoration: "none"}} > <Button variant="contained" color="secondary" endIcon={<KeyboardArrowRightIcon/>}> Continue</Button> </NavLink>
             

           </div>
           </div>
        </>
    );
}

export default SiteFeatures;