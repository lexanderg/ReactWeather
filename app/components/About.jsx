var React = require('react');

var About = () => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
        <p>This is a weather application built on React!</p>
        <p>Some used tools:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - Javascript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open weather map</a> - API to get weather data by city.
          </li>
        </ul>
     </div>
)
}

module.exports = About;
