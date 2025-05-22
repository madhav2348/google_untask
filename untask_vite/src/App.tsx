import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainWindow from "./app/MainWindow";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainWindow />
    </>
  );
}

export default App;
