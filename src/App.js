import logo from './logo.svg';
import './App.css';

import Gotop from './componet/Gotop';
import Home from './componet/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './componet/Game';
import Video from './componet/Video';
import Formus from './componet/Formus';
import Contect from './componet/Contect';
import Blog from './componet/Blog';
import { useEffect } from 'react';
import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
          <Route path="/games" element={<Game />}>

          </Route>
          <Route path="/videos" element={<Video />}>

          </Route>
          <Route path="/Formus" element={<Formus />}>

          </Route>
          <Route path="/Contect" element={<Contect />}>

          </Route>
          <Route path="/blog" element={<Blog />}>

          </Route>
        </Routes>
      </BrowserRouter>

      <div>




        <Gotop />
      </div>
    </>
  );
}

export default App;
