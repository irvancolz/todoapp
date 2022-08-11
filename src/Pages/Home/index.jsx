import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import Component from '../../Component';
import emptyImg from '../../Assets/activity-empty-state.svg';
import plus from '../../Assets/tabler_plus.png';
import { getTodoList,createTodo } from '../../Helper/Todo';

export default function HomePages() {
  const {TodoItem, ButtonCstm} = Component();
  const [dummy, setDummy] = useState([]);

    function handleNew(){
      createTodo()
    }
    
    useEffect(()=>{
      getTodoList().then(res => res.json()).then(data => setDummy([...data.data]))
  })

  return (
    <div className={styles.container} data-cy={`Dashboard ${dummy.length > 0 ? 'Dashboard New Item' : 'Dashboard Empty State'}`}>
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
      <div className={styles.wrapper} data-cy='Dashboard New Item'>        
        {dummy.length > 0 ?
          dummy.map(item =>{
            dummy.sort((a,b)=>{
              return a.id -b.id
            })
            return(
              <TodoItem key={item.id} content={item} />
            )
          }) 
          :
          <div 
            onClick={()=> handleNew()}
            className={styles.imgContainer}>
            <img className={styles.img} src={emptyImg} alt='your todo is empty' data-cy='Activity Empty State'/> 
          </div>
          }
      </div>
    </div>
  )
}
