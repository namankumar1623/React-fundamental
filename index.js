const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"Hey Im an H1"),
        React.createElement("h2",{},"Hey Im an H2")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Hey Im an H1"),
        React.createElement("h2",{},"Hey Im an H2")
    ]),
]);

const heading = React.createElement(
    "h1",
    {id: "head"},
    "Im an h1 tag"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)