var React = require('react');
var ReactDOM = require('react-dom');

export var cool = React.createClass({
    render: function() {
        var names = ['Jake', 'Jon', 'awesome'];
        var namesList = names.map(function(name){
                        return <li>{name}</li>;
                      })

        return  <ul>{ namesList }</ul>
    }
});