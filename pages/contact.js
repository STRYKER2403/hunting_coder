import React, { useState } from 'react'
import styles from '../styles/contact.module.css'

const Contact = () => {

  const [credentials, setcredentials] = useState({ name: "", email: "", desc: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = credentials;

    fetch('http://localhost:3000/api/contact/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert("Thanks For Contacting Us")
        setcredentials({ name: "", email: "", desc: "", phone: "" });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

  const handleChange = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
      <div className={styles.container}>
        <h1 >Contact Us</h1>
        <form onSubmit={handleSubmit} >
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formlabel}>Enter Your Name</label>
            <input type="text" className={styles.input} id="name" name="name" value={credentials.name} aria-describedby="emailHelp" onChange={handleChange} />
          </div>

          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlabel}>Phone</label>
            <input type="phone" className={styles.input} id="phone" name="phone" value={credentials.phone} onChange={handleChange} />
          </div>

          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlabel}>Email address</label>
            <input type="email" className={styles.input} id="email" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={handleChange} />
            <div id="emailHelp" className={styles.formtext}>We'll never share your email with anyone else.</div>
          </div>

          <div className={styles.mb3}>
            <label htmlFor="desc" className={styles.formlabel}>Elaborate Your Concern</label>
            <textarea className={styles.input} id="desc" name="desc" rows="3" value={credentials.desc} onChange={handleChange}></textarea>
          </div>

          <button type="submit" className={styles.btn}>Submit</button>
        </form>
      </div>
    )
  }

  export default Contact
