import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  onAdd = () => {
    this.setState((previous) => ({ count: previous.count + 1 }));
  };

  onRemove = () => {
    this.setState((previous) => ({ count: previous.count - 1 }));
  };

  render() {
    return (
      <div className="counter">
        <p>{this.state.count}</p>
        <div>
          <button onClick={this.onAdd}>Add</button>
          <button onClick={this.onRemove}>Remove</button>
        </div>
      </div>
    );
  }
}

export default Counter;
