import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/blog.module.css'

const Blog = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
 
    fetch("http://localhost:3000/api/blogs").then((a)=> a.json())
    .then((parsed)=>{
      //  console.log(parsed)
       setblogs(parsed)});
      
  }, []);
  
  return (
    <div>
      <main className={styles.main}>
        {blogs.map((blogitem)=>{
          return <div key={blogitem.title}>
            <Link href={`/blogpost/${blogitem.slug}`}>
            <h3 className={styles.blogitemh3}>{blogitem.title}</h3></Link>
            <p className={styles.blogitemp}>{blogitem.content.substr(0,150)}...</p>
          </div>
        })}
          </main>          
        </div>
  )
}

export default Blog
