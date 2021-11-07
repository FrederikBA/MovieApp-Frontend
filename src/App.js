import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Search from './components/Search';
import MoviesList from './components/MoviesList';
import MoviesTable from './components/MoviesTable';
import AddMovie from './components/AddMovie';

function App({ apiUtils }) {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='movies-list' element={<MoviesList apiUtils={apiUtils} />} />
        <Route path='movies-table' element={<MoviesTable apiUtils={apiUtils} />} />
        <Route path='add-movie' element={<AddMovie apiUtils={apiUtils} />} />
      </Routes>
    </div>
  )
}

export default App;
