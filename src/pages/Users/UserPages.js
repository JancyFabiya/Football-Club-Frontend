import React from 'react'
import { Routes, Route } from "react-router-dom";
import ClubPage from './ClubDetailsPage';
import LoginSingUpPage from './LoginSignUpPage';
import VerifyPhoneNumberPage from './VerifyPhoneNumberPage';
import ManagerPage from './ManagerPage';
import PlayerPage from './PlayerPage';
import ManagerDetailsPage from './ManagerDetailsPage';
import PlayerDetailsPage from './PlayerDetailsPage';


const UserPages = () => {
  return (
    <Routes>
        <Route path='/login' element ={<LoginSingUpPage/>}/>
        <Route path='/verify/phone' element={<VerifyPhoneNumberPage/>}/>

        {/* club */}
        <Route path='/club/:id' element={<ClubPage/>}/>
       
        {/* Manager */}
        
        <Route path='/manager/:clubName' element={<ManagerPage/>}/>
        <Route path='/manager/detail/:id' element={<ManagerDetailsPage/>}/>


        {/* Player */}
        
        <Route path='/player/:clubName' element={<PlayerPage/>}/>
        <Route path='/player/detail/:id' element={<PlayerDetailsPage/>}/>




    </Routes>
    )
}

export default UserPages