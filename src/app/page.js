// pages/index.js
import Head from 'next/head'
import styles from 'src/app/page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Web Page</title>
        <meta name="description" content="A simple Next.js web page" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Raha's Next.js Page
        </h1>

        <p className={styles.description}>
          This page was created as a simple demonstration of a Next.js application.
        </p>

        <div className={styles.grid}>
          <a href="#installation" className={styles.card}>
            <h2>Installation &rarr;</h2>
            <p>
  To install Next.js, I first installed Node.js and npm. Then, I ran the command 
  <code>npx create-next-app my-app</code> to create a new Next.js application. After the 
  installation was complete, I navigated to the project directory and started the development 
  server with <code>npm run dev</code>.
</p>
          </a>

          <a href="#build" className={styles.card}>
            <h2>Building the Page &rarr;</h2>
            <p>
  The page was built by editing the default <code>index.js</code> file created by Next.js. 
  I used standard HTML for content and CSS modules for styling. The page is structured into 
  main content and footer sections, with links to different sections of the page explaining the process.
</p>
          </a>

          <a href="#difficulties" className={styles.card}>
            <h2>Difficulties &rarr;</h2>
            <p>
  I encountered a difficulty with CSS styling initially, as it was not applying as expected. I solved this 
  by ensuring that the CSS module was correctly imported into my page component. Another challenge was 
  understanding server-side rendering and static generation, which I overcame by thoroughly reading the 
  Next.js documentation and experimenting with different data fetching methods.
</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Built with Next.js
      </footer>
    </div>
  )
}
