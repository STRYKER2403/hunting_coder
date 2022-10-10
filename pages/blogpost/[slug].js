import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogpost.module.css'

const slug = () => {
    const router = useRouter();
    const {slug} = router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>Title of the Page {slug}</h1>
      <hr/>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non tempora nostrum illum voluptatibus, ex delectus facere ullam rerum optio quisquam velit sunt repellendus asperiores hic quasi animi amet consequatur quibusdam rem. Voluptates, fuga quae delectus velit consequuntur pariatur, sapiente ut voluptatem ad illo expedita ducimus repellat. Corrupti, officiis?
      </div>
      </main>
    </div>
  )
}

export default slug
