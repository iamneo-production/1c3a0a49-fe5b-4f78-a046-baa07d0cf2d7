import TvShowsList from '../assets/mock-data/tvshowslist.json';

function Tvshows(){
    return(
        <div>
            {
                TvShowsList.length<1
                ?<div>Currently no TV shows available</div>
                :TvShowsList.map((tvshow)=>{
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
        </div>
    );
}

export default Tvshows;