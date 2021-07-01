import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import "../css/SiteFeatures.css";


const SiteFeatures = ({imageUrl, title, body}) => {
    return(
        <>
          <div className="card shadow text-center m-auto d-block hover-zoom bg-image" style={{width: "18rem" }}>
           <img src={imageUrl} className="card-img-top  img-fluid" height="0px" width="100px" alt="Card Img" />
           <div className="card-body">
             <h5 className="card-title">{title}</h5>
             <p className="card-text">{body}</p>
           </div>
           <div className="card-body">
             <a href="#" className="btn"><Button variant="contained" color="secondary" endIcon={<KeyboardArrowRightIcon/>}> Continue</Button></a>
             

           </div>
           </div>
        </>
    );
}

export default SiteFeatures;