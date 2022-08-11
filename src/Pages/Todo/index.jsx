import React, { useEffect, useRef, useState } from 'react';
import styles from './todo.module.css';
import Component from '../../Component';
import emptyImg from '../../Assets/todo-empty-state.svg';
import plus from '../../Assets/tabler_plus.png';
import pen from '../../Assets/todo-title-edit-button.svg';
import chev from '../../Assets/todo-back-button.svg';
import { Link } from "react-router-dom";
import {useForm} from '../../Helper/FormContext';
import sortIcon from '../../Assets/tabler_arrows-sort.png';
import {useParams} from 'react-router-dom';
import { getActivityList, updateTodo } from '../../Helper/Todo';

export default function TodoPages() {
  const inputRef = useRef()
  const TodoId = useParams();
  const { setIsOpenForm, setIsEditForm, setTarget } = useForm();
  const {ActivityItem,ButtonCstm, Dropdown} = Component();
  const [title, setTitle] = useState('');
  const [dummy, setDummy] = useState([]);
  const [todo, setTodo] = useState({});
  const [filter, setFilter] = useState('terbaru');
  const [isEdit, setIsEdit] = useState(false);

  useEffect(()=>{
    setTitle(curr => todo.title)
  },[todo.title]);


  function filterActivity(key){
    if(key === 'za'){
      dummy.sort((a,b)=>{
        let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

        if (fa < fb) {
            return 1;
        }
        if (fa > fb) {
            return -1;
        }
        return 0;
      })
    }else if(key === 'az'){
      dummy.sort((a,b)=>{
        let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
      })
    }else if(key === 'belum'){
      dummy.sort((a,b)=>{
          return a.is_active - b.is_active
      })
    }else if(key === 'terlama'){
      dummy.sort((a,b)=>{
        return a.id - b.id
      })
    }else{
      dummy.sort((a,b)=>{
          return b.id - a.id
      })
    }
  }

  useEffect(()=>{
    getActivityList(TodoId.id).then(res => res.json()).then(data => {
      setTodo({...data});
      setDummy([...data.todo_items]);
    })
  })
    
    function handleNew(){
      setIsOpenForm({status: true});
      setTarget({activity_group_id : TodoId.id})
      setIsEditForm({
        status: false,
      })
    }
    function handleNameChange(){
      const data= {
        title: inputRef.current.value,
      }
      setTitle(inputRef.current.value)
      updateTodo(TodoId.id,data )
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
                  onChange={() => handleNameChange()}
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
              <Dropdown type='sort' callback={(e) => setFilter(e)}/>
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
            filterActivity(filter)
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
