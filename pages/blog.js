import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import InfiniteScroll from "react-infinite-scroll-component";
import styles from '../styles/blog.module.css'
const fs = require('fs');

const Blog = (props) => {

  const [blogs, setblogs] = useState(props.allBlogs);
  const [count, setcount] = useState(2);

  const fetchMoreData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
    setcount(count + 2);
    let data = await d.json();
    setblogs(data);
  }

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <InfiniteScroll
            dataLength={blogs.length}
            next={fetchMoreData}
            hasMore={props.allCount !== blogs.length}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {blogs.map((blogitem) => {
              return <div key={blogitem.slug}>
                <h3 className={styles.blogitemh3}>{blogitem.title}</h3>
                <p className={styles.blogitemp}>{blogitem.metadesc.substr(0, 150)}...</p>
                <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>
              </div>
            })}
          </InfiniteScroll>
        </main>
      </div>

    </>
  )
}

export async function getStaticProps(context) {

  let data = await fs.promises.readdir("blogdata")
  let allBlogs = [];
  let allCount = data.length;

  for (let index = 0; index < 2; index++) {
    let element = data[index];

    let myFile = await fs.promises.readFile(("blogdata/" + element), "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }

  return {
    props: { allBlogs, allCount },
  }
}

export default Blog
