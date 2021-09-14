import React from "react";
import Button from "./Button";

export default function ContactForm() {
  return (
    <div className="col-span-3 bg-gray-700 p-10">
      <h6 className="mb-1.5 text-lg font-bold">Contact Us</h6>

      <div className="border mb-2.5 px-1 py-2 w-2/3 cursor-pointer">
        <p>Name:</p>
      </div>
      <div className="border mb-2.5 px-1 py-2 w-2/3 cursor-pointer">
        <p>Email:</p>
      </div>
      <div className="border mb-2.5 px-1 py-2 h-36 cursor-pointer">
        <p>Message:</p>
      </div>
      <Button content="Send" />
    </div>
  );
}
