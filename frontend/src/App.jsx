import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const apiUrl = import.meta.env.VITE_API_URL;

  // useEffect(() => {
  //   // fetch(`${apiUrl}/hello`)
  //   //   .then(res => res.json())
  //   //   .then(data => console.log(data.message));
  // }, []);

  const handleClickCount = () => {
    setCount((count) => count + 1);
    console.log("new count: " + count);

    fetch(`${apiUrl}/increment/1`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => console.log("Teller:", data.value));
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
