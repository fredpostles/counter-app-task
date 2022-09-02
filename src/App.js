import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { count: 0 };

  onAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onRemove = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>My Counter</h1>
          <p>{this.state.count}</p>
          <div>
            <button onClick={this.onAdd}>Add</button>
            <button onClick={this.onRemove}>Remove</button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
