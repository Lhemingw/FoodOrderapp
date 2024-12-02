import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;

//forwardRef is for this input control which people do not need to create again and again
//use the properties and here I am going to say actually the input css classes he is going to ignore
//storing the value of css and teh code