import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [countries, setCountries] = useState([]);

  const fetchMessage = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/message");
      const data = await res.json();
      setMessage(data.msg);
    } catch (err) {
      console.error(err);
      setMessage("Impossible de récupérer le message");
    }
  };

  const fetchCountries = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/countries");
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      console.error(err);
      setCountries([]);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + FastAPI Demo</h1>
      <button onClick={fetchMessage}>Obtenir un message</button>
      {message && <p>{message}</p>}

      <button onClick={fetchCountries} style={{ marginTop: "20px" }}>
        Obtenir les pays
      </button>
      {countries.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {countries.map((c, i) => (
            <li key={i} style={{ fontSize: "24px", margin: "5px 0" }}>
              {c.flag} {c.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
