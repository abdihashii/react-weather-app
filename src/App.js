// Main file that will be primarly worked on

import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "5a64d355ab35fa7df82b2142a69c0849";

class App extends React.Component {
  // arrow functions allows us to leave off the constructor and binds the keyword to the component
  getWeather = async (e) => {
    // event object. Prevent default behavior of this component, in this example it prevents the component from reloading page
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // async await makes an api call. ` ` are template strings
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // converts the api call to json format
    const data = await api_call.json();
    console.log(data);
  }
  
  // displays the data that goes inside components. Returns JSX (JS code that looks like HTML)
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
};

// In order for other files to import this component successfully
export default App;