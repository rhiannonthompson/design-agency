import React, { useState, forwardRef, useImperativeHandle } from "react";
import FORM_CONTENT from "../../content/formContent";

const InputField = forwardRef((props, ref) => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const {inputEmpty, invalidEmail} = FORM_CONTENT.formControlMessage;

  function handleChange(event) {
    setValue(event.target.value);
    props.onChange(event.target.name, event.target.value);
  }

  function validateEmail(email) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
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
        if (current === "required") {
          if (!value) {
            setMessage(inputEmpty);
            valid = false;
          }
        }
        if (current === "email") {
          if (!validateEmail(value)) {
            setMessage(invalidEmail);
            valid = false;
          }
        }
      }
    }
    return valid;
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
        <label className="pb-2 capitalize text-xl text-gray-800 font-bold">{props.label}</label>
      )}
      {props.type === "message" ? (
        <textarea
          placeholder={props.placeholder}
          name={props.name}
          value={props.value ? props.value : value}
          onChange={(event) => handleChange(event)}
          className="border-2 p-2"
        />
      ) : (
        <input
          placeholder={props.placeholder}
          name={props.name}
          type={props.type}
          value={props.value ? props.value : value}
          autoComplete={props.autoComplete}
          onChange={(event) => handleChange(event)}
          className="border-2 p-2"
        />
      )}
      {message &&
        <div className="mt-2 ml-0.5">
          <p className="text-red-500 font-bold">{message}</p>
        </div>
      }
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
