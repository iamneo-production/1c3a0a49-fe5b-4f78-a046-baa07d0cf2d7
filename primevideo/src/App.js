import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Movies from './Components/Movies';
import Tvshows from './Components/Tvshows';
import MovieId from './Components/MovieId';
import TvshowId from './Components/TvshowId';


function App() {
  return (
    <div className="App">
      <div>Welcome to Prime Video</div>
      <BrowserRouter>
                <Link to="/movies">GET /api/movies<br/> </Link>
                <Link to="/tvshows">GET /api/tvshows<br/> </Link>
                <Routes>
                    <Route path='/movies' element={<Movies></Movies>}></Route>
                    <Route path='/tvshows' element={<Tvshows></Tvshows>}></Route>
                    <Route path='/movies/:id' element={<MovieId></MovieId>}></Route>
                    <Route path='/tvshows/:id' element={<TvshowId></TvshowId>}></Route>
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
