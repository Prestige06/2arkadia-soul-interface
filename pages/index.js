export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>2arkadia Soul Interface</title>
        <meta name="description" content="Welcome to the 2arkadia Soul Interface" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>2arkadia</span>
        </h1>

        <p className={styles.description}>
          This is the Soul Interface — a portal to awaken your higher self.
        </p>

        <div className={styles.grid}>
          <a href="/explore" className={styles.card}>
            <h3>Explore &rarr;</h3>
            <p>Discover your path through the realms of self and spirit.</p>
          </a>

          <a href="/music" className={styles.card}>
            <h3>Music &rarr;</h3>
            <p>Experience vibrational journeys crafted for awakening.</p>
          </a>

          <a href="/library" className={styles.card}>
            <h3>Library &rarr;</h3>
            <p>Read and watch teachings, philosophies, and soul codes.</p>
          </a>

          <a href="/connect" className={styles.card}>
            <h3>Connect &rarr;</h3>
            <p>Join the tribe and align with others on the path.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by 2arkadia • Built for your evolution</p>
      </footer>
    </div>
  );
    }
