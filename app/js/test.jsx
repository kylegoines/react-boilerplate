import * as math from "./mymodule";

import * as Nice from './testComponent';

var React = require('react');
var ReactDOM = require('react-dom');


console.log(Nice.cool);



ReactDOM.render(
	<Nice.cool />,
	document.getElementById('root')

)

console.log(math.pi)