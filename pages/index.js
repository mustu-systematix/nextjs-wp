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
      <Head>
        <title>Next WP</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next Js with <a>Wordpress</a>
        </h1>
        <ul>
          <li><Link href = "/pages"><a>Pages</a></Link></li>
          <li><Link href = "/posts"><a>Posts</a></Link></li>
        </ul>
      </main>
    </div>
  )
}
