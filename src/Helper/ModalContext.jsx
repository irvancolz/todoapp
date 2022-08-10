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
    const [target, setTarget] = useState({});


  return (
    <Modal.Provider
    value={{
        isOpen,
        target,
        setIsOpen,
        setTarget,
    }}
    >
        {children}
    </Modal.Provider>
  )
}
