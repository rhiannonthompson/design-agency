import React, { useState, forwardRef, useImperativeHandle } from "react";

const InputField = forwardRef((props, ref) => {

  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
    props.onChange(event.target.name, event.target.value);
  }

  function validateEmail(email) {
    return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
  }

  function resetMessage() {
    setMessage("");
  }

  function resetValue() {
    setValue("");
  }

  function validate() {
    
    let valid = true;
    resetMessage();

    if (props.validation) {
      const rules = props.validation.split("|");
      for (let i = 0; i < rules.length; i++) {
        const current = rules[i];
        console.log(current);
        if (current === "required") {
          if (!value) {
             setMessage("Please enter your details");
            valid = false;
          }
        }
        if (current === "email") {
          console.log("here")
          console.log(value)
          if (!validateEmail(value)) {
            setMessage("Please enter a valid email");
            valid = false;
          }
        }
      }      
    }
    return valid
  }

  useImperativeHandle(ref, () => {
    return {
      validate: () => validate(),
      resetValue: () => resetValue(),
    };
  });

  return (
    <div className="mt-3 mb-1 flex flex-col">
      {props.label && (
        <label className="pb-2 capitalize font-bold">{props.label}</label>
      )}
      <input
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        value={props.value ? props.value : value}
        autoComplete={props.autoComplete}
        onChange={(event) => handleChange(event)}
        className="border-2 p-2"
      />
      {message && <p>{message}</p>}
    </div>
  );
});

InputField.defaultProps = {
  placeholder: "",
  name: "",
  type: "text",
  value: "",
  autoComplete: "off",
  validation: "",
};

export default InputField;
