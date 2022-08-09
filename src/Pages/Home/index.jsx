import React from 'react';
import styles from './home.module.css';
import Component from '../../Component';
import emptyImg from '../../Assets/activity-empty-state.svg';
import plus from '../../Assets/tabler_plus.png';

export default function HomePages() {
  const {TodoItem, ButtonCstm} = Component();
  const dummy= [
                {
                    id : 123,
                    name: 'Activitas',
                    created_at: '1 august 2022',
                    activities: [],
                }
              ]
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className="title">Activity</h1>
        <ButtonCstm
          variant='primary'
          bgCol='blue'>
            <img src={plus} alt='plus'/>
            <p className={styles.txt}>Tambah</p>
        </ButtonCstm>
      </div>
      <div className="wrapper">        
        {dummy.length > 0 ?
          dummy.map(item =>{
            return(
              <TodoItem key={item.id} content={item} />
            )
          }) 
          :
          <div 
            onClick={(e)=> console.log(e)}
            className={styles.imgContainer}>
            <img className={styles.img} src={emptyImg} alt='your todo is empty' /> 
          </div>
          }
      </div>
    </div>
  )
}
