import React, { useState, useRef, createRef } from "react";
import InputField from "./InputField";
import InputArea from "./InputArea";

export default function TestForm({ ...props }) {

  const defaultState = {
    name: "",
    email: "",
    message: "",
  };

  const inputRefs = useRef([
    createRef(), createRef(), createRef(),
  ]);

  const [data, setData] = useState({defaultState});

  function handleChange(name, value) {
    setData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    let isValid = true;

    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      if (!valid) {
        isValid = false;
      }
    }

    if (!isValid) {
      return
    }
    setData(defaultState);
    console.log(data)
    
    for (let i = 0; i < inputRefs.current.length; i++) {
      inputRefs.current[i].current.resetValue();
    }
  }

  return (
    <div className="h-screen">
      <div className=" p-8 w-2/3 lg:w-1/3 m-auto mt-20 flex flex-col border-2 shadow-lg">
        <h3 className="text-4xl font-bold mt-2 mb-4">
          <span>Contact Us</span>
        </h3>

        <form
          className="flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="mt-3 mb-1 flex flex-col">  
            <InputField
              ref={inputRefs.current[0]}
              placeholder="your name"
              name="name"
              type="text"
              label="name"
              autoComplete="off"
              onChange={handleChange}
              validation="required"
            />
          </div>

          <div className="mt-3 mb-1 flex flex-col">
            <InputField
              ref={inputRefs.current[1]}
              placeholder="your email"
              name="email"
              type="text"
              label="email"
              autoComplete="off"
              onChange={handleChange}
              validation="required|email"
            />
          </div>

          <div className="mt-3 mb-1 flex flex-col">
            <InputArea
              ref={inputRefs.current[2]}
              placeholder="your message"
              name="message"
              type="text"
              label="message"
              onChange={handleChange}
              validation="required"
            />
          </div>

          <button
            className="mt-4 py-2 px-4 bg-yellow-700 text-white uppercase transform hover:scale-105 duration-500"
            type="submit"
          >
           {props.content}
          </button>
        </form>
      </div>
    </div>
  );
}

TestForm.defaultProps = {
  content: "submit"
}