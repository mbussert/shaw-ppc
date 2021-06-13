import React from "react";
import "./style.scss";

function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;
