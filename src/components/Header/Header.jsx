import { NavLink } from "react-router-dom";

function Header (){
    return (
        <header className="header">
            <NavLink to="/" className="header-img" >
                <img  src="/asset/logo.png" alt="logo kasa" />
            </NavLink>
            
            <nav className="header-navbar">
               
                    <NavLink to="/" className= {(link) => (link.isActive ? "header-active" : "")}>Accueil</NavLink>
                    <NavLink to="/about" className={(link) => (link.isActive ? "header-active" : "")}>A propos</NavLink>
                
            </nav>
        </header>
    )
}

export default Header;

