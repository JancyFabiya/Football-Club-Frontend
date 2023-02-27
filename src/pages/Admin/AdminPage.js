import React from 'react'
import { Routes, Route } from "react-router-dom";
import ClubListPage from './ClubListPage';
import ManagerListPage from './ManagerListPage';
import NewClubPage from './NewClubPage';
import NewManagerPage from './NewManagerPage';
import NewPlayerPage from './NewPlayerPage';
import PlayerListPage from './PlayerListPage';
import UpdateClubPage from './UpdateClubPage';
import UpdateManagerPage from './UpdateManagerPage';
import UpdatePlayerPage from './UpdatePlayerPage';


const AdminPage = () => {
  return (
    <Routes>
      {/* Club */}
        <Route path='/clubs' element={<ClubListPage/>}/>
        <Route path='/club/new' element={<NewClubPage/>}/>
        <Route path='/club/:id' element={<UpdateClubPage/>}/>

      {/* Manager */}
        <Route path='/managers' element={<ManagerListPage/>}/>
        <Route path='/manager/new' element={<NewManagerPage/>}/>
        <Route path='/manager/:id' element={<UpdateManagerPage/>}/>

      {/* Player */}
        <Route path='/players' element={<PlayerListPage/>}/>
        <Route path='/player/new' element={<NewPlayerPage/>}/>
        <Route path='/player/:id' element={<UpdatePlayerPage/>}/>


    </Routes>
  )
}

export default AdminPage