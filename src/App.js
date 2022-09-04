import React, { Component } from "react";
import Counter from "./components/Counter";
import "./App.css";

class App extends Component {
  state = { count: 0 };

  render() {
    return (
      <>
        {/* <div className="container">
          <h1>My Counter</h1>
          <p>{this.state.count}</p>
          <div>
            <button onClick={this.onAdd}>Add</button>
            <button onClick={this.onRemove}>Remove</button>
          </div>
        </div> */}
        <div className="container counter_1">
          <h1>My Counter</h1>
          <Counter onClick={(this.onAdd, this.onRemove)} />
        </div>
        <div className="container counter_2">
          <h1>My Second Counter</h1>
          <Counter onClick={(this.onAdd, this.onRemove)} />
        </div>
      </>
    );
  }
}

export default App;
