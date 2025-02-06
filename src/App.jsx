import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { User } from './user/route/User';


export const App = () => {
  return (
    <>
    <div className='h-screen w-screen overflow-x-hidden overflow-y-auto'>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App;
