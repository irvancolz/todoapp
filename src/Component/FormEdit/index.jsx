import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import styles from './form.module.css';
import close from '../../Assets/close.png';
import ButtonCstm from '../ButtonCstm';
import { useForm } from '../../Helper/FormContext';

export default function FormEdit() {
    const {setIsOpenForm} = useForm()
    const [name, setName] = useState('');


    function handleInput(e){
        setName(curr => e)
    }

  return (
    <div className={styles.container}>
        <div className={styles.formContainer}>
            <div className={styles.title}>
                <h3>Tambah List item</h3>
                <ButtonCstm
                    callback={()=> setIsOpenForm(curr => false)}>
                    <img src={close} alt='close'/>
                </ButtonCstm>
            </div>
            <form className={styles.form}>
                <div className={styles.formgroup}>
                    <h3>Nama List item</h3>
                    <input value={name} onChange={(e) => handleInput(e.target.value)} type="text" placeholder='tambahkan nama list item' required/>
                </div>
                <div className={styles.formgroup}>
                    <h3>Priority</h3>
                    <Dropdown type='prior' />
                </div>
                <div 
                    className={styles.formgroup}
                    style={
                        {
                            opacity: `${name.length > 0 ? 1 : .2}`,
                        }
                    }>
                    <ButtonCstm
                        variant='primary'
                        bgCol='blue'>
                        <p>Simpan</p>
                    </ButtonCstm>
                </div>

            </form>
        </div>
    </div>
  )
}
