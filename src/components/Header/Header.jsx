import { Link } from "react-router-dom";

function Header (){
    return (
        <header className="header">
            <div className="header-img" >
                <img  src="/asset/logo.png" alt="logo kasa" />
            </div>
            
            <nav className="header-navbar">
            <Link to="/" className="header-navbar-a">Accueil</Link>
            <Link to="/about" className="header-navbar-a">A propos </Link>
            </nav>
        </header>
    )
}

export default Header;