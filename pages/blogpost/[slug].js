import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogpost.module.css'

const slug = (props) => {
  
  const blog = props.MyBlog;

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

// For Server Side Rendering
export async function getServerSideProps(context) {
  const { slug } = context.query;

  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let MyBlog = await data.json();

  return {
    props: {MyBlog},
  }
}

export default slug
