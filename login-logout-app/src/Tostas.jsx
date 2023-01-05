import React from 'react'
import { createContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const TostAut=createContext()
export  function Tostas({children}) {
  return (
    <div>
        <TostAut.Provider value={{toast}}>
            <Toaster  position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // default options
                    className: '',
                    duration: 2000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // options for specific types
                    success: {
                        duration: 1500,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}/>
            {children}
        </TostAut.Provider>
    </div>
  )
}

export default TostAut;