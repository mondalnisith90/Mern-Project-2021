import SearchIcon from '@material-ui/icons/Search';
import weatherPic from "../Images/weather1.png"
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import axios from "axios";
import "../css/Weather.css";
import { useState, useEffect } from 'react';

const Weather = () => {

  const [inputFieldsData, setInputFieldsData] = useState({cityName: "", latitude: "", longitude: ""});
  const [apiData, setApiData] = useState({
    temperature: "", //*C
    maxTemperature: "", //*C
    minTemperature: "", //*C
    humidity: "", //in %
    windSpeed: "", //km/hour
    feelsLike: "", //*C
    pressure: "", //millibar (mb)
    weatherReport: "",
    weatherImage: "",
    apiCityName: "", //city name and country name
    apiCountryName: "",
    apiLatitude: "",
    apiLongitude: ""
  });
//To show and hide of weather data. When input data is invalid we hide weather data show div and print error message not found.
  const [weatherDataVisibility, setWeatherDataVisibility] = useState({visibility: false, errorMessage: ""});
  //When page is loading then, load the weather data using user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Metric&appid=772789542d29f29da0c81732031b63f4`;
      featchWeatherData(apiUrl); //Featch weather data using  latitude, longitude

    }, (error) => {});
  }, []);

  
  const {cityName, latitude, longitude} = inputFieldsData;
  const {temperature, maxTemperature, minTemperature, humidity, windSpeed, feelsLike, pressure, weatherReport, weatherImage, apiCityName, apiCountryName, apiLatitude, apiLongitude} = apiData;

  const onInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setInputFieldsData({...inputFieldsData, [fieldName]: fieldValue});
  }



  const featchWeatherData = async (apiUrl) => {
    try {
      const apiResponse = await axios.get(apiUrl);
      if(apiResponse.status == 200){
        setWeatherDataVisibility({visibility: true, errorMessage: ""})
        const data = apiResponse.data;
        setApiData({
          temperature: data.main.temp + "°C", 
          maxTemperature: data.main.temp_max + "°C",
          minTemperature: data.main.temp_min + "°C",
          humidity: data.main.humidity + "%",
          windSpeed: (data.wind.speed * 3.6).toFixed(2) + "km/h",
          feelsLike:data.main.feels_like + "°C",
          pressure: data.main.pressure + "mb",
          weatherReport: data.weather[0].main + ", " + data.weather[0].description,
          weatherImage: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          apiCityName: data.name,
          apiCountryName: (data.sys.country == "IN" ? "India" : data.sys.country),
          apiLatitude: data.coord.lat,
          apiLongitude: data.coord.lon
        });
        setInputFieldsData({cityName: data.name, latitude: data.coord.lat, longitude: data.coord.lon});
     
      } else{
        throw new Error();
      }
    } catch (error) {
      setWeatherDataVisibility({visibility: false, errorMessage: error.response.data.message})
    }
  }


  const cityFormSubmit = (event) => {
    event.preventDefault();
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName.trim()}&units=Metric&appid=772789542d29f29da0c81732031b63f4`;
    featchWeatherData(apiUrl); //Featch weather using city name
  }

  const latitudeFormSubmit = (event) => {
    event.preventDefault();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=Metric&appid=772789542d29f29da0c81732031b63f4`;
    featchWeatherData(apiUrl); //Featch weather data using  latitude, longitude
  }

    return(
        <>
          <section className="weather_root_div">
          <div className="container weather_main_div">
          <div className=" row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-block m-auto shadow form_city">
          <form className="d-flex justify-content-center mt-3  w-100" onSubmit={cityFormSubmit} action="post">
            <input type="text" className="city_name_input" placeholder="City name like Delhi" value={cityName} name="cityName" onChange={onInputChange}  required />
            <button className="city_btn"><SearchIcon className="search_icons" type="submit" />Search</button>
           </form>
          </div>
          </div>

          <div className=" row mb-5">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-block m-auto form_lat shadow">
          <form className="row g-3 pl-3 mb-3"  onSubmit={latitudeFormSubmit} action="post">
          <div className="col-md-4 ">
            <label htmlFor="inputEmail3" style={{fontWeight: "bold"}} className="form-label" >Latitude</label>
            <input type="number" className="form-control" id="inputEmail3" placeholder="latitude"  value={latitude} name="latitude" onChange={onInputChange} required />
          </div>
          <div className="col-md-4 ">
            <label htmlFor="inputEmail4" style={{fontWeight: "bold"}} className="form-label">Longitude</label>
            <input type="number" className="form-control" id="inputEmail4" placeholder="longitude"  value={longitude} name="longitude" onChange={onInputChange} required  />
          </div>
          <div className="col-md-4 text-end">
            <button className="lat_btn"><SearchIcon className="search_icons" type="submit" />Search</button>
          </div>
          </form>
          </div>
          </div>

         


          {/* weather data show div */}
          {/* //If weather data is available then show weather data else show error message */}
          { weatherDataVisibility.visibility ?

          <div className="row">
           <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-block m-auto weather_data_main_div shadow">
             <div className="weather_header_design d-flex justify-content-around">
             <div>
               <img src={weatherImage} alt=""  className="img-fluid"  />
             </div>
             <div>
               <h1 className="weather_temperature_text">{temperature}</h1>
               <p className="max_min_temp">Max temp: {maxTemperature} | Min temp: {minTemperature} </p>
             </div>
       
             </div>
             <div className="weather_data_body_div">
               <h3 className="body_city_name">{apiCityName}, {apiCountryName}</h3>
              <h5 className="body_weather_status">{weatherReport}</h5>
               <div className="d-flex justify-content-around mt-4">
                <div>
                <p className="body_text">Humidity: {humidity}</p>
                </div>
                <div>
                <p className="body_text">Wind Speed: {windSpeed}</p>
                </div>
               </div>

               <div className="d-flex justify-content-around mt-0">
                <div>
                <p className="body_text">Feels like: {feelsLike} </p>
                </div>
                <div>
                <p className="body_text mr-4">Pressure: {pressure}</p>
                </div>
               </div>
             </div>
           </div>
          </div>

          :  <div className="p-3">
            <h3 className=" text-center text-danger">{weatherDataVisibility.errorMessage}</h3>
          </div> }




          </div>
          </section>
        </>
    );
}

export default Weather;