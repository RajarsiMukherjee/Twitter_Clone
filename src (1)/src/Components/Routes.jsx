import React from 'react';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { Step2 } from "./Register/Step2"
import { Step3 } from "./Register/Step3"
import { Routes, Route } from "react-router-dom"
import { EnterPass } from './Login/EnterPass';
import { Input } from '../Pages/input';
import { AuthHome } from './Auth-Home/Auth-home';
import { CreatePass } from './Register/create_pswd';

export const AllRoutes = () => {

    return <Routes>
            <Route path="/" element={<AuthHome/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/enterpassword" element={<EnterPass />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
            <Route path="/input" element={<Input/> }/>
            <Route path="/signup/password" element={ <CreatePass/> }/>
        </Routes>
}