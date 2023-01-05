import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import TostAut from './Tostas'
import axios from 'axios';
import { useRef } from 'react';
export default function Login() {
    const [state,setState] =useState({
        email:'',
        password:'',
    })
    const {toast} =useContext(TostAut)
    const refer =useRef()
    const nav =useNavigate()
    const hander =()=>{
        nav('/Register')
    }
    const hand =async()=>{
        const {email,password}=state
        console.log(state)
        const res =await axios.post('https://backend-xcfn.onrender.com/login',{email,password})
        if(res.data =='invalid password'){
            refer.current.style.border='2px solid red'
            toast.error(res.data)
        }else if(res.data !='register first'){
            refer.current.style.border='2px solid black'
            console.log(res.data)
            toast.success(res.data[0])
            localStorage.setItem('token',res.data[1])
            nav('/p')
        }else{
            toast.error(res.data)
        }
    }
    return (
        <div className='Loging-div'>
            <div>
                <div>
                    <h2>Email :</h2>
                    <input type="email" onChange={(e)=>setState({...state,email:e.target.value})}/>
                </div>
                <div>
                    <h2>Password :</h2>
                    <input type="password" ref={refer} onChange={(e)=>setState({...state,password:e.target.value})}/>
                </div>
                <div>
                    <button onClick={()=>hand()}>Login</button>
                </div>
                <div>
                    <h2>need a an account ? <span onClick={()=>hander()} className='nav-sigin'>Sigin-in</span></h2>
                </div>
            </div>
        </div>
    )
}
