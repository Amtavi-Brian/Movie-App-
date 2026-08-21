import "./css/App.css"
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import {Routes, Route} from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './Components/NavBar';
function App(){
  return (
    <MovieProvider>
      <div>
        <NavBar />
        <main className="main-content">
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
         </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}
export default App;