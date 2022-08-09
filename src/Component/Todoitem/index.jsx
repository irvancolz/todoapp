import React from 'react';
import styles from './todo.module.css';
import deleteImg from '../../Assets/todo-item-delete-button.svg';
import { Link } from "react-router-dom";
import ButtonCstm from '../ButtonCstm';
import { useModal } from '../../Helper/ModalContext';

export default function TodoItem({content={}}) {
    const {setIsOpen, setTarget,} = useModal();
    function handleDelete(){
        setIsOpen(curr => true);
        setTarget({
            name: content.name,
            id: content.id,
            type: 'todo',
        })
    }
  return (
    <div className={styles.container}>
        <Link to={`/Detail/${content.id}`}>
            <div className={styles.content}>
                <h4>{content.name}</h4>
            </div>
        </Link>
            <div className={styles.footer}>
                <span className={styles.date}>{content.created_at}</span>
                <ButtonCstm 
                    callback={() => handleDelete()}>
                        <img src={deleteImg} alt='delete'/>
                </ButtonCstm>
            </div>
    </div>
  )
}
