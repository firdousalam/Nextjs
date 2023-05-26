import React, { Component } from 'react'
import styles from '../style/navbar.module.css'
import Link from 'next/link'
export default class nav extends Component {
  render() {
    return (
      <nav className={styles.main_header}>
        <div className=''>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href="/">
                        Home
                    </Link>

                </li>
           
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href="/about">
                        About
                    </Link>

                </li>
           
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href="/movie">
                        Movie
                    </Link>

                </li>
            
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href="/contact">
                        Contact Us
                    </Link>

                </li>
            </ul>
        </div>
        
      </nav>
    )
  }
}
