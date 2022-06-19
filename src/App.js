//Hooks
import { useEffect, useState } from "react";

//Components
import MovieCard from "./components/MovieCard";

//Styles
import './App.css';

//Resources
import searchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com/?apikey=20b17f31';

const movie1 = {
	Poster: "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
Title: "Italian Spiderman",
Type: "movie",
Year: "2007",
imdbID: "tt2705436",
}

function App() {
	//Hooks
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSeachTerm] = useState('');

	//Functions
	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		setMovies(data.Search);
	}

	useEffect( () => {
		searchMovies('Spiderman');
	}, [] );

	return (
		<div className="app">
			<div className="search">
				<input
					placeholder="Search for movies"
					value={searchTerm}
					onChange={(e) => setSeachTerm( e.target.value )}
					type="text"
				/>

				<img 
					src={searchIcon} 
					alt="search" 
					onClick={() => searchMovies( searchTerm )}
				/>
			</div>

			{ movies?.length > 0 
				? (
					<div className="container">
						{movies.map( (movie) => (
							<MovieCard movie={movie}/>
						))}
					</div>
					
				) : (
					<div className="empty">
						<h2>No movies found</h2>
					</div>
				)
			}
		</div>
	);
}

export default App;
