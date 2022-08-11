import React from 'react';
import styles from './modal.module.css'
import modalDel from '../../Assets/modal-delete-icon.png';
import ButtonCstm from '../ButtonCstm';
import { useModal } from '../../Helper/ModalContext';
import { deleteActivity, deleteTodo } from '../../Helper/Todo';
import { useAlert } from '../../Helper/AlertContext';

export default function Modal() {
    const {targetModal,setIsOpen, isOpen} = useModal();
    const {setIsAlert} = useAlert()

    function handleAcc(e){
        if(e.mode === 'todo'){
            deleteTodo(e.id).then(res => res.json()).then(data => setIsAlert({status : true, mode :'Activity'}))
        }else{
            deleteActivity(e.id).then(res =>res.json()).then(data => setIsAlert({status : true, mode :'List item'}))
        }
        setIsOpen({
            status : false,
        })
    }

  return (
    <div className={styles.container}>
        <div className={styles.modal} data-cy={`${targetModal.mode === 'todo' ? 'Delete Activity' : 'Delete List Item'}`}>
            <div className={styles.header}>
                <img src={modalDel} alt="alert" />
            </div>
            <div className={styles.body}>
                <p>Apakah anda yakin menghapus {isOpen.mode}</p>
                <p className={styles.boldTxt}>{`"${targetModal.name}" ?`}</p>
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
                    callback={()=>handleAcc(targetModal)}>
                        <p>Hapus</p>
                </ButtonCstm>
            </div>
        </div>
    </div>
  )
}
