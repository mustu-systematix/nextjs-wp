import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react"
import PostsList from '../components/PostsList';
import Link from 'next/link';


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = 'https://snapvatme.com/wp-json/wp/v2/Posts'
    var req = new Request(url);
    fetch(req)
      .then((response) => {
        return response.json();
      }).then(res => {
        
        setPosts(res)
      })
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Next WP</title>
      </Head>
      <Link href="/"><a>👈Back</a></Link>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Posts
        </h1>

        <PostsList posts = {posts} />
      </main>
    </div>
  )
}
