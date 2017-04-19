var React = require('react');

var WeatherMessage = (props) => {
  return (
    <div>
      <p><b>It's {props.temp} in {props.location}</b></p>
    </div>
  )
}

module.exports = WeatherMessage;
