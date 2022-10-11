import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/blog.module.css'
const fs = require('fs');

const Blog = (props) => {

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

export async function getStaticProps(context) {

  let data = await fs.promises.readdir("blogdata")
  let allBlogs = [];

    for (let index = 0; index < data.length; index++) {
        let element = data[index];
        
        let myFile = await fs.promises.readFile(("blogdata/" + element),"utf-8");
        allBlogs.push(JSON.parse(myFile));
    }

  return {
    props: {allBlogs}, 
  }
}

export default Blog
