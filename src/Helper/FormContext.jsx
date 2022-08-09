import React, { createContext, useContext, useState } from 'react'

const Form = createContext();

export function useForm(){
    return useContext(Form);
}

export default function FormContext({children}) {
    const [isOpenForm, setIsOpenForm] = useState(false);
  return   (
    <Form.Provider
        value={{
            isOpenForm,
            setIsOpenForm,
        }}>
        {children}
    </Form.Provider>
  )
}
