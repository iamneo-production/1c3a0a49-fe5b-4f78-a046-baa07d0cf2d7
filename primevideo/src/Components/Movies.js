import MoviesList from '../assets/mock-data/movieslist.json';

function Movies(){
    return(
        <div>
            {
                MoviesList.length<1
                ?<div>Currently no movies available</div>
                :MoviesList.map((movie)=>{
                    return(
                        <div key={movie.id}>
                            <figure>
                                <img src={movie.poster} alt={movie.title}></img><br/>
                                <figcaption>
                                    {movie.title} - {movie.year}<br/>
                                    {movie.genre.map((m)=>{
                                        return(
                                            <div>{m}</div>
                                        )
                                    })}<br/>
                                    Langauge: {movie.langauge} imdb rating: {movie.rating}
                                </figcaption>
                            </figure>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Movies;