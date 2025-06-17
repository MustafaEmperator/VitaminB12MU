import React, { useState, useEffect } from "react";

function App() {
  const [testAnswers, setTestAnswers] = useState({
    fatigue: false,
    concentration: false,
    diet: false,
  });
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Zeigt Ergebnis erst an, wenn mindestens eine Checkbox angeklickt wurde
    const anyChecked = Object.values(testAnswers).some(Boolean);
    setShowResult(anyChecked);
  }, [testAnswers]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setTestAnswers((prev) => ({ ...prev, [name]: checked }));
  };

  const calculateResult = () => {
    const positiveAnswers = Object.values(testAnswers).filter(Boolean).length;
    if (positiveAnswers === 0)
      return "Dein Vitamin B12-Spiegel scheint optimal zu sein.";
    if (positiveAnswers === 1)
      return "Leichte Anzeichen für einen möglichen Mangel.";
    if (positiveAnswers === 2)
      return "Deutliche Hinweise auf einen Vitamin B12-Mangel. Arztbesuch empfohlen.";
    return "Starke Hinweise auf einen Mangel! Bitte konsultiere einen Arzt.";
  };

  return (
    <div style={styles.page}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <div style={styles.topBarContent}>Mustafa Ünalan</div>
      </div>

      {/* Hero Section */}
      <header style={{ ...styles.hero, ...styles.fadeInDown }}>
        <h1 style={{ ...styles.heroTitle, ...styles.letterFadeIn }}>
          Vitamin B12
        </h1>
        <p style={{ ...styles.heroSubtitle, ...styles.fadeInUp }}>
          Essentiell für Energie, Nervensystem & Blutbildung
        </p>
      </header>

      {/* Content Section */}
      <main style={styles.main}>
        <section style={{ ...styles.section, ...styles.fadeInUpDelayed(0) }}>
          <h2 style={styles.sectionTitle}>🧬 Was ist Vitamin B12?</h2>
          <p style={styles.sectionText}>
            Vitamin B12 (Cobalamin) ist ein lebenswichtiges wasserlösliches
            Vitamin, das der Körper nicht selbst herstellen kann. Es ist
            verantwortlich für die Bildung roter Blutkörperchen, die
            Zellteilung und die Gesundheit des Nervensystems.
          </p>
        </section>

        <section style={{ ...styles.section, ...styles.fadeInUpDelayed(0.15) }}>
          <h2 style={styles.sectionTitle}>💪 Wirkung von Vitamin B12</h2>
          <ul style={styles.list}>
            <li>Fördert die Blutbildung und beugt Anämie vor</li>
            <li>Unterstützt das zentrale Nervensystem</li>
            <li>Wichtig für die DNA-Synthese und Zellteilung</li>
            <li>Reduziert Müdigkeit und stärkt die Energie</li>
          </ul>
        </section>

        <section style={{ ...styles.section, ...styles.fadeInUpDelayed(0.3) }}>
          <h2 style={styles.sectionTitle}>⚠️ Mangelerscheinungen</h2>
          <ul style={styles.list}>
            <li>Müdigkeit und Schwächegefühl</li>
            <li>Konzentrationsprobleme und Gedächtnisstörungen</li>
            <li>Kribbeln in Händen und Füßen</li>
            <li>Stimmungsschwankungen und Reizbarkeit</li>
            <li>Verdauungsbeschwerden</li>
          </ul>
        </section>

        <section style={{ ...styles.section, ...styles.fadeInUpDelayed(0.45) }}>
          <h2 style={styles.sectionTitle}>🥦 Natürliche Quellen</h2>
          <ul style={styles.list}>
            <li>Fleisch (v.a. Leber, Rind, Schwein)</li>
            <li>Fisch (Lachs, Hering, Makrele)</li>
            <li>Eier und Milchprodukte</li>
            <li>Angereicherte Produkte für Veganer</li>
          </ul>
        </section>

        <section style={{ ...styles.section, ...styles.fadeInUpDelayed(0.6) }}>
          <h2 style={styles.sectionTitle}>📝 Selbsttest</h2>
          <p style={styles.sectionText}>
            Hast du folgende Symptome oder isst du wenig tierische Produkte?
            Kreuze alles an, was auf dich zutrifft:
          </p>

          <form style={styles.form}>
            <label style={styles.label}>
              <input
                type="checkbox"
                name="fatigue"
                checked={testAnswers.fatigue}
                onChange={handleChange}
                style={styles.checkbox}
              />
              Ich fühle mich oft müde und energielos.
            </label>
            <label style={styles.label}>
              <input
                type="checkbox"
                name="concentration"
                checked={testAnswers.concentration}
                onChange={handleChange}
                style={styles.checkbox}
              />
              Ich habe Konzentrationsprobleme und vergesse Dinge.
            </label>
            <label style={styles.label}>
              <input
                type="checkbox"
                name="diet"
                checked={testAnswers.diet}
                onChange={handleChange}
                style={styles.checkbox}
              />
              Ich esse selten oder keine tierischen Produkte.
            </label>
          </form>

          {showResult && (
            <div style={{ ...styles.resultBox, ...styles.fadeInUpDelayed(0.8) }}>
              <strong>Ergebnis:</strong> {calculateResult()}
            </div>
          )}
        </section>
      </main>

      <footer style={{ ...styles.footer, ...styles.fadeInUpDelayed(0.95) }}>
        <p>© 2025 Mustafa, Armando, Issam, Saly</p>
      </footer>
    </div>
  );
}

