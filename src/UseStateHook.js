import { useState } from "react";

export default function UseStateHook() {
  const [inputText, setInputText] = useState("Guest");
  function handleChangeText(e) {
    setInputText(e.target.value);
  }
  return (
    <>
      <input type="text" value={inputText} onChange={handleChangeText} />
      <p>You Typed: {inputText}</p>
      <button onClick={() => setInputText("")}>Reset State</button>
    </>
  );
}
