import React, { Component, lazy, Suspense } from "react";

import { createPortal } from "react-dom";

import ErrorBoundary from "./ErrorBoundary";

const Parent = lazy(() => import("./Parent"));
const portalContainer = document.getElementById("other_root");

const MagicEnergy = () => {
  return <div>Magic Energy Words!</div>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }
  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading!</div>}>
            <Parent
              blue={<span>This text is blue</span>}
              red={<span>This text is red</span>}
            />
            <div>
              {this.state.x}, {this.state.y}
            </div>
          </Suspense>
          {createPortal(<MagicEnergy />, portalContainer)}
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
