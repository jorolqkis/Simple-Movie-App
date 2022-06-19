const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div className="movie__year">
                <p>{movie.Year}</p>
            </div>

            <div className="movie__image">
                <img src={movie.Poster !== 'N/A' ?  movie.Poster : 'https://via.placehlder.com/400' } alt={movie.Title} />
            </div>

            <div className="movie__content">						
                <span>{movie.Type}</span>

                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;