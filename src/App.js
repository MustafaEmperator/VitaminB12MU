import React, { useState } from "react";

function App() {
  const [testAnswers, setTestAnswers] = useState({
    fatigue: false,
    concentration: false,
    diet: false,
  });

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
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Vitamin B12</h1>
        <p style={styles.heroSubtitle}>
          Essentiell für Energie, Nervensystem & Blutbildung
        </p>
      </header>

      {/* Content Section */}
      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🧬 Was ist Vitamin B12?</h2>
          <p style={styles.sectionText}>
            Vitamin B12 (Cobalamin) ist ein lebenswichtiges wasserlösliches
            Vitamin, das der Körper nicht selbst herstellen kann. Es ist
            verantwortlich für die Bildung roter Blutkörperchen, die
            Zellteilung und die Gesundheit des Nervensystems.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>💪 Wirkung von Vitamin B12</h2>
          <ul style={styles.list}>
            <li>Fördert die Blutbildung und beugt Anämie vor</li>
            <li>Unterstützt das zentrale Nervensystem</li>
            <li>Wichtig für die DNA-Synthese und Zellteilung</li>
            <li>Reduziert Müdigkeit und stärkt die Energie</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>⚠️ Mangelerscheinungen</h2>
          <ul style={styles.list}>
            <li>Müdigkeit und Schwächegefühl</li>
            <li>Konzentrationsprobleme und Gedächtnisstörungen</li>
            <li>Kribbeln in Händen und Füßen</li>
            <li>Stimmungsschwankungen und Reizbarkeit</li>
            <li>Verdauungsbeschwerden</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🥦 Natürliche Quellen</h2>
          <ul style={styles.list}>
            <li>Fleisch (v.a. Leber, Rind, Schwein)</li>
            <li>Fisch (Lachs, Hering, Makrele)</li>
            <li>Eier und Milchprodukte</li>
            <li>Angereicherte Produkte für Veganer</li>
          </ul>
        </section>

        <section style={styles.section}>
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

          <div style={styles.resultBox}>
            <strong>Ergebnis:</strong> {calculateResult()}
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 Mustafa, Armando, Issam, Saly</p>
      </footer>
    </div>
  );
}

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
  },
  topBarContent: {
    userSelect: "none",
  },
  hero: {
    paddingTop: 60 + 40, // TopBar + Abstand
    paddingBottom: 100,
    textAlign: "center",
    borderBottom: "1px solid #d2d2d7",
  },
  heroTitle: {
    fontSize: 64,
    fontWeight: 700,
    margin: "0 0 16px 0",
    letterSpacing: "-0.03em",
  },
  heroSubtitle: {
    fontSize: 22,
    color: "#6e6e73",
    fontWeight: 400,
    margin: 0,
  },
  main: {
    maxWidth: 920,
    margin: "auto",
    padding: "60px 24px 120px",
  },
  section: {
    marginBottom: 80,
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
  },
  footer: {
    textAlign: "center",
    borderTop: "1px solid #d2d2d7",
    padding: "24px 0",
    color: "#6e6e73",
    fontSize: 14,
    userSelect: "none",
  },
};

export default App;
