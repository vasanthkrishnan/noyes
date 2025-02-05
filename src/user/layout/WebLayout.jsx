import React from 'react'
import UserNavbar from '../component/UserNavbar';
import { Outlet } from 'react-router-dom';

export const WebLayout = () => {
  return (
    <>
        <div className='h-screen w-screen overflow-x-hidden'>
            <UserNavbar />
            <div className='h-[91vh] w-screen'>
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default WebLayout;
