import React, { useState } from "react";

export default function Tagesbedarf() {
  const [gewicht, setGewicht] = useState(70); // Startgewicht in kg

  // Tagesbedarf pro kg Körpergewicht (µg)
  const bedarf = (gewicht * 0.02).toFixed(2);

  return (
    <section>
      <h3>⚖️ Dein Körpergewicht (kg)</h3>
      <input
        type="number"
        min="30"
        max="200"
        value={gewicht}
        onChange={(e) => setGewicht(Number(e.target.value))}
        style={{ width: "80px", fontSize: "18px" }}
      />
      <p>
        Empfohlener Tagesbedarf an Vitamin B12: <strong>{bedarf} µg</strong>
      </p>
    </section>
  );
}

