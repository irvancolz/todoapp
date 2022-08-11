import React, { createContext, useContext, useState } from 'react'

const Form = createContext();

export function useForm(){
    return useContext(Form);
}

export default function FormContext({children}) {
    const [isOpenForm, setIsOpenForm] = useState({status: false});
    const [isEditForm, setIsEditForm] = useState({status: false});
    const [target, setTarget] = useState({ activity_group_id : 0, id: 0})
  return   (
    <Form.Provider
        value={{
            isOpenForm,
            isEditForm,
            target,
            setIsOpenForm,
            setIsEditForm,
            setTarget
        }}>
        {children}
    </Form.Provider>
  )
}
