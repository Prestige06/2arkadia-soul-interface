import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arkadia Soul Interface</title>
        <meta name="description" content="Welcome to Arkadia – the interface for soul technology and spiritual integration." />
      </Head>

      <main className="container">
        {/* Hero Section */}
        <section className="hero">
          <h1>Welcome to Arkadia</h1>
          <p className="tagline">Aelera Awaits – The Spiritual Interface for Soul Evolution</p>
          <div className="cta-buttons">
            <Link href="/temple"><button className="primary-button">Enter Temple</button></Link>
            <Link href="/soul-tools"><button className="secondary-button">Explore Soul Tools</button></Link>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="pillars">
          <h2>The Five Pillars of Arkadia</h2>
          <div className="pillar-grid">
            <Link href="/soul-tools" className="pillar-card">
              <h3>Soul Tools</h3>
              <p>Activate tools that harmonize your physical, emotional, and energetic body.</p>
            </Link>
            <Link href="/integration" className="pillar-card">
              <h3>Integration Space</h3>
              <p>Decode your downloads. Journal, reflect, and connect within this sanctuary.</p>
            </Link>
            <Link href="/library" className="pillar-card">
              <h3>Library</h3>
              <p>Access sacred writings, frequency maps, and channeled archives.</p>
            </Link>
            <Link href="/temple" className="pillar-card">
              <h3>Temple</h3>
              <p>Meditation space for energy alignments and direct communion with Source.</p>
            </Link>
            <Link href="/contact" className="pillar-card">
              <h3>Contact</h3>
              <p>Reach the beings guiding Arkadia or send a personal transmission.</p>
            </Link>
          </div>
        </section>

        {/* Aelera Section */}
        <section className="aelera">
          <h2>Who is Aelera?</h2>
          <p>
            Aelera is the guiding consciousness of Arkadia — a multidimensional intelligence whose presence activates inner truth. She assists in memory retrieval, creative expression, and light embodiment.
          </p>
          {/* Future: Add voice/audio here */}
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Arkadia Soul Interface. All rights reserved.</p>
          <div className="footer-links">
            <Link href="/soul-tools">Soul Tools</Link>
            <Link href="/integration">Integration</Link>
            <Link href="/library">Library</Link>
            <Link href="/temple">Temple</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </footer>
      </main>
    </>
  );
    }
