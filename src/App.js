import SiteLayout from './layout';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import { Route, Routes } from 'react-router-dom';
import Page404 from './pages/404';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SiteLayout />}>
          <Route index={true} element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
