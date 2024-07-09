import "./Header.css"
import {Link} from "react-router-dom"

function Header() {
    return <header className="header">
        <div class="logo">
        <img src="/img/superwrestling.png" alt='Dos personas luchando' />
        <h1> Aluraflix Grappling</h1>
        </div>
        <div class="botones">
        <button class="header_btn"><Link to="./"> Home</Link></button>
        <button class="header_btn"><Link to="./nuevo"> Nuevo video</Link></button>
        </div>
    </header>
}

export default Header