const parent = React.createElement("div", { id: "parent" }, [[React.createElement("h1", { id: "h1" }, "heading1"), React.createElement("h2", { id: "h2" }, "heading2")], [React.createElement("h1", { id: "h1" }, "heading1"), React.createElement("h2", { id: "h2" }, "heading2")]])
// const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);
root.render(parent);