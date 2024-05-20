const heading = React.createElement(
"h1",
{id : "heading"},
"Hello world from react!!!!!!!!");

const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"Hi this is nested h1")))

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(parent);