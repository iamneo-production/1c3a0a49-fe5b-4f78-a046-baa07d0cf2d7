import { Link } from 'react-router-dom';
function NavigationBar(){
    return(
        <>
            <Link to="/">Home Page </Link>
            <Link to="/movies">GET /api/movies </Link>
            <Link to="/tvshows">GET /api/tvshows<br/> </Link>
        </>
    );
}
export default NavigationBar;