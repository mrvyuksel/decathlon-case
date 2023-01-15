import React from 'react'
import styles from './index.module.css';
import Search from '../Search';

function Header({title, handleSearch}) {
  return (
    <>
    <header className={styles.header}>
        <div className='logo'>
            <a href='/'>
              <img src='/logo.png' alt='' />
            </a>
        </div>
        <div className={styles.menu}>
          <a href='/profile'>Users</a>
          <Search customClass="searchArea" handleSearch={handleSearch} placeholder="Find" />
        </div>
        
    </header>
    </>
  )
}

export default Header