import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/increment/1`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCount(data.value);
      });
  }, [apiUrl]);

  const handleClickCount = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/increment/1`, {
        method: "POST",
      });
      const data = await res.json();
      setCount(data.value);
    } catch (error) {
      console.error("Fout bij ophalen:", error);
    } finally {
      setLoading(false);
    }
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
        <button onClick={handleClickCount} disabled={loading}>
          {loading ? "⏳ Laden..." : `count is ${count}`}
        </button>
      </div>
    </>
  );
}

export default App;
