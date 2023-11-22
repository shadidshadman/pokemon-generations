export default function Navbar() {
    return (
        <nav className="navbar-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" className="nav--icon" alt="Pokemon Logo" />
            <h3 className="nav--logo_text">Pokemon Generations</h3>
            <ul className="nav--links">
                <li className="nav--link"> <a href="https://bulbapedia.bulbagarden.net/wiki/Generation_I">Gen 1</a> </li>
                <li className="nav--link"> <a href="https://bulbapedia.bulbagarden.net/wiki/Generation_II">Gen 2</a> </li>
                <li className="nav--link"> <a href="https://bulbapedia.bulbagarden.net/wiki/Generation_III">Gen 3</a> </li>
                <li className="nav--link"> <a href="https://bulbapedia.bulbagarden.net/wiki/Generation_IV">Gen 4</a> </li>
                <li className="nav--link"> <a href="https://bulbapedia.bulbagarden.net/wiki/Generation_V">Gen 5</a> </li>
            </ul>
        </nav>
    )
}