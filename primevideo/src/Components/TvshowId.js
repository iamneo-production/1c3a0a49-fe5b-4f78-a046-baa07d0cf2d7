import TvShowsList from '../assets/mock-data/tvshowslist.json';
import { useParams } from "react-router-dom";

function TvshowId(){
    let params=useParams();
    let {id}=params;
    return(
        <>
            {
                TvShowsList.filter(tvshow=>tvshow.id==id).length<1?
                <div>TV show not found</div>
                :TvShowsList.filter(tvshow=>tvshow.id==id).map((tvshow)=>{
                    return(
                        <div key={tvshow.id}>
                            <figure>
                                <img src={tvshow.poster} alt={tvshow.title}></img><br/>
                                <figcaption>
                                    {tvshow.title} - {tvshow.year}<br/>
                                    {tvshow.genre.map((t)=>{
                                        return(
                                            <div>{t}</div>
                                        )
                                    })}<br/>
                                    Langauge: {tvshow.langauge} imdb rating: {tvshow.rating}
                                </figcaption>
                            </figure>
                        </div>
                    )
                })
            }
        </>
    );
}
export default TvshowId;