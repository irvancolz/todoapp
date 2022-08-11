import React, { useEffect, useRef, useState } from 'react';
import styles from './todo.module.css';
import Component from '../../Component';
import emptyImg from '../../Assets/todo-empty-state.svg';
import plus from '../../Assets/tabler_plus.png';
import pen from '../../Assets/todo-title-edit-button.svg';
import chev from '../../Assets/todo-back-button.svg';
import { Link } from "react-router-dom";
import Dropdown from '../../Component/Dropdown';
import {useForm} from '../../Helper/FormContext';
import sortIcon from '../../Assets/tabler_arrows-sort.png';
import {useParams} from 'react-router-dom';
import { getActivityList } from '../../Helper/Todo';

export default function TodoPages() {
  const inputRef = useRef()
  const TodoId = useParams();
  const { setIsOpenForm, setIsEditForm } = useForm();
  const {ActivityItem,ButtonCstm} = Component();
  const [title, setTitle] = useState('');
  const [dummy, setDummy] = useState([]);
  const [todo, setTodo] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(()=>{
    setTitle(curr => todo.title)
  },[todo.title]);

  useEffect(()=>{
    getActivityList(TodoId.id).then(res => res.json()).then(data => {
      setTodo({...data});
      setDummy([...data.todo_items]);
    })
  },[TodoId.id])
    
    function handleNew(){
      setIsOpenForm(curr => true);
      setIsEditForm({
        status: false,
      })
    }

    function handleEdit(e){
      setIsEdit(curr => !curr);

      if(!isEdit){
        setTimeout(()=>{
          inputRef.current.focus();
        }, 500);


      }
    }

    return (
      <div className={styles.container} data-cy={dummy.length === 0 ? 'Item List - Empty State' : 'Item List - Done'}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          {isEdit ? 
            <div>
              <img src={chev} alt="back" />
                <input 
                  ref={inputRef}
                  type="text" 
                  value={title} 
                  onChange={() => setTitle(curr => inputRef.current.value)}
                  className={`${styles.input} title`}/>  
              </div>
          :
            <Link to={'/'}>
              <img src={chev} alt="back" data-cy='todo-title-back-button'/>
                <h1 className="title">
                  {title}
                </h1>           
            </Link>
          }
          <ButtonCstm
            callback={(e) => handleEdit()}>
            <img src={pen} alt="edit" data-cy='todo-title-edit-button'/>
          </ButtonCstm>
        </div>
        <div className={styles.sortContainer}>
          <div className={styles.filter}>
            <a href="#filter">
              <img src={sortIcon} alt="filter" />
            </a>
            <div id='filter'>
              <Dropdown type='sort' />
            </div>
          </div>
          <ButtonCstm
            variant='primary'
            bgCol='blue'
            callback={() => handleNew()}>
              <img src={plus} alt='plus'/>
              <p className={styles.txt}>Tambah</p>
          </ButtonCstm>
        </div>
      </div>
      <div className={styles.wrapper} data-cy='Item List'>
        {dummy.length > 0 ?
          dummy.map(item =>{
            return(
              <ActivityItem key={item.id} content={item} />
            )
          }) 
        :
        <div 
          onClick={(e)=> handleNew()}
          className={styles.imgContainer}>
            <img className={styles.img} src={emptyImg} alt='your todo is empty' data-cy='todo-empty-state'/> 
        </div>
      }
      </div>
</div>
)
}
