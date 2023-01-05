import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Login"
import Register from "./Register"
import {Tostas} from './Tostas'
import Page from "./Page"
const RouterDom = () => {
    return (
        <div>
            <BrowserRouter>
                <Tostas>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/p"element={<Page/>} />
                    </Routes>
                </Tostas>
            </BrowserRouter>
        </div>
    )
}
export default RouterDom;