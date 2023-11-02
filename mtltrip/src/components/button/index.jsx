import React from "react";

// Styles
import classes from "./Button.module.scss";

function Button({ name, id, onButtonClick, label, type, isDisabled }) {
  return (
    <button
      className={type === "primary" ? classes.primary : classes.secondary}
      disabled={isDisabled}
      id={id}
      name={name}
      onClick={onButtonClick}
      type="button"
    >
      {label}
    </button>
  );
}

export default Button;
