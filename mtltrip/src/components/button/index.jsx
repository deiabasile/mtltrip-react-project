import React from "react";
import classes from "./Button.module.scss";

function Button({ name, id, onButtonClick, label, type, isDisabled }) {
  console.log("test type", type);
  return (
    <button
      className={classes.container}
      name={name}
      id={id}
      onClick={onButtonClick}
      type="button"
      disabled={isDisabled}
    >
      {label}
    </button>
  );
}

export default Button;
