import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleLow(event) {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text convert to lowercase", "success");
  }

  function handleUp() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text convert to uppercase", "success");
  }

  function handleCopy(event) {
    navigator.clipboard.writeText(text);
    props.showAlert("text copied", "success");
  }

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div class="mb-3">
          <h1>{props.text}</h1>
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            onChange={handleChange}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            placeholder="Enter Here"
          />
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUp}>
          Convert To Upper
        </button>
        <button className="btn btn-primary" onClick={handleLow}>
          Convert To Lower
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-3" onClick={handleSpeak}>
          Speak
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Counter</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.trim().length} character
        </p>

        <div>
          <h3>Preview</h3>
          <p>
            {text.length === 0 ? "Enter Somenting in TextBox to preview" : text}
          </p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
