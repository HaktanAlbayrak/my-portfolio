import { useEffect, useState } from 'react';

import SiteLayout from '~/layout';
import Home from '~/pages/home';
import About from '~/pages/about';
import Projects from '~/pages/projects';
import Page404 from '~/pages/404';

import { Route, Routes } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className='flex w-full h-screen justify-center items-center bg-slate-800'>
          <PacmanLoader
            color={'#FFC700'}
            loading={loading}
            size={50}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        </div>
      ) : (
        <Routes>
          <Route path='/' element={<SiteLayout />}>
            <Route index={true} element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Projects' element={<Projects />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      )}
    </>
  );
}

export default App;
