import React from 'react';
import '../../assets/index.css';
import logo from '../../assets/img/logo.jpg';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const UserNavbar = () => {

    const topic = [
        {
            title : "Home",
            url : "/",
        },
        {
            title : "About us",
            url : "/about",
        },
        {
            title : "Faculty & Staffs",
            url : "/faculty",
        },
        {
            title : "Gallery",
            url : "/gallery",
        },
        {
            title : "Academics",
            url : "/academics"
        }
    ]
  return (
    <>
      <div className='h-[9vh] w-full fixed overflow-hidden flex flex-row gap-3 bg-[#f9f9f9] justify-start items-center shadow-md'>
        <div className='h-[90%] w-[4rem] border-none flex justify-center items-center'>
          <img className='mt-3 ml-10' src={logo} alt="SIET Logo" />
        </div>
        <div className='h-[90%] w-[28rem] flex justify-center items-center text-[#011627] font-medium font-sans text-xl'>
          Noyes Matriculation Higher Secondary School
        </div>
        <div className='h-[80%] w-[50%] flex justify-center items-center gap-8 list-none'>
          {
            topic.map((data, index) => (
              <NavLink key={index} to={data.url}>
                <li>{data.title}</li>
              </NavLink>
            ))
          }
        </div>
        <div className='h-[80%] w-[10rem] flex justify-center items-center bg-[#ffc8dd] rounded-md ml-auto mr-5'>
            <div className='text-[#011627] text-[20px] font-normal cursor-pointer flex items-center gap-1'>
                Staff Login <ArrowRight size={20} /> 
            </div>
        </div>
        
      </div>
    </>
  );
};

export default UserNavbar;
