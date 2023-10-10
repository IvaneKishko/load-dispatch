import React from "react";

import './Input.css'

const Input = (props) => {

  let element;

  if (props.element === "input") {
    element = (
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        required
      />
    );
  } else if (props.element === "email") {
    element = (
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        required
      />
    );
  } else if (props.element === "password") {
    element = (
      <input
        type="password"
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        required
      />
    );
  } else if (props.element === "radio") {
    element = (
      <input
        type="radio"
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
        required
      />
    );
  }else if (props.element === "date") {
    element = (
      <input
        type="date"
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
        required
      />
    );
  }

  return (
    <div className={`${props.element !== 'radio' && 'form-control'}`}>
      <label for={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
