import React from 'react'
import axios from 'axios';
import { useContext } from 'react'
import { useEffect } from 'react';
import TostAut from './Tostas'
export default function Page() {
    const {toast} =useContext(TostAut)
    useEffect(()=>{
        const da=async()=>{
            const headers ={'authorization':localStorage.getItem('token')}
            const d =await axios.post('http://localhost:3000/rp',null,{headers})
            toast.success(d.data)
        }
        da()
    },[])
  return (
    <div>
        hello
    </div>
  )
}
