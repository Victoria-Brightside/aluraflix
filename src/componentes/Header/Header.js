import "./Header.css"

function Header() {
    return <header className="header">
        <div class="logo">
        <img src="/img/superwrestling.png" alt='Dos personas luchando' />
        <h1> Aluraflix Grappling</h1>
        </div>
        <div class="botones">
        <button class="header_btn"> Home</button>
        <button class="header_btn"> Nuevo video</button>
        </div>
    </header>
}

export default Header