import React from 'react';
import '~/assets/css/404.css';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div id='oopss'>
      <div id='error-text'>
        <img
          src='https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg'
          alt='404'
        />
        <span>404 PAGE</span>
        <p className='p-a'>
          . The page you were looking for could not be found
        </p>
        <p className='p-b'>... Back to home page</p>
        <Link to='/' className='back'>
          ... Back to home page
        </Link>
      </div>
    </div>
  );
};

export default Page404;
