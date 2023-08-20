import { Link } from 'react-router-dom';
import './Style.css';
function NavigationBar(){
    return(
        <>
            <Link to="/"><div className='nav-div'>Home Page</div> </Link>
            <Link to="/movies"><div className='nav-div'>Movies</div></Link>
            <Link to="/tvshows"><div className='nav-div'>TV Shows</div><br/> </Link>
        </>
    );
}
export default NavigationBar;