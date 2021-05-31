import './Header.css';
import SearchBar from './SearchBar';
import logo from '../images/logo.png';


function Header(props) {
    return ( 
        <header className = "App-header" >
            <img src = { logo } className = "App-logo"alt = "logo" />
            <SearchBar setProfileData={props.setProfileData}/>
        </header>
    );
};

export default Header;