import React, { useRef, useState } from 'react';
import styles from './activity.module.css';
import deleteImg from '../../Assets/todo-item-delete-button.svg';
import pen from '../../Assets/todo-title-edit-button.svg';
import ButtonCstm from '../ButtonCstm';
import { useModal } from '../../Helper/ModalContext';
import { useForm } from '../../Helper/FormContext';
import { updateActivity } from '../../Helper/Todo';

export default function ActivityItem({content={}}) {
    const textRef = useRef();
    const inputRef = useRef();
    const [isActivityFinish, setIsActivityFinish] = useState(content.is_active);
    const {setIsOpenForm,setIsEditForm,} = useForm();

    const {setIsOpen, setTarget,} = useModal();
    function handleDelete(){
        setIsOpen({
            status : true,
            mode: 'list item'
        });
        setTarget({
            name: content.title,
            id: content.id,
            type: 'todo',
        })
    }

    function handleEdit(e){
        setIsEditForm({
            status: true,
            data: e
        });
        setIsOpenForm(curr => true);

    }
    function handleActivity(){
        setIsActivityFinish(curr => !curr);
        const data ={
            is_active : isActivityFinish
        }
        updateActivity(content.id, data).then(res => console.log(res))
    }

  return (
    <div className={styles.container}>
        <div className={styles.body}>
            <input 
                type="checkbox" 
                name="finish" 
                id="finish"
                ref={inputRef}
                onChange={(e) => handleActivity()} 
                checked={isActivityFinish} />
            <span 
                className={styles.prior}
                style={{
                    '--bg' : `${content.priority === 'very-low' ? 'var(--very-low-prior-col)' 
                                : content.priority === 'low' ? 'var(--low-prior-col)'
                                : content.priority === 'medium' ? 'var(--medium-prior-col)'
                                : content.priority === 'high' ? 'var(--high-prior-col)'
                                : 'var(--very-high-prior-col)'}`
                }}></span>
            <p 
                ref={textRef}
                className={styles.txt}
                style={
                    {
                        textDecoration : `${isActivityFinish ? 'line-through' : 'none'}`,
                        color: `${isActivityFinish ? 'var(--passive-text-col)' : 'var(--main-text-col)'}`
                    }
                }>{content.title}</p>
            <ButtonCstm
                callback={()=> handleEdit(content)}>
                <img src={pen} alt="edit" />
            </ButtonCstm>
        </div>
        <div className={styles.footer}>
            <ButtonCstm
                callback={()=> handleDelete()}>
                <img src={deleteImg} alt="delete" />
            </ButtonCstm>
        </div>
    </div>
  )
}
