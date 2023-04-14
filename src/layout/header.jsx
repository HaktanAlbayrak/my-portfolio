import React from 'react';
import { NavLink } from 'react-router-dom';
import '~/assets/css/header.css';

const Header = () => {
  return (
    <header className='container mx-auto flex flex-row justify-between p-4'>
      <h1>Haktan Albayrak</h1>
      <nav className='flex flex-row '>
        <NavLink
          to='/'
          className='ml-6 hover:border-b-2 hover:border-b-gray-600 cursor-pointer transition-all text-xl tracking-widest font-semibold	'
        >
          HOME
        </NavLink>
        <NavLink
          to='/About'
          className='ml-6 hover:border-b-2 hover:border-b-gray-600 cursor-pointer transition-all text-xl tracking-widest font-semibold	'
        >
          ABOUT ME
        </NavLink>
        <NavLink
          to='/Projects'
          className='ml-6 hover:border-b-2 hover:border-b-gray-600 cursor-pointer transition-all text-xl tracking-widest font-semibold	'
        >
          PROJECTS
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
