import React, { useState } from "react";

export default function PasswordInput() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <input
        type={show ? "text" : "password"}
        placeholder="Enter your password"
      />
      <button onClick={() => setShow(!show)}>Show</button>
    </div>
  );
}
