import { useState } from "react";
import "./App.css";
import SaveableTextInput from "./components/SaveableTextInput";
import { IncreaseElement } from "./components/IncreaseElement";

type Component = "SaveableTextInput" | "IncreaseElement";

function App() {
  const [component, setComponent] = useState<Component>("SaveableTextInput");
  return (
    <>
      <button onClick={() => setComponent("SaveableTextInput")}>
        SaveableTextInput
      </button>
      <button onClick={() => setComponent("IncreaseElement")}>
        IncreaseElement
      </button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {component === "SaveableTextInput" ? (
          <SaveableTextInput />
        ) : (
          <IncreaseElement />
        )}
      </div>
    </>
  );
}

export default App;
