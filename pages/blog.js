import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/blog.module.css'

const Blog = (props) => {
  // const [blogs, setblogs] = useState(props.allBlogs);

 const blogs = props.allBlogs; 
  
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

// For Server Side Rendering
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: {allBlogs}, 
  }
}

export default Blog
