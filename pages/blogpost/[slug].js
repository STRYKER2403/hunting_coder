import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogpost.module.css'

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [blog, setblog] = useState();

  useEffect(() => {
    if(!router.isReady) return;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => a.json())
      .then((parsed) => {
        // console.log(parsed)
        setblog(parsed)
      });

  }, [router.isReady]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>
          {blog && blog.content}
        </div>
      </main>
    </div>
  )
}

export default slug
