import React, { createContext, useContext, useState } from 'react'

const Form = createContext();

export function useForm(){
    return useContext(Form);
}

export default function FormContext({children}) {
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [isEditForm, setIsEditForm] = useState({status: false,});
  return   (
    <Form.Provider
        value={{
            isOpenForm,
            isEditForm,
            setIsOpenForm,
            setIsEditForm,
        }}>
        {children}
    </Form.Provider>
  )
}
