"use client";

import { useState } from "react";

export default function B12Quiz() {
  const [answer, setAnswer] = useState("");
  const [bedarf, setBedarf] = useState(4); // Standardbedarf in µg

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg max-w-xl mx-auto mt-10 space-y-10">

      {/* Quiz */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Bekommst du genug Vitamin B12?</h2>
        <p className="mb-4 text-center text-gray-700">Wie oft isst du tierische Produkte?</p>

        <div className="flex flex-col space-y-3">
          <button onClick={() => setAnswer("Du bekommst wahrscheinlich genug B12!")} className="border p-2 rounded-md hover:bg-blue-100">
            Täglich
          </button>
          <button onClick={() => setAnswer("Du solltest deine B12-Zufuhr im Blick behalten.")} className="border p-2 rounded-md hover:bg-blue-100">
            Mehrmals pro Woche
          </button>
          <button onClick={() => setAnswer("Lass deine B12-Werte besser prüfen!")} className="border p-2 rounded-md hover:bg-blue-100">
            Selten oder nie
          </button>
        </div>

        {answer && (
          <div className="mt-6 p-4 bg-blue-100 text-blue-800 rounded-md text-center font-medium">
            {answer}
          </div>
        )}
      </div>

      {/* Infokarte zu B12-Mangel */}
      <div className="bg-red-50 border border-red-200 p-4 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-red-800 mb-2">Was passiert bei Vitamin-B12-Mangel?</h3>
        <p className="text-gray-800">
          Ein Mangel an Vitamin B12 kann zu Müdigkeit, Konzentrationsproblemen, Nervenschäden und sogar Depressionen führen. Besonders Veganer:innen sollten regelmäßig ihren B12-Status prüfen.
        </p>
      </div>

      {/* Slider für Tagesbedarf */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Wie viel B12 brauchst du?</h3>
        <label className="block mb-2 text-gray-700">Tagesbedarf (in µg): {bedarf}</label>
        <input
          type="range"
          min="1"
          max="10"
          value={bedarf}
          onChange={(e) => setBedarf(Number(e.target.value))}
          className="w-full"
        />
        <p className="mt-2 text-sm text-gray-600">Erwachsene benötigen im Schnitt ca. 4 µg täglich.</p>
      </div>

      {/* FAQs */}
      <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Häufige Fragen (FAQ)</h3>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Wo ist B12 enthalten?</strong><br />
            In Fleisch, Fisch, Eiern und Milchprodukten. Vegane Alternativen sind meist angereichert.
          </li>
          <li>
            <strong>Kann ich B12 überdosieren?</strong><br />
            Nein, bei gesunder Niere wird ein Überschuss ausgeschieden.
          </li>
          <li>
            <strong>Wie erkenne ich einen Mangel?</strong><br />
            Bluttest beim Arzt, Symptome wie Müdigkeit oder Kribbeln.
          </li>
        </ul>
      </div>
    </div>
  );
}
