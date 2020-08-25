import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react"
import PageLists from '../components/PageLists';
import Link from 'next/link';


export default function Home() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const url = 'https://snapvatme.com/wp-json/wp/v2/pages'
    var req = new Request(url);
    fetch(req)
      .then((response) => {
        return response.json();
      }).then(res => {
        
        setPages(res)
      })
  }, [])
  return (
    <div className={styles.container}>
        <Link href="/"><a>👈Back</a></Link>
      <Head>
        <title>Next WP</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Pages
        </h1>

        <PageLists pages = {pages} />
      </main>
    </div>
  )
}
