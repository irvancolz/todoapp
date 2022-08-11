import React, { createContext, useContext, useState } from 'react'
const Alert = createContext();

export function useAlert(){
    return useContext(Alert);
}

export default function AlertContext({children}) {
    const [isAlert, setIsAlert] = useState({
        status: false,
        mode: 'Activity'
    });
  return (
    <Alert.Provider
    value={{
        isAlert,
        setIsAlert
    }}>
        {children}
    </Alert.Provider>
  )
}
