import { useEffect, useState } from "react";

function CountriesFlags() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/countries")
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error("Erreur fetch:", err));
  }, []);

  return (
    <div>
      <h2>Pays et drapeaux</h2>
      {countries.length === 0 ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {countries.map((c, i) => (
            <li key={i}>{c.flag} {c.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CountriesFlags;
