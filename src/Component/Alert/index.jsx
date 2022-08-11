import React, { useEffect } from 'react';
import styles from './alert.module.css';
import icons from '../../Assets/modal-information-icon.svg';
import { useAlert } from '../../Helper/AlertContext';

export default function Alert() {
  const {isAlert,setIsAlert} = useAlert();
  useEffect(()=>{
    setTimeout(()=>{
      setIsAlert({status : false})
    }, 1000)
  })
  return (
    <div className={styles.container}>
        <div className={styles.alert} data-cy='Alert Activity'>
          <img src={icons} alt="alert" data-cy='modal-information-icon'/>
          <p className={styles.txt}>{isAlert.mode} berhasil dihapus</p>
        </div>
    </div>
  )
}
