import React from 'react';
import styles from './todo.module.css';
import Component from '../../Component';
import emptyImg from '../../Assets/todo-empty-state.svg';
import plus from '../../Assets/tabler_plus.png';
import pen from '../../Assets/todo-title-edit-button.svg';
import chev from '../../Assets/todo-back-button.svg';
import { Link } from "react-router-dom";
import {useForm} from '../../Helper/FormContext'

export default function TodoPages() {
  const { setIsOpenForm } = useForm();
  const {ActivityItem,ButtonCstm} = Component();
  const dummy=[
      {"id":16832,"title":"asd","activity_group_id":23750167,"is_active":1,"priority":"very-high"},
      {"id":16831,"title":"vv","activity_group_id":23750167,"is_active":1,"priority":"very-high"},
      {"id":16828,"title":"Private Meet","activity_group_id":23750159,"is_active":1,"priority":"very-high"},
      {"id":16827,"title":"makan","activity_group_id":23750157,"is_active":0,"priority":"low"},
      {"id":16826,"title":"aaaaa","activity_group_id":23750147,"is_active":0,"priority":"very-high"},
      {"id":16825,"title":"aaaaa","activity_group_id":23750151,"is_active":0,"priority":"very-high"},
      {"id":16824,"title":"bbbbbb","activity_group_id":23750150,"is_active":1,"priority":"very-high"},
      {"id":16823,"title":"aaaaa","activity_group_id":23750150,"is_active":1,"priority":"very-high"},
      {"id":16822,"title":"aaaaa","activity_group_id":23750148,"is_active":1,"priority":"very-high"},
      {"id":16799,"title":"baca buku","activity_group_id":23750141,"is_active":1,"priority":"low"}]

      function handleNew(){
        setIsOpenForm(curr => true)
      }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <Link to={'/'}>
            <img src={chev} alt="back" />
            <h1 className="title">Activity</h1>
          </Link>
          <ButtonCstm
            callback={(e) => console.log(e)}>
            <img src={pen} alt="edit" />
          </ButtonCstm>
        </div>
        <ButtonCstm
          variant='primary'
          bgCol='blue'
          callback={() => handleNew()}>
            <img src={plus} alt='plus'/>
            <p className={styles.txt}>Tambah</p>
        </ButtonCstm>
      </div>
      <div className={styles.wrapper}>
        {dummy.length > 0 ?
          dummy.map(item =>{
            return(
              <ActivityItem key={item.id} content={item} />
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
