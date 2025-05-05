import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/increment/1`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCount(data.value);
      });
  }, []);

  const handleClickCount = () => {
    setCount((count) => count + 1);

    fetch(`${apiUrl}/increment/1`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setCount(data.value);
      });
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClickCount}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
