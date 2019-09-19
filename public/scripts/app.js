"use strict";

console.log("App.js is running!");

app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['One', 'Two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        " ",
        app.title,
        " "
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        " ",
        app.subtitle,
        " "
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        ),
        React.createElement(
            "li",
            null,
            "Item three"
        )
    )
);

var user = {
    name: 'Juan Manuel',
    age: 28,
    location: 'Philadelphia'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            " Location: ",
            location,
            " "
        );
    }
}

var userName = 'Andrew';
var userAge = 26;
var userLocation = 'New York';
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        " ",
        user.name ? user.name : 'Anonymous',
        " "
    ),
    user.age >= 18 && React.createElement(
        "p",
        null,
        " Age: ",
        user.age,
        " "
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);