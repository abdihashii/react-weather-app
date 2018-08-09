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
  <div>
    { props.temperature && <p>Temperature: {props.temperature}</p> }
    { props.city && props.country && <p>Location: {props.city}, { props.country}</p> }
    { props.humidity && <p>Humidity: {props.humidity}</p> }
    { props.description && <p>Conditions: {props.description}</p> }
    { props.error && <p>{props.error}</p> }
  </div>
);

export default Weather;