// Animations mit keyframes im JS-Stil
const fadeInDownKeyframes = {
  "0%": { opacity: 0, transform: "translateY(-20px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
};

const fadeInUpKeyframes = {
  "0%": { opacity: 0, transform: "translateY(20px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
};

const letterFadeInKeyframes = {
  "0%": { opacity: 0, letterSpacing: "0.5em" },
  "100%": { opacity: 1, letterSpacing: "normal" },
};

const styles = {
  page: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    color: "#1d1d1f",
    backgroundColor: "#fff",
    margin: 0,
    padding: 0,
    minHeight: "100vh",
    overflowX: "hidden",
  },
  topBar: {
    height: 30,
    backgroundColor: "#f5f5f7",
    borderBottom: "1px solid #d2d2d7",
    display: "flex",
    alignItems: "center",
    padding: "0 24px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    fontSize: 13,
    fontWeight: 600,
    color: "#6e6e73",
    letterSpacing: "0.05em",
    userSelect: "none",
  },
  topBarContent: {
    userSelect: "none",
  },
  hero: {
    paddingTop: 70, // Platz für TopBar
    paddingBottom: 100,
    textAlign: "center",
    borderBottom: "1px solid #d2d2d7",
    animation: "fadeInDown 1s ease forwards",
  },
  heroTitle: {
    fontSize: 64,
    fontWeight: 700,
    margin: "0 0 16px 0",
    letterSpacing: "-0.03em",
    animation: "letterFadeIn 1.2s ease forwards",
  },
  heroSubtitle: {
    fontSize: 22,
    color: "#6e6e73",
    fontWeight: 400,
    margin: 0,
    animation: "fadeInUp 1.5s ease forwards",
  },
  main: {
    maxWidth: 920,
    margin: "auto",
    padding: "60px 24px 120px",
  },
  section: {
    marginBottom: 80,
    opacity: 0,
    animationFillMode: "forwards",
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 600,
    borderBottom: "3px solid #0071e3",
    paddingBottom: 8,
    marginBottom: 24,
    maxWidth: 360,
  },
  sectionText: {
    fontSize: 18,
    lineHeight: 1.5,
    color: "#3c3c4399",
    maxWidth: 700,
  },
  list: {
    fontSize: 18,
    color: "#3c3c4399",
    paddingLeft: 20,
    maxWidth: 700,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    marginTop: 16,
    maxWidth: 700,
  },
  label: {
    fontSize: 18,
    color: "#1d1d1f",
    cursor: "pointer",
    userSelect: "none",
    transition: "color 0.3s ease",
  },
  checkbox: {
    marginRight: 14,
    width: 20,
    height: 20,
    cursor: "pointer",
  },
  resultBox: {
    marginTop: 36,
    backgroundColor: "#f5f5f7",
    border: "1px solid #d2d2d7",
    borderRadius: 10,
    padding: 20,
    fontSize: 18,
    color: "#1d1d1f",
    maxWidth: 700,
    animation: "fadeInUp 1s ease forwards",
  },
  footer: {
    textAlign: "center",
    borderTop: "1px solid #d2d2d7",
    padding: "24px 0",
    color: "#6e6e73",
    fontSize: 14,
    userSelect: "none",
    opacity: 0,
    animationFillMode: "forwards",
  },

  // Animation Helfer:
  fadeInDown: {
    animationName: "fadeInDown",
    animationDuration: "1s",
    animationTimingFunction: "ease",
    animationFillMode: "forwards",
  },
  fadeInUp: {
    animationName: "fadeInUp",
    animationDuration: "1s",
    animationTimingFunction: "ease",
    animationFillMode: "forwards",
  },
  fadeInUpDelayed: (delay) => ({
    opacity: 0,
    animationName: "fadeInUp",
    animationDuration: "1s",
    animationTimingFunction: "ease",
    animationFillMode: "forwards",
    animationDelay: `${delay}s`,
  }),
  letterFadeIn: {
    animationName: "letterFadeIn",
    animationDuration: "1.2s",
    animationTimingFunction: "ease",
    animationFillMode: "forwards",
  },
};

// Keyframes als global styles injizieren (muss in React App global geschehen)
const styleSheet = document.styleSheets[0];
const insertKeyframes = (name, frames) => {
  let css = `@keyframes ${name} {`;
  for (const key in frames) {
    css += `${key} {`;
    for (const prop in frames[key]) {
      css += `${prop}: ${frames[key][prop]};`;
    }
    css += '}';
  }
  css += '}';
  styleSheet.insertRule(css, styleSheet.cssRules.length);
};

insertKeyframes("fadeInDown", fadeInDownKeyframes);
insertKeyframes("fadeInUp", fadeInUpKeyframes);
insertKeyframes("letterFadeIn", letterFadeInKeyframes);

export default App;
