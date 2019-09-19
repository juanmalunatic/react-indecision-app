"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML

app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer"
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
    React.createElement(
        "p",
        null,
        " ",
        app.subtitle,
        " "
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
    name: "Juan Manuel",
    age: 28,
    location: "Philadelphia"
};
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
        user.name,
        " "
    ),
    React.createElement(
        "p",
        null,
        " Age: ",
        user.age,
        " "
    ),
    React.createElement(
        "p",
        null,
        " Location: ",
        user.location,
        " "
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
