import React, {useState } from 'react';
import Dropdown from '../Dropdown';
import styles from './form.module.css';
import close from '../../Assets/close.png';
import ButtonCstm from '../ButtonCstm';
import { useForm } from '../../Helper/FormContext';
import { createActivity, updateActivity } from '../../Helper/Todo';

export default function FormEdit() {
    const {setIsOpenForm, isEditForm, target} = useForm();
    const handler = isEditForm.status ? target.data.title : '';
    const [name, setName] = useState(handler);
    const [priority, setPriority] = useState();


    function handleInput(e){
        setName(curr => e)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!isEditForm.status){
            const data ={
                activity_group_id : target.activity_group_id,
                title : name,
                priority,
                is_active: 0,
            }
            createActivity(data)
        }else{
            const data ={
                title : name,
                activity_group_id: target.data.activity_group_id,
            }
            updateActivity(target.id, data)
            
        }

        setIsOpenForm({status : false})
    }

  return (
    <div className={styles.container}>
        <div className={styles.formContainer} data-cy={`${name.length > 0 ? 'Tambah List Item - Active' : 'Tambah List item - Unactive'}`}>
            <div className={styles.title}>
                <h3>{isEditForm.status ? 'Edit ' : 'Tambah '} List Item</h3>
                <ButtonCstm
                    callback={()=> setIsOpenForm(curr => false)}>
                    <img src={close} alt='close'/>
                </ButtonCstm>
            </div>
            <form 
                className={styles.form} 
                onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.formgroup}>
                    <h3>Nama List item</h3>
                    <input 
                        value={name} 
                        onChange={(e) => handleInput(e.target.value)} 
                        type="text" 
                        placeholder='tambahkan nama list item' 
                        required/>
                </div>

                {!isEditForm.status && 
                    <div className={styles.formgroup} data-cy='Tambah List item - priority'>
                        <h3>Priority</h3>
                        <Dropdown type='prior' callback={(e) => setPriority(e)} />
                    </div>
                }

                <div 
                    className={styles.formgroup}
                    style={
                        {
                            opacity: `${name.length > 0 ? 1 : .2}`,
                        }
                    }>
                    <ButtonCstm
                        variant='primary'
                        bgCol='blue'
                        btnType='submit'>
                        <p>Simpan</p>
                    </ButtonCstm>
                </div>

            </form>
        </div>
    </div>
  )
}
