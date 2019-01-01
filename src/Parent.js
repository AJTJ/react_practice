import React from "react";

export default props => {
  return (
    <React.Fragment>
      <p style={{ color: "blue" }}>{props.blue}</p>
      <p style={{ color: "red" }}>{props.red}</p>
    </React.Fragment>
  );
};
