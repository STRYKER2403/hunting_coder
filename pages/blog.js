import React from 'react'
import Link from 'next/link'
import styles from '../styles/blog.module.css'

const Blog = () => {
  return (
    <div>
      <main className={styles.main}>
        <h2>Latest blogs</h2>
          <div className="blog">
            <Link href={"/blogpost/learn-javascript"}>
            <h3 className={styles.blogitemh3}>How to learn javascript in 2022</h3></Link>
            <p>Javacript is Language used to design logic for the web</p>
          </div>

          <div className="blog">
            <h3>How to learn javascript in 2022</h3>
            <p>Javacript is Language used to design logic for the web</p>
          </div>

          <div className="blog">
            <h3>How to learn javascript in 2022</h3>
            <p>Javacript is Language used to design logic for the web</p>
          </div>
          </main>          
        </div>
  )
}

export default Blog
