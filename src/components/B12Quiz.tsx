"use client";

import { useState } from "react";

export default function B12Quiz() {
  const [answer, setAnswer] = useState("");

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto mt-10">
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
  );
}

