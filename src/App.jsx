import Navbar from "./components/Navbar";
import { useState } from "react";
import "./App.css";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { ChromePicker } from "react-color";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("#ff0000");

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    console.log(newColor.hex);
  };

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  function toggle() {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#072b36";
      showAlert("Dark Mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar
        mode={mode}
        handler={toggle}
        color={color}
        handlerC={handleColorChange}
      />
      <Alert alert={alert} />

      <div className="container">
        <TextForm text="Enter Text Here" mode={mode} showAlert={showAlert} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
