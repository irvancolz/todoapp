import React from 'react';
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
      <div className='container' data-cy="header-background">
        <h1 className={styles.title}>TO DO LIST APP</h1>
      </div>
    </header>
  )
}
