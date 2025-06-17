import React, { useState } from "react";

export default function App() {
  const [testAnswers, setTestAnswers] = useState({
    fatigue: false,
    concentration: false,
    diet: false,
  });

  // Neuer State für Slider
  const [dailyNeed, setDailyNeed] = useState(2.4); // in Mikrogramm (µg)

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setTestAnswers((prev) => ({ ...prev, [name]: checked }));
  };

  const positiveCount = Object.values(testAnswers).filter(Boolean).length;

  const getResultText = () => {
    if (positiveCount === 0)
      return "Dein Vitamin B12-Spiegel scheint optimal zu sein. Weiter so!";
    if (positiveCount === 1)
      return "Leichte Anzeichen für einen möglichen Mangel. Beobachte deine Symptome genau.";
    if (positiveCount === 2)
      return "Deutliche Hinweise auf einen Vitamin B12-Mangel. Ein Arztbesuch ist empfehlenswert.";
    if (positiveCount === 3)
      return "Starke Hinweise auf einen Vitamin B12-Mangel! Bitte suche unbedingt einen Arzt auf.";
  };

  return (
    <>
      {/* Globale Styles + Keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Text&display=swap');

        * {
          box-sizing: border-box;
        }
        body,html,#root {
          margin:0; padding:0; height:100%;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: #fff;
          color: #1d1d1f;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
        }

        .topbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 28px;
          background-color: #f5f5f7;
          border-bottom: 1px solid #d2d2d7;
          color: #6e6e73;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          padding: 0 24px;
          letter-spacing: 0.08em;
          user-select: none;
          z-index: 999;
          animation: fadeInDown 0.8s ease forwards;
        }

        main {
          max-width: 900px;
          margin: 80px auto 100px;
          padding: 0 20px;
        }

        h1 {
          font-weight: 700;
          font-size: 64px;
          letter-spacing: -0.03em;
          margin-bottom: 8px;
          animation: letterFadeIn 1.2s ease forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        h2.subtitle {
          font-weight: 400;
          font-size: 22px;
          color: #6e6e73;
          margin-top: 0;
          margin-bottom: 64px;
          opacity: 0;
          animation: fadeInUp 1.5s ease forwards;
        }

        section {
          margin-bottom: 80px;
          opacity: 0;
          animation: fadeInUp 1s ease forwards;
          animation-fill-mode: forwards;
        }
        section:nth-child(1) { animation-delay: 1.8s; }
        section:nth-child(2) { animation-delay: 2.0s; }
        section:nth-child(3) { animation-delay: 2.2s; }
        section:nth-child(4) { animation-delay: 2.4s; }
        section:nth-child(5) { animation-delay: 2.6s; }
        section:nth-child(6) { animation-delay: 2.8s; } /* für neue Sektionen */

        h3 {
          font-size: 28px;
          font-weight: 600;
          border-bottom: 3px solid #0071e3;
          padding-bottom: 8px;
          margin-bottom: 24px;
          max-width: 360px;
        }

        p, ul {
          font-size: 18px;
          line-height: 1.5;
          color: #3c3c4399;
          max-width: 700px;
          margin-top: 0;
        }

        ul {
          padding-left: 20px;
        }

        label {
          display: block;
          font-size: 18px;
          margin-bottom: 16px;
          cursor: pointer;
          user-select: none;
          color: #1d1d1f;
          transition: color 0.3s ease;
        }
        label:hover {
          color: #0071e3;
        }

        input[type="checkbox"] {
          margin-right: 12px;
          width: 20px;
          height: 20px;
          cursor: pointer;
        }

        input[type="range"] {
          width: 100%;
          margin: 12px 0 24px;
          cursor: pointer;
        }

        .result {
          max-width: 700px;
          background-color: #f5f5f7;
          border: 1px solid #d2d2d7;
          border-radius: 12px;
          padding: 24px;
          font-size: 20px;
          font-weight: 600;
          color: #1d1d1f;
          margin-top: 32px;
          animation: fadeInUp 1s ease forwards;
        }

        .infocard {
          background-color: #e6f0ff;
          border: 2px solid #0071e3;
          border-radius: 12px;
          padding: 24px;
          max-width: 700px;
          font-size: 18px;
          color: #003a75;
          margin-bottom: 40px;
          box-shadow: 0 4px 8px rgba(0,113,227,0.2);
        }

        .faq-item {
          margin-bottom: 24px;
        }

        .faq-question {
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 8px;
          color: #0071e3;
          user-select: none;
        }

        .faq-answer {
          padding-left: 20px;
          color: #3c3c4399;
        }

        footer {
          text-align: center;
          border-top: 1px solid #d2d2d7;
          padding: 32px 0;
          color: #6e6e73;
          font-size: 14px;
          user-select: none;
          opacity: 0;
          animation: fadeInUp 1s ease forwards;
          animation-delay: 3s;
          animation-fill-mode: forwards;
        }

        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes letterFadeIn {
          0% {
            opacity: 0;
            letter-spacing: 0.5em;
          }
          100% {
            opacity: 1;
            letter-spacing: normal;
          }
        }
      `}</style>

      {/* Top Bar */}
      <div className="topbar">Mustafa Ünalan</div>

      <main>
        <h1>Vitamin B12</h1>
        <h2 className="subtitle">Essentiell für Energie, Nervensystem & Blutbildung</h2>

        <section>
          <h3>🧬 Was ist Vitamin B12?</h3>
          <p>
            Vitamin B12 (Cobalamin) ist ein lebenswichtiges wasserlösliches Vitamin,
            das der Körper nicht selbst herstellen kann. Es ist verantwortlich für
            die Bildung roter Blutkörperchen, die Zellteilung und die Gesundheit des
            Nervensystems.
          </p>
        </section>

        <section>
          <h3>💪 Wirkung von Vitamin B12</h3>
          <ul>
            <li>Fördert die Blutbildung und beugt Anämie vor</li>
            <li>Unterstützt das zentrale Nervensystem</li>
            <li>Wichtig für die DNA-Synthese und Zellteilung</li>
            <li>Reduziert Müdigkeit und stärkt die Energie</li>
          </ul>
        </section>

        <section>
          <h3>⚠️ Mangelerscheinungen</h3>
          <ul>
            <li>Müdigkeit und Schwächegefühl</li>
            <li>Konzentrationsprobleme und Gedächtnisstörungen</li>
            <li>Kribbeln in Händen und Füßen</li>
            <li>Stimmungsschwankungen und Reizbarkeit</li>
            <li>Verdauungsbeschwerden</li>
          </ul>
        </section>

        {/* NEU: Infokarte zum B12-Mangel */}
        <section className="infocard">
          <h3>ℹ️ Infokarte: B12-Mangel</h3>
          <p>
            Ein Vitamin B12-Mangel kann zu ernsthaften gesundheitlichen Problemen führen, 
            wie z. B. Blutarmut, Nervenschäden und chronischer Müdigkeit. Besonders 
            gefährdet sind Vegetarier, Veganer und ältere Menschen.
          </p>
        </section>

        <section>
          <h3>🥦 Natürliche Quellen</h3>
          <ul>
            <li>Fleisch (v.a. Leber, Rind, Schwein)</li>
            <li>Fisch (Lachs, Hering, Makrele)</li>
            <li>Eier und Milchprodukte</li>
            <li>Angereicherte Produkte für Veganer</li>
          </ul>
        </section>

        {/* NEU: Slider für Tagesbedarf */}
        <section>
          <h3>🎚️ Tagesbedarf an Vitamin B12 einstellen</h3>
          <p>Stelle deinen empfohlenen Tagesbedarf ein: <b>{dailyNeed.toFixed(1)} µg</b></p>
          <input
            type="range"
            min="1"
            max="5"
            step="0.1"
            value={dailyNeed}
            onChange={(e) => setDailyNeed(parseFloat(e.target.value))}
          />
          <p>
            Der empfohlene Tagesbedarf für Erwachsene liegt bei etwa 2.4 µg Vitamin B12.
          </p>
        </section>

        {/* FAQ-Sektion */}
        <section>
          <h3>❓ Häufig gestellte Fragen (FAQ)</h3>

          <FAQItem
            question="Wie erkenne ich einen Vitamin B12-Mangel?"
            answer="Typische Symptome sind Müdigkeit, Konzentrationsschwierigkeiten und Kribbeln in Händen und Füßen."
          />
          <FAQItem
            question="Wer ist besonders gefährdet?"
            answer="Vegetarier, Veganer, ältere Menschen und Personen mit Magen-Darm-Erkrankungen."
          />
          <FAQItem
            question="Wie kann ich meinen B12-Spiegel testen lassen?"
            answer="Durch eine Blutuntersuchung beim Arzt."
          />
        </section>

        <section>
          <h3>📝 Selbsttest</h3>
          <p>Kreuze alles an, was auf dich zutrifft:</p>

          <label>
            <input
              type="checkbox"
              name="fatigue"
              checked={testAnswers.fatigue}
              onChange={handleChange}
            />
            Ich fühle mich oft müde und energielos.
          </label>
          <label>
            <input
              type="checkbox"
              name="concentration"
              checked={testAnswers.concentration}
              onChange={handleChange}
            />
            Ich habe Konzentrationsprobleme und vergesse Dinge.
          </label>
          <label>
            <input
              type="checkbox"
              name="diet"
              checked={testAnswers.diet}
              onChange={handleChange}
            />
            Ich esse selten oder keine tierischen Produkte.
          </label>

          {positiveCount > 0 && (
            <div className="result" role="alert">
              Ergebnis: {getResultText()}
            </div>
          )}
        </section>
      </main>

      <footer>© 2025 Mustafa, Armando, Issam, Saly</footer>
    </>
  );
}

// FAQ-Komponente (klein, interaktiv)
function FAQItem({ question, answer }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setOpen(!open);
          }
        }}
      >
        {question}
      </div>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
}
