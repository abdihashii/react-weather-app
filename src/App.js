// Main file that will be primarly worked on

import React from "react";

import './App.css'

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "5a64d355ab35fa7df82b2142a69c0849";

class App extends React.Component {
    state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }

    // arrow functions allows us to leave off the constructor and binds the keyword to the component
    getWeather = async (e) => {
        // event object. Prevent default behavior of this component, in this example it prevents the component from reloading page
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        // async await makes an api call. ` ` are template strings
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);

        // converts the api call to json format
        const data = await api_call.json();

        // Will only set the state if the city and country values have been entered
        if (city && country) {
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            console.log(data);
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the values"
            });
        }
    }

  // displays the data that goes inside components. Returns JSX (JS code that looks like HTML)
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature = {this.state.temperature}
                    city = {this.state.city}
                    country = {this.state.country}
                    humidity = {this.state.humidity}
                    description = {this.state.description}
                    error = {this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};



// In order for other files to import this component successfully
export default App;
