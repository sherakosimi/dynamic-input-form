import React, { useState } from "react";
import introPhoto from "../images/hello.png";
import InputForm from "./Form";
type ListProps = {
  values: any;
};

const List = (props: ListProps) => {
  return (
    <ul className="list">
      {Object.keys(props.values).map((keyName, i) => (
        <li className="list__item" key={i}>
          <span className="input-label">{keyName}:</span>
          {props.values[keyName]}
        </li>
      ))}
    </ul>
  );
};

export default List;
