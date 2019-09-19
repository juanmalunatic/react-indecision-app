console.log("App.js is running!");

// JSX - JavaScript XML

app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
}

var template = (
    <div>
        <h1> {app.title} </h1>
        <p> {app.subtitle} </p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>
);

var user = {
    name: "Juan Manuel",
    age: 28,
    location: "Philadelphia"
}
var userName = 'Andrew'
var userAge = 26;
var userLocation = 'New York';
var templateTwo = (
    <div>
        <h1> {user.name} </h1>
        <p> Age: {user.age} </p>
        <p> Location: {user.location} </p>
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);