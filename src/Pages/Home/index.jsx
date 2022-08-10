import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import Component from '../../Component';
import emptyImg from '../../Assets/activity-empty-state.svg';
import plus from '../../Assets/tabler_plus.png';
import { getTodoList } from '../../Helper/Todo';

export default function HomePages() {
  const {TodoItem, ButtonCstm} = Component();
  const [dummy, setDummy] = useState([]);

    function handleNew(){

    }
    
    useEffect(()=>{
      getTodoList().then(res => res.json()).then(data => setDummy([...data.data]))
  })

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className="title">Activity</h1>
        <ButtonCstm
          variant='primary'
          bgCol='blue'
          callback={()=> handleNew()}>
            <img src={plus} alt='plus'/>
            <p className={styles.txt}>Tambah</p>
        </ButtonCstm>
      </div>
      <div className={styles.wrapper}>        
        {dummy.length > 0 ?
          dummy.map(item =>{
            return(
              <TodoItem key={item.id} content={item} />
            )
          }) 
          :
          <div 
            onClick={()=> handleNew()}
            className={styles.imgContainer}>
            <img className={styles.img} src={emptyImg} alt='your todo is empty' /> 
          </div>
          }
      </div>
    </div>
  )
}
