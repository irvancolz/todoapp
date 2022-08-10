import React from 'react';
import styles from './modal.module.css'
import modalDel from '../../Assets/modal-delete-icon.png';
import ButtonCstm from '../ButtonCstm';
import { useModal } from '../../Helper/ModalContext';

export default function Modal() {
    const {target,setIsOpen, isOpen} = useModal();
    function handleAcc(e){
        e.mode === 'todo' ? console.log(e.mode) : console.log(e.mode);

        setIsOpen({
            status : false,
        })
    }
  return (
    <div className={styles.container}>
        <div className={styles.modal}>
            <div className={styles.header}>
                <img src={modalDel} alt="alert" />
            </div>
            <div className={styles.body}>
                <p>Apakah anda yakin menghapus {isOpen.mode}</p>
                <p className={styles.boldTxt}>{`"${target.name}" ?`}</p>
            </div>
            <div className={styles.nav}>
                <ButtonCstm 
                    bgCol='gray' 
                    variant='primary'
                    callback={()=> setIsOpen(curr => false)}>
                        <p>Batal</p>
                </ButtonCstm>
                <ButtonCstm 
                    bgCol='red' 
                    variant='secondary'
                    callback={()=>handleAcc(target)}>
                        <p>Hapus</p>
                </ButtonCstm>
            </div>
        </div>
    </div>
  )
}
