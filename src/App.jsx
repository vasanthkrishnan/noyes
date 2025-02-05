import React from 'react'
import { UserNavbar } from './user/component/UserNavbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { User } from './user/route/User';
import { Home } from 'lucide-react';

export const App = () => {
  return (
    <>
      <UserNavbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
