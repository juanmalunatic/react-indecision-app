const app = document.getElementById("app");


let visible = false;
const onToggleDetails = () => {
    visible = !visible;
    render();
}

const render = () => {

    const template = (
        <div>
            <h1> Visibility toggle </h1>
            <button onClick={onToggleDetails}>
                {visible ? "Hide details" : "Show details"}
            </button>
            { visible && (
                <p> 
                    Hey. These are some details you can now see! 
                </p>
            )}
        </div>
    );

    ReactDOM.render(template, app);
}
render();