import '../styles/globals.css'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          padding: '0.5rem 1rem',
          borderRadius: '999px',
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          zIndex: 1000,
          cursor: 'pointer'
        }}
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'}
      </button>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
