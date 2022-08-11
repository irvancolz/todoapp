import React from 'react';
import styles from './button.module.css';

export default function ButtonCstm({children, callback='', variant='ternary', bgCol='none',btnType='button' }) {
  return (
    <div 
    className={`${styles.container } 
    ${variant === 'primary' ? styles.prime : variant === 'secondary' ? styles.second : null}
    `}
      style={{
        '--bg' : `${bgCol === 'red' ? 'var(--very-high-prior-col)' : bgCol === 'blue' ? 'var(--blue-bg-col)' : bgCol === 'gray' ? 'var(--gray-bg-col)': 'transparent' }`,
      }}>
        <button
            className={
              `${styles.btn} ${bgCol === 'red' || bgCol === 'blue' ? styles.white : styles.default}`}
            onClick={()=>{
              if(callback !== ''){
                callback()
              }
              return
            }}
            type={btnType}
            >
            {children}
        </button>
    </div>
  )
}
