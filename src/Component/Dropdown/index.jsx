import React, { useState } from 'react'
import styles from './dropdown.module.css';
import sortA from '../../Assets/sort-a.png';
import sortZ from '../../Assets/sort-z.png';
import sortNew from '../../Assets/sort-new.png';
import sortNotF from '../../Assets/sort-not-finished.png';
import sortLast from '../../Assets/sort-last.png';

export default function Dropdown({type = 'sort', txt='--pilih--', callback=''}) {
    const [select, setSelect] = useState({
        name: txt,
        icon: sortA,
        value: 'very-high',
        color: '--very-high-prior-col',
    });
    const [openOption, setOpenOption] = useState(false);
    const sort =[
        {
            name: 'Terbaru',
            value: 'terbaru',
            icon: sortNew,
        },
        {
            name: 'Terlama',
            value: 'terlama',
            icon: sortLast,
        },
        {
            name: 'A-Z',
            value: 'az',
            icon: sortA,
        },
        {
            name: 'Z-A',
            value: 'za',
            icon: sortZ,
        },
        {
            name: 'Belum Selesai',
            value: 'belum',
            icon: sortNotF,
        },
    ]
    const priority =[
        {
            name: 'Very High',
            value: 'very-high',
            color: '--very-high-prior-col',
        },
        {
            name: 'High',
            value: 'high',
            color: '--high-prior-col',
        },
        {
            name: 'Medium',
            value: 'normal',
            color: '--medium-prior-col',
        },
        {
            name: 'Low',
            value: 'low',
            color: '--low-prior-col',
        },
        {
            name: 'Very Low',
            value: 'very-low',
            color: '--very-low-prior-col',
        },
    ]

    function handleChange(e){
        setOpenOption(false);
        setSelect(e);
        callback(e.value)
    }
  return (
    <div className={styles.container}>
        <div className={styles.dropdown}>
            <div
                onClick={()=> setOpenOption(curr => !curr)} 
                className={styles.menu}>
               {type === 'sort' ? 
                <span>
                    <img src={select.icon} alt="test" /> 
                    <span className={styles.txt}>{select.name}</span>
                </span>
           : 
                <span>
                        <div 
                            className={styles.circle}
                            style={
                                { 
                                    '--bg' : `var(${select.color})`,
                                }}></div>
                    <span className={styles.txt}>{select.name}</span>
                </span>
           }
            </div>
            {openOption && 
                <div className={styles.wrapper} data-cy='sort'>
                    {type === 'sort' ? sort.map((item,index) =>{
                        return(
                        <label key={index} 
                            className={`${styles.menu} ${select === item.name && styles.active}`}>
                            <input 
                                onChange={() => handleChange(item)}
                                type="radio" name="priority" />
                                <img src={item.icon} alt="test" /> 
                            <span className={styles.txt}>{item.name}</span>
                        </label>
                        )
                    })
                    : priority.map((item,index) =>{
                        return(
                            <label key={index} 
                                className={`${styles.menu} ${select === item.name && styles.active}`}>
                                <input 
                                    onChange={() => handleChange(item)}
                                    type="radio" name="priority" />
                                    <div 
                                        className={styles.circle}
                                        style={
                                            { 
                                                '--bg' : `var(${item.color})`,
                                            }}></div>
                                <span className={styles.txt}>{item.name}</span>
                            </label>
                        )
                    })    
                }
                </div>
            }
        </div>
    </div>
  )
}
