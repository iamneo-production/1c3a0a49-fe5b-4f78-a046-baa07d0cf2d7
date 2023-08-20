import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './Components/Movies';
import Tvshows from './Components/Tvshows';
import MovieId from './Components/MovieId';
import TvshowId from './Components/TvshowId';
import HomePage from './Components/HomePage';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
                <NavigationBar></NavigationBar>
                <Routes>
                    <Route path='/' element={<HomePage></HomePage>}></Route>
                    <Route path='/movies' element={<Movies></Movies>}></Route>
                    <Route path='/tvshows' element={<Tvshows></Tvshows>}></Route>
                    <Route path='/movies/:id' element={<MovieId></MovieId>}></Route>
                    <Route path='/tvshows/:id' element={<TvshowId></TvshowId>}></Route>
                    <Route path='/*' element={<h1>Invalid URL</h1>}></Route>
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
