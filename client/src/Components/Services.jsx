//its a sub components
import "../css/Services.css";

const Services = ({ServiceIcon, serviceHeading, servicesBody}) => {
    return(
        <>
          <div className="service_div">
              <div className="services_icon">
                <ServiceIcon style={{fontSize: "50px", marginTop: "25px"}}/>
              </div>
              <div className="my-3">
              <h2 className="service_head">{serviceHeading}</h2>
              <p className="service_body py-2 px-3">{servicesBody}</p>
              </div>
              
          </div>
        </>
    );
}

export default Services;