import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import styles from './form.module.css';
import close from '../../Assets/close.png';
import ButtonCstm from '../ButtonCstm';
import { useForm } from '../../Helper/FormContext';

export default function FormEdit() {
    const {setIsOpenForm, isEditForm} = useForm();
    const handler = isEditForm.status ? isEditForm.data.title : '';
    const [name, setName] = useState(handler);


    function handleInput(e){
        setName(curr => e)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(e)
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
                        <Dropdown type='prior'/>
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
                        callback={(e)=> handleSubmit(e)}>
                        <button type="submit">
                            <p>Simpan</p>
                        </button>
                    </ButtonCstm>
                </div>

            </form>
        </div>
    </div>
  )
}
