import { Link } from "react-router-dom";
import SiteLogo from '../../Images/site-logo.png';
import './Logo.scss';

const Logo = () => {
    return (<Link to="/" className='site-logo'>
        <img src={SiteLogo} alt="" className='site-logo-icon' />
        <div className='site-logo-text'>
            <div>Rosenance</div>
        </div>
    </Link>);
}

export default Logo;