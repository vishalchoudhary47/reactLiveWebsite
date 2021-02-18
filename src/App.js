import React, { useEffect, useState } from 'react';

const App = () => {
    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Mumbai");
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7092a44024e53f85ce47367b877733fa`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }

        fetchApi();
    },[search])
    return (
        <>
        <div className="box">
            <div className="inputData">
                <input className="inputField" type="search" value={search} onChange={(event) => {
                    setSearch(event.target.value);
                }} />
            </div>
            {!city ? (
                <p>No DAtA found</p>
            ) : (
                <div>
                <div className="info">
                <h2 className="location">
                <i className="fas fa-street-view">{search}</i>
                </h2>
                <h1 className="temp">
                {city.temp}
                </h1>
                <h3 className="tempmin_max"> {city.temp_min} | {city.temp_max} </h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
                </div>
            )
            } 
            
        </div>

        </>
    )
}
export default App;