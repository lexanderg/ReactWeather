var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
    return (
    <div>
      <h3 className="text-center">Examples</h3>
      <p>Here a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Amsterdam'>Amsterdam, NL</Link>
        </li>
        <li>
          <Link to='/?location=London'>London, UK</Link>
        </li>
      </ol>
    </div>
    )
}
module.exports = Examples;
