"use strict";

var app = document.getElementById("app");

var visible = false;
var onToggleDetails = function onToggleDetails() {
    visible = !visible;
    render();
};

var render = function render() {

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            " Visibility toggle "
        ),
        React.createElement(
            "button",
            { onClick: onToggleDetails },
            visible ? "Hide details" : "Show details"
        ),
        visible && React.createElement(
            "p",
            null,
            "Hey. These are some details you can now see!"
        )
    );

    ReactDOM.render(template, app);
};
render();
