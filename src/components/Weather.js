import React from "react";
/*
 Stateless functional component that doesn't contain any states, just props,
 This component doesn't need the other functionality such as the App.js comp
 Need to pass in 'props' argument in order to call the props from App.js
 can also remove the parens from '(props)' if only returning one
*/
const Weather = props => (
  // can only one single element if you use 'return', or you can return as much
  // as you'd like by removing 'return' and the curly braces and replace it with
  // parens
  <div className="weather__info">
    {
      props.temperature &&
      <p className="weather__key">Temperature:
        <span className="weather__value">{props.temperature}</span>
      </p>
    }
    {
      props.city &&
      props.country &&
      <p className="weather__key">Location:
        <span className="weather__value">{props.city}, { props.country}</span>
      </p>
    }
    {
      props.humidity &&
      <p className="weather__key">Humidity:
        <span className="weather__value"> {props.humidity}</span>
      </p>
    }
    {
      props.description &&
      <p className="weather__key">Conditions:
        <span className="weather__value"> {props.description}</span>
      </p>
    }
    {
      props.error &&
      <p>
        {props.error}
      </p>
    }
  </div>
);

export default Weather;
