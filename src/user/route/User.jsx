import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebLayout from '../layout/WebLayout'

export const User = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<WebLayout />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default User;
