import React, { useState, useRef, createRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import InputField from "./InputField";
import FORM_CONTENT from "../../content/formContent";

export default function TestForm({ ...props }) {
  const formId = "ti7kN6xH";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const recaptchaKey = "6Ldi_IMcAAAAAEdDhmtN1ZtkVapHfTGusSh-B87C";
  const recaptchaRef = useRef();

  const inputRefs = useRef([createRef(), createRef(), createRef()]);

  const [formState, setFormState] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState();
  const [recaptchaToken, setReCaptchaToken] = useState();

  const formLabel = FORM_CONTENT.formLabel;
  const formSubmitMessage = FORM_CONTENT.formSubmitMessage;
  const btnContent = FORM_CONTENT.formBtn.submit;

  function handleChange(name, value) {
    console.log(name);
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  function checkIsFormValid() {
    setIsValid(true);
    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      console.log(valid);
      if (!valid) {
        setIsValid(false);
      }
    }
  }

  function resetFormValues() {
    for (let i = 0; i < inputRefs.current.length; i++) {
      inputRefs.current[i].current.resetValue();
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    checkIsFormValid();
    if (isValid) {
      setSubmitting(true);
      await postSubmission();
      setSubmitting(false);
      setIsValid(false);
      resetFormValues();
      setFormState({});
    }
  }

  async function postSubmission() {
    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      await axios.post(formSparkUrl, payload);
      setMessage({
        class: "bg-green-500",
        text: formSubmitMessage.success,
      });
      recaptchaRef.current.reset();
    } catch (error) {
      console.log(error);
      setMessage({
        class: "bg-red-500",
        text: formSubmitMessage.failure,
      });
    }
  }

  function updateRecaptchaToken(token) {
    setReCaptchaToken(token);
  }

  return (
    <div className="p-4 md:p-8 w-full flex flex-col shadow-md bg-white">
      {message && (
        <div className={`my-4 text-white w-full p-4 ${message.class}`}>
          {message.text}
        </div>
      )}
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mt-3 mb-1 flex flex-col">
          <InputField
            ref={inputRefs.current[0]}
            placeholder="Your name"
            name={formLabel.name}
            type="text"
            label={formLabel.name}
            autoComplete="off"
            onChange={handleChange}
            validation="required"
          />
        </div>

        <div className="mt-3 mb-1 flex flex-col">
          <InputField
            ref={inputRefs.current[1]}
            placeholder="Your email"
            name={formLabel.email}
            type="text"
            label={formLabel.email}
            autoComplete="off"
            onChange={handleChange}
            validation="required|email"
          />
        </div>

        <div className="mt-3 mb-1 flex flex-col">
          <InputField
            ref={inputRefs.current[2]}
            placeholder="Your message"
            name={formLabel.message}
            type="message"
            label={formLabel.message}
            onChange={handleChange}
            validation="required"
          />
        </div>
        <div className="my-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />
        </div>

        <button
          disabled={submitting}
          className="mt-4 p-4 bg-yellow-700 text-white font-semibold lg:text-lg uppercase transform hover:scale-105 duration-500"
          type="submit"
        >
          {submitting ? "Submitting..." : btnContent}
        </button>
      </form>
    </div>
  );
}

TestForm.defaultProps = {
  content: "submit",
};
