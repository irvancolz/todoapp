import React, { createContext, useContext, useState } from 'react';

const Modal = createContext();

export function useModal(){
    return useContext(Modal);
}

export default function ModalContext({children}) {
    const [isOpen, setIsOpen] = useState({
      status : false,
      mode : 'todo'
    });
    const [targetModal, setTargetModal] = useState({
      name: '',
      id: 0,
      mode: 'activity'
    });


  return (
    <Modal.Provider
    value={{
        isOpen,
        targetModal,
        setIsOpen,
        setTargetModal,
    }}
    >
        {children}
    </Modal.Provider>
  )
}
