console.log("App.js is running!");

// JSX - JavaScript XML
var template = (
    <div>
        <h1> Indecision App </h1>
        <p> This is some info </p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1> Juan Manuel </h1>
        <p> Age: 28 </p>
        <p> Location: Cali </p>
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);