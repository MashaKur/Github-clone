import './Header.css';
import logo from './images/logo.png';

function Header() {
    return ( 
        <header className = "App-header" >
            <img src = { logo } className = "App-logo"alt = "logo" />
            <div className = "Search" >
                <span className = "Icon" ><i className = "fa fa-search"></i></span >
                <input type = "text"placeholder = "Enter GitHub username" />
            </div>
        </header>
    );
};

export default Header;