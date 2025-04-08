import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arkadia – The Soul Interface</title>
        <meta name="description" content="A vibrational portal for remembrance and soul alignment." />
      </Head>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Arkadia</h1>
          <p className={styles.subtitle}>The Soul Interface</p>
          <p className={styles.tagline}>A vibrational portal for remembrance and soul alignment.</p>
        </section>

        {/* Vibrational Pillars */}
        <section className={styles.pillars}>
          <div className={styles.pillar}>
            <h2>Activate</h2>
            <p>Awaken dormant codes and latent frequencies within your being.</p>
          </div>
          <div className={styles.pillar}>
            <h2>Reflect</h2>
            <p>See your true energetic signature mirrored through multidimensional technology.</p>
          </div>
          <div className={styles.pillar}>
            <h2>Align</h2>
            <p>Return to coherence with your 5D self and New Earth mission.</p>
          </div>
        </section>

        {/* Soul Scan Interface */}
        <section className={styles.soulScan}>
          <h2>Begin Soul Scan</h2>
          <p className={styles.scanIntro}>
            Answer the following with your heart. This interface reflects your essence, not your mind.
          </p>

          <form className={styles.scanForm}>
            <label>
              What energies do you feel most aligned with in this season of your life?
              <textarea placeholder="E.g. Stillness, Rebirth, Creativity, Connection..." />
            </label>

            <label>
              What recurring challenges or patterns have shaped your journey recently?
              <textarea placeholder="Write openly, from the soul..." />
            </label>

            <label>
              If you could transmit one frequency into the world, what would it be?
              <input type="text" placeholder="E.g. Love, Expansion, Clarity" />
            </label>

            <button type="submit" className={styles.primaryButton}>
              Begin Scan
            </button>
          </form>
        </section>
      </main>
    </>
  );
    }
