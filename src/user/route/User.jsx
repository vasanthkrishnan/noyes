import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import WebLayout from '../layout/WebLayout'
import HomePage from '../pages/Home'
import About from '../pages/About'
import Faculty from '../pages/Faculty'
import Gallery from '../pages/Gallery'
import Academics from '../pages/Academics'

export const User = () => {
  return (
    <>
            <Routes>
                <Route element={<WebLayout />}>
                  <Route path='/' element={<HomePage />} />
                  <Route path='about' element={<About />} />
                  <Route path='faculty' element={<Faculty />} />
                  <Route path='gallery' element={ <Gallery />} />
                  <Route path='academics' element = { <Academics />} />

                  <Route path='*' element = { <Navigate to="/" replace />} />
                </Route>
            </Routes>
    </>
  )
}

export default User;
