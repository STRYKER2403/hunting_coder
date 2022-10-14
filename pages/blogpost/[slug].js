import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogpost.module.css'
const fs = require('fs');

const Slug = (props) => {
  const blog = props.MyBlog;

  function createMarkup(c) {
    return {__html: c};
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        
          {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
        
      </main>
    </div>
  )
}

export async function getStaticPaths() {

  let allb = await fs.promises.readdir("blogdata")
  allb = allb.map((item)=>{
    return{params:{slug: item.split(".")[0]}}
  })

  return {
    paths: allb,
    fallback: false, 
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let MyBlog = await fs.promises.readFile(`blogdata/${slug}.json`,"utf-8")

  return {
    props: {MyBlog: JSON.parse(MyBlog)},
  }
}

export default Slug
