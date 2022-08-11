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
    const {setIsOpenForm,setIsEditForm, setTarget} = useForm();

    const {setIsOpen, setTargetModal} = useModal();
    function handleDelete(){
        setIsOpen({
            status : true,
            mode: 'list item',
        });
        setTargetModal({
            name: content.title,
            id: content.id,
            mode: 'activity'
        })
    }

    function handleEdit(e){
        setIsEditForm({
            status: true,
        });
        setIsOpenForm({
            status: true,
        });
        setTarget({
            id: e.id,
            activity_group_id: content.activity_group_id,
            data: e,
        })

    }
    function handleActivity(){
        const data ={
            is_active : isActivityFinish ? 0 : 1,
            activity_group_id: content.activity_group_id,
        }
        updateActivity(content.id, data)
    }

  return (
    <div className={styles.container}>
        <div className={styles.body}>
            <label>
            <input 
                type="checkbox" 
                name="finish" 
                id="finish"
                ref={inputRef}
                onChange={(e) =>{ 
                    setIsActivityFinish(curr => !curr);
                    handleActivity()}} 
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
            </label>
            <ButtonCstm
                callback={()=> handleEdit(content)}>
                <img src={pen} alt="edit" />
            </ButtonCstm>
        </div>
        <div className={styles.footer}>
            <ButtonCstm
                callback={()=> handleDelete(content.id)}>
                <img src={deleteImg} alt="delete" />
            </ButtonCstm>
        </div>
    </div>
  )
}
