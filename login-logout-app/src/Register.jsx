import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import TostAut from './Tostas'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
export default function Register() {
    const [state,setState] =useState({
        email:'',
        password:'',
        confirmpassword:''
    })
    const refer =useRef()
    const refer2 =useRef()
    const nav =useNavigate()
    const {toast} =useContext(TostAut)
    const handler =async()=>{
        const {email,password,confirmpassword}=state
        if(password == confirmpassword){
            if(!password.includes('!') && !password.includes('@') && !password.includes('#') && !password.includes('$') && !password.includes('%') && !password.includes('^') && !password.includes('&') && !password.includes('*') && !password.includes('?')){
                // refer.current.style.backgroundColor='red'
                refer.current.style.border='2px solid red'
                refer2.current.style.border='2px solid red'
                return toast.error('Password must contain special Charcter')
            }else{
                // refer.current.style.backgroundColor='red'
                refer.current.style.border='2px solid black'
                refer2.current.style.border='2px solid black'
                const res =await axios.post('https://backend-xcfn.onrender.com/register',{email,password})
                if(res.data !='successfully Register'){
                    return toast.error(res.data)
                }else{
                    toast.success(res.data)
                    nav('/')
                }
            }
        }else{
            // refer.current.style.backgroundColor='red'
            refer.current.style.border='2px solid red'
            refer2.current.style.border='2px solid red'
            toast.error('confirmpassword and password should be same')
        }
    }
  return (
    <div className='register-div'>
        <div>
            <h2>Email :</h2>
            <input type="email"  onChange={(e)=>setState({...state,email:e.target.value})}/>
        </div>
        <div>
            <h2>Password :</h2>
            <input type="password" ref={refer} onChange={(e)=>setState({...state,password:e.target.value})}/>
        </div>
        <div>
            <h2>ConfirmPassword</h2>
            <input type="password"  ref={refer2} onChange={(e)=>setState({...state,confirmpassword:e.target.value})}/>
        </div>
        <div>
            <button onClick={handler}>sign-in</button>
        </div>
    </div>
  )
}
