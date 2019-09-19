console.log("App.js is running!");

app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: [
        'One',
        'Two',
    ]
}

var template = (
    <div>
        <h1> {app.title} </h1>
        {app.subtitle && <p> {app.subtitle} </p>}
        <p>
            {app.options.length > 0 ? 'Here are your options' : 'No options'}
        </p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>
);

var user = {
    name: 'Juan Manuel',
    age: 28,
    location: 'Philadelphia',
}

function getLocation(location) {
    if (location) {
        return <p> Location: {location} </p>;
    }
}

var userName = 'Andrew'
var userAge = 26;
var userLocation = 'New York';
var templateTwo = (
    <div>
        <h1> {user.name ? user.name : 'Anonymous'} </h1>
        {user.age >= 18 && <p> Age: {user.age} </p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);