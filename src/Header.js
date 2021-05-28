import './Header.css';
import SearchBar from './SearchBar';
import logo from './images/logo.png';


function Header(props) {

  

    return ( 
        <header className = "App-header" >
            <img src = { logo } className = "App-logo"alt = "logo" />
            {/* <div className = "Search" >
                <span className = "Icon" ><i className = "fa fa-search"></i></span >
                <input type = "text"placeholder = "Enter GitHub username" />
            </div> */}
            <SearchBar setProfileData={props.setProfileData}/>
        </header>
    );
};

export default Header;