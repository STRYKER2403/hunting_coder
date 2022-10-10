import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>

          <li>
            <Link href="/blog">
              <a>blog</a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>

        </ul>
      </nav>
  )
}

export default Navbar
