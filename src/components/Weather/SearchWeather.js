import React, { useEffect, useState } from "react";
import classes from "./SearchWeather.module.css";

const SearchWeather = (props) => {
    const [search, setSearch] = useState("london");
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    let componentMounted = true;
  


    useEffect(() => {
        const fetchWheater = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&APPID=98aae41324ef9a2c804b4b4cb98b99fb`);
                if(componentMounted){
                    setData(await response.json());
                    
                }
                return () => {
                    componentMounted = false;
                }
                
            } catch (err) {
                alert(err);
            }
           
        }
        fetchWheater();
    }, [props.city, componentMounted]);

    let emoji = null;
    if (typeof data.main != "undefined"){
        if(data.weather[0].main == "Clouds"){
            emoji = "fa-cloud"
        }else if(data.weather[0].main == "Thunderstorm"){
            emoji = "fa-bolt"
        }else if(data.weather[0].main == "Drizzle"){
            emoji = "fa-cloud-rain"
        }else if(data.weather[0].main == "Rain"){
            emoji = "fa-cloud-showers-heavy"
        }else if(data.weather[0].main == "Snow"){
            emoji = "fa-snow-flake"
        }else {
            emoji = "fa-smog"
        }
    }else {
        return (
            <div>...Loading</div>
        )
    }

    let temp = (data.main.temp - 273.15).toFixed(2);
    let temp_min = (data.main.temp_min - 273.15).toFixed(2);
    let temp_max = (data.main.temp_max - 273.15).toFixed(2);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = capitalizeFirstLetter(d.toLocaleString("default", {month: 'long'}));
    let day = capitalizeFirstLetter(d.toLocaleString("default", {weekday: 'long'}));

   const handleSubmit = (event) => {
       event.preventDefault();
       setSearch(input);
   }


    return (
      <div>
        <div className="container mt-5">
          <div>
            <div className={classes.hej}>
              <div className={`card bg-dark text-white text-left border-0`}>
                <img
                  src={`https://source.unsplash.com/1200x400/?${data.weather[0].main}`}
                  className={classes.cardImg}
                  alt="..."
                />
                <div className="card-img-overlay">
                  <div className={`bg-dark bg-opacity-50 py-3 ${classes.test}`}>
                    <div className="wrapper">
                      <h2 className="card-title">
                        {props.city}
                        <span className={classes.span1}>
                          <i className={`fas ${emoji} fa-4x`}></i>
                        </span>
                      </h2>
                      <h4 className="card-title">
                        <div className="row">
                          <div className="col-6">
                            <p>{props.country}</p>
                          </div>
                          <div className="col-5">
                            <p className="text-end">{temp}&deg;C</p>
                            <p className="lead fw-bolder text-end mb-0">
                        {data.weather[0].main}
                        
                      </p>
                            <p className="lead text-end">{temp_min}&deg;C | {temp_max}&deg;C</p>
                          </div>
                        </div>

                        <span className={classes.span1}></span>
                      </h4>
                      
                      <p className="card-text lead">
                        {day}, {month} {date}, {year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );


 
}

export default SearchWeather