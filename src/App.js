import React, { useState } from 'react';

function App() {
  const [testAnswers, setTestAnswers] = useState({
    fatigue: false,
    concentration: false,
    diet: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setTestAnswers(prev => ({ ...prev, [name]: checked }));
  };

  const calculateResult = () => {
    const positiveAnswers = Object.values(testAnswers).filter(v => v).length;
    if (positiveAnswers === 0) return 'Dein Vitamin B12-Spiegel scheint gut zu sein.';
    if (positiveAnswers === 1) return 'Ein leichter Verdacht auf B12-Mangel – beobachte deine Symptome und achte auf deine Ernährung.';
    if (positiveAnswers === 2) return 'Es gibt Anzeichen für einen möglichen B12-Mangel. Ein Arztbesuch wäre sinnvoll.';
    return 'Starke Hinweise auf einen Vitamin B12-Mangel! Bitte konsultiere bald deinen Arzt.';
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Vitamin B12</h1>
        <p style={styles.subtitle}>Essentiell für deine Gesundheit</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🧬 Was ist Vitamin B12?</h2>
        <p style={styles.text}>
          Vitamin B12, auch Cobalamin genannt, ist ein lebenswichtiges wasserlösliches Vitamin.
          Es ist essentiell für die Blutbildung, das Nervensystem und die Zellteilung. Der Körper kann es nicht selbst herstellen,
          deshalb muss es über die Nahrung aufgenommen werden.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>💪 Wirkung von Vitamin B12</h2>
        <ul style={styles.list}>
          <li>Fördert die Bildung roter Blutkörperchen und verhindert Anämie</li>
          <li>Unterstützt das zentrale Nervensystem und die Signalübertragung zwischen Nerven</li>
          <li>Wichtig für die DNA-Synthese und Zellteilung</li>
          <li>Trägt zur Energieproduktion bei und reduziert Müdigkeit</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>⚠️ Mangelerscheinungen</h2>
        <ul style={styles.list}>
          <li>Müdigkeit, Erschöpfung und Schwäche</li>
          <li>Konzentrations- und Gedächtnisprobleme</li>
          <li>Kribbeln oder Taubheitsgefühle in Händen und Füßen</li>
          <li>Depression, Stimmungsschwankungen und Reizbarkeit</li>
          <li>Verdauungsbeschwerden und Appetitverlust</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🥦 Natürliche Quellen von Vitamin B12</h2>
        <p style={styles.text}>
          Vitamin B12 kommt hauptsächlich in tierischen Lebensmitteln vor:
        </p>
        <ul style={styles.list}>
          <li>Fleisch (Leber, Rind, Schwein, Geflügel)</li>
          <li>Fisch (Lachs, Hering, Makrele, Thunfisch)</li>
          <li>Eier und Milchprodukte</li>
          <li>Für Veganer: angereicherte Produkte wie Pflanzendrinks oder Nahrungsergänzungsmittel</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📝 Selbsttest: Bist du gefährdet?</h2>
        <p style={styles.text}>
          Beantworte die Fragen und finde heraus, ob du einen möglichen Vitamin B12-Mangel haben könntest:
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
            Ich habe Schwierigkeiten, mich zu konzentrieren oder vergesse Dinge häufig.
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

      <footer style={styles.footer}>
        <p>© 2025 Mustafa, Armando, Issam, Saly</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen",
    color: '#1d1d1f',
    backgroundColor: '#fff',
    maxWidth: 900,
    margin: '40px auto',
    padding: '0 20px',
    lineHeight: 1.6,
  },
  header: {
    borderBottom: '1px solid #d2d2d7',
    paddingBottom: 20,
    marginBottom: 40,
    textAlign: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 48,
    margin: 0,
  },
  subtitle: {
    fontWeight: 400,
    fontSize: 20,
    color: '#6e6e73',
    marginTop: 8,
  },
  section: {
    marginBottom: 50,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 600,
    borderBottom: '2px solid #0071e3',
    paddingBottom: 8,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    color: '#3c3c4399',
  },
  list: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#3c3c4399',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    marginTop: 16,
  },
  label: {
    fontSize: 18,
    color: '#1d1d1f',
    cursor: 'pointer',
    userSelect: 'none',
  },
  checkbox: {
    marginRight: 12,
    width: 20,
    height: 20,
    cursor: 'pointer',
  },
  resultBox: {
    marginTop: 24,
    backgroundColor: '#f5f5f7',
    border: '1px solid #d2d2d7',
    borderRadius: 10,
    padding: 16,
    fontSize: 18,
    color: '#1d1d1f',
  },
  footer: {
    textAlign: 'center',
    borderTop: '1px solid #d2d2d7',
    paddingTop: 20,
    color: '#6e6e73',
    fontSize: 14,
  },
};

export default App;
