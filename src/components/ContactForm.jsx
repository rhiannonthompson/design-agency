import React, { useState } from "react";

export default function ContactForm() {
  const defaultFormState = {
    name: "",
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState(defaultFormState);
  const [submitting, setSubmitting] = useState(false);

  async function submitForm(event) {
    event.preventDefault();
    setSubmitting(true);
    console.log(event);
    setSubmitting(false);
  }

  function updateFormControl(event) {
    console.log(event.target); 
    const { id, value } = event.target;
    const formKey = id;
    const updateFormState = { ...formState };
    updateFormState[formKey] = value;
    setFormState(updateFormState);
  }

  return (
    <div className="h-screen">
      <div className=" p-8 w-2/3 lg:w-1/3 m-auto mt-20 flex flex-col border-2 shadow-lg">
        <h3 className="text-4xl font-bold mt-2 mb-4">
          <span>Contact Us</span>
        </h3>

        <form className="flex flex-col" onSubmit={submitForm}>
          <div className="mt-3 mb-1 flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              onChange={updateFormControl}
              type="text"
              id="name"
              className="border-2 p-2"
              value={formState.name}
            />
          </div>

          <div className="mt-3 mb-1 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              onChange={updateFormControl}
              type="email"
              id="email"
              className="border-2 p-2"
              value={formState.email}
            />
          </div>

          <div className="mt-3 mb-1 flex flex-col">
            <label htmlFor="email">Message</label>
            <textarea
              onChange={updateFormControl}
              id="message"
              className="border-2 p-2 h-28"
              value={formState.message}
            />
          </div>

          <button
            disabled={submitting}
            className="py-2 px-4 bg-yellow-700 text-white uppercase transform hover:scale-105 duration-500"
          >
            {submitting ? "submitting..." : "submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
