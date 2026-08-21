
import MovieCard from '../Components/MovieCard';
import {useState, useEffect} from 'react';
import "../css/Home.css";
import { getPopularMovies, searchMovies } from '../services/api';

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() === "") return;
        if(loading) return;
       setLoading(true);
       try{
        const serachResults = await searchMovies(searchQuery);
        setMovies(serachResults);
    }catch(error){
        console.error(error);
        setError("Failed to search movies");
        setError(null);
    }finally{
        setLoading(false);
    }
    setSearchQuery("");
    };
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);
    return (
    <div className="Home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>
        {error && <div className="error-message">{error.message}</div>}
        {loading ? (
            <div className="loading">Loading...</div>
        ) : (
            <div className="movie-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard key={movie.id} movie={movie} />)
                ))}
            </div>
        )}
    </div>
    );
}
export default Home;