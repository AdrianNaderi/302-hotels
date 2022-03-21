import React, { useEffect, useState } from "react";

const SearchWeather = (props) => {
    const [search, setSearch] = useState("london");
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    let componentMounted = true;
    let location = props.location;
    location = location.substring(location.indexOf(' '), location.length);
    console.log(location);


    useEffect(() => {
        const fetchWheater = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=98aae41324ef9a2c804b4b4cb98b99fb`);
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
    }, [props.location, componentMounted]);

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

    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString("default", {month: 'long'});
    let day = d.toLocaleString("default", {weekday: 'long'});

   const handleSubmit = (event) => {
       event.preventDefault();
       setSearch(input);
   }


    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <div className="card bg-dark text-white text-center border-0">
                            <img src={`https://source.unsplash.com/600x900/?${data.weather[0].main}`} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                              
                                <div className="bg-dark bg-opacity-50 py-3">
                                <h2 className="card-title">{props.location}</h2>
                                <p className="card-text lead">
                                    {day}, {month} {date}, {year} 
                                </p>
                                <hr />
                                <i className={`fas ${emoji} fa-4x`}></i>
                                <h1 className="fw-bolder mb-5">{temp}&deg;C</h1>
                                <p className="lead fw-bolder mb-0">{data.weather[0].main}</p>
                                <p className="lead">{temp_min}&deg;C | {temp_max}&deg;C</p>
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