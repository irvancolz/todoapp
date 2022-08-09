import React, { useRef, useState } from 'react'
import styles from './dropdown.module.css';
import sortA from '../../Assets/sort-a.png';
import sortZ from '../../Assets/sort-a.png';
import sortNew from '../../Assets/sort-a.png';
import sortNotF from '../../Assets/sort-a.png';
import sortLast from '../../Assets/sort-a.png';

export default function Dropdown({type = ''}) {
    const inputRef = useRef();
    const sort =[
        {
            name: 'Terbaru',
            icon: sortNew,
        },
        {
            name: 'Terlama',
            icon: sortLast,
        },
        {
            name: 'A-Z',
            icon: sortA,
        },
        {
            name: 'Z-A',
            icon: sortZ,
        },
        {
            name: 'Belum Selesai',
            icon: sortNotF,
        },
    ]
  return (
    <div className={styles.container}>
        <div 
            className={styles.dropdown}
            style={{
                // height: `${isSelect ? 'fit-content': '2.5rem'}`
            }}>
            <label className={styles.menu}>
                <input 
                ref={inputRef}
                type="checkbox" name="container"/>
                <span className={styles.txt}>Choose</span>
            </label>
            {sort.map((item,index) =>{
                return(
                <label key={index} className={styles.menu}>
                    <input type="radio" name="priority" />
                    <img src={item.icon} alt="test" />
                    <span className={styles.txt}>{item.name}</span>
                </label>
                )
            })}
        </div>
    </div>
  )
}
