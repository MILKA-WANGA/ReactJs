const react = require("react");
const reactDom = require("react-dom");
//create a component
function intro() {
  return (
    <div>
      <h1>Geting Started with React.Js</h1>
      <p>React.Js Programming is a frond-end language</p>
    </div>
  );
}
reactDom.render(<intro />, document.getElementById("root"));
