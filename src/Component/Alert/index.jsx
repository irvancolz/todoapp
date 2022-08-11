import React from 'react';
import styles from './alert.module.css';
import icons from '../../Assets/modal-information-icon.svg'

export default function Alert() {
  return (
    <div className=''>
        <div data-cy='Alert Activity'>
          <img src={icons} alt="alert" data-cy='modal-information-icon'/>
        </div>
    </div>
  )
}
