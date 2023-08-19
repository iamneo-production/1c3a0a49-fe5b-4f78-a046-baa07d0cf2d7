import MoviesList from '../assets/mock-data/movieslist.json';
import { useParams } from "react-router-dom";
function MovieId(){
    let params=useParams();
    let {id}=params;
    return(
        <>
            <div>You entered {id}</div>
            {
                MoviesList.filter(movie=>movie.id==id).length<1?
                <div>Movie not found</div>
                :MoviesList.filter(movie=>movie.id==id).map(movie=>{
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
        </>
    );
}
export default MovieId;