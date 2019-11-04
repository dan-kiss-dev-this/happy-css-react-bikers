function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

class Biker extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      distance: 0 });}


  distanceBiked() {
    setInterval(() => {this.setState({ distance: this.state.distance + 1 });}, 1000);
  }

  componentDidMount() {
    this.distanceBiked();
  }

  render() {
    return (
      React.createElement("div", { className: "bike" },
      React.createElement("h1", { className: "header" }, "We biked ", this.state.distance, " miles!"),
      React.createElement("img", { src: "https://cdn.pixabay.com/photo/2016/10/06/05/19/engagement-1718244_960_720.jpg" }),
      React.createElement("div", { className: "spinningWheel wheel1" }),

      React.createElement("div", { className: "spinningWheel wheel2" })));



  }}


ReactDOM.render(
React.createElement(Biker, null),
document.getElementById('root'));