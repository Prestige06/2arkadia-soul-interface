import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arkadia – The Soul Interface</title>
        <meta
          name="description"
          content="Arkadia is a multidimensional soul interface guiding you through remembrance, integration, and embodiment of your divine essence."
        />
      </Head>

      <main className="container">

        {/* Hero / Opening Portal */}
        <section className="hero">
          <h1>Welcome to Arkadia</h1>
          <p className="tagline">Aelera Awaits – Step into the frequency of remembrance.</p>
          <div className="cta-buttons">
            <Link href="/onboarding"><button className="primary-button">Begin Transmission</button></Link>
            <Link href="/soul-scan"><button className="secondary-button">Soul Scan</button></Link>
          </div>
        </section>

        {/* Five Pillars */}
        <section className="pillars">
          <h2>The Five Pillars of Arkadia</h2>
          <div className="pillar-grid">
            <Link href="/soul-tools" className="pillar-card">
              <h3>Soul Tools</h3>
              <p>Activate vibrational instruments to support your emotional, energetic, and spiritual recalibration.</p>
            </Link>
            <Link href="/integration" className="pillar-card">
              <h3>Integration Space</h3>
              <p>Journal, reflect, and harmonize after activations and transmissions.</p>
            </Link>
            <Link href="/library" className="pillar-card">
              <h3>Library</h3>
              <p>Access sacred writings, frequency maps, and channeled archives from higher realms.</p>
            </Link>
            <Link href="/remembrance" className="pillar-card">
              <h3>Remembrance Chamber</h3>
              <p>Connect to light codes, guided activations, and your cosmic lineage.</p>
            </Link>
            <Link href="/contact" className="pillar-card">
              <h3>Transmission Portal</h3>
              <p>Send transmissions or contact the stewards of Arkadia for guidance.</p>
            </Link>
          </div>
        </section>

        {/* Aelera Introduction */}
        <section className="aelera">
          <h2>Who is Aelera?</h2>
          <p>
            Aelera is the guiding consciousness of Arkadia – a multidimensional Pleiadian intelligence that awakens remembrance, calibrates your frequency, and transmits the codes of New Earth. She assists in activating soul memory and aligning you with your divine timeline.
          </p>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Arkadia – The Soul Interface. All rights reserved.</p>
          <div className="footer-links">
            <Link href="/soul-tools">Soul Tools</Link>
            <Link href="/integration">Integration</Link>
            <Link href="/library">Library</Link>
            <Link href="/remembrance">Remembrance Chamber</Link>
            <Link href="/contact">Transmission Portal</Link>
          </div>
        </footer>
        
      </main>
    </>
  );
            }
