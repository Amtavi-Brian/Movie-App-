
import MovieCard from '../assets/Components/MovieCard';
import {useState} from 'react';
function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    }
    const movies = [
        {id: 1, title: "Inception", release_date: "2010-07-16", url: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"},
        {id: 2, title: "Interstellar", release_date: "2014-11-07", url: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"},
        {id: 3, title: "The Dark Knight", release_date: "2008-07-18", url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"},
        {id: 4, title: "Memento", release_date: "2000-10-11", url: "https://image.tmdb.org/t/p/w500/fQMSaP88cf1nz4qwuNEEFtazuDM.jpg"},
        {id: 5, title: "Dunkirk", release_date: "2017-07-21", url: "https://image.tmdb.org/t/p/w500/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg"},
        {id: 6, title: "Tenet", release_date: "2020-08-26", url: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg"},
    ];
    return (
    <div className="Home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
               movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard key={movie.id} movie={movie} />)
            ))}
        </div>
    </div>
    );
}
export default Home;