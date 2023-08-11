import MoviesList from './assets/mock-data/movieslist.json';

function Movies() {
    return (
        <div>
            {
                MoviesList.map(movie => {
                    return (
                        <div key={movie.id}>
                            {movie.id}. {movie.title} {movie.year}<br />
                            {movie.genre} {movie.langauge}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Movies;