export default function Pokemon() {
    return (
        <main>
            <h1 className="pokemon-title">Favourite Pokemon per Generation</h1>
            <div className="pokemon-generations">
                <ul>
                    <li>
                        <strong>Gen 1</strong>
                        <h4><a href="https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)">Charizard</a></h4>
                        <img src="0006Charizard.png" alt="Charizard" className="pokemon--icon"/>
                        <p>Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.</p>
                    </li>
                    <li>
                        <strong>Gen 2</strong>
                        <h4><a href="https://bulbapedia.bulbagarden.net/wiki/Tyranitar_(Pok%C3%A9mon)">Tyranitar</a></h4>
                        <img src="0248Tyranitar.png" alt="Tyranitar" className="pokemon--icon"/>
                        <p>Tyranitar is so overwhelmingly powerful, it can bring down a whole mountain to make its nest. This Pokémon wanders about in mountains seeking new opponents to fight.</p>
                    </li>
                    <li>
                        <strong>Gen 3</strong>
                        <h4><a href="https://bulbapedia.bulbagarden.net/wiki/Blaziken_(Pok%C3%A9mon)">Blaziken</a></h4>
                        <img src="0257Blaziken.png" alt="Blaziken" className="pokemon--icon"/>
                        <p>Blaziken has incredibly strong legs—it can easily clear a 30-story building in one leap. This Pokémon’s blazing punches leave its foes scorched and blackened.</p>
                    </li>
                    <li>
                        <strong>Gen 4</strong>
                        <h4><a href="https://bulbapedia.bulbagarden.net/wiki/Gallade_(Pok%C3%A9mon)">Gallade</a></h4>
                        <img src="0475Gallade.png" alt="Gallade" className="pokemon--icon"/>
                        <p>Gallade is a master of courtesy and swordsmanship. It fights using extending swords on its elbows. With a slash of its blade-like arms, it can beat a foe in two blinks of an eye.</p>
                    </li>
                    <li>
                        <strong>Gen 5</strong>
                        <h4><a href="https://bulbapedia.bulbagarden.net/wiki/Hydreigon_(Pok%C3%A9mon)">Hydreigon</a></h4>
                        <img src="0635Hydreigon.png" alt="Hydreigon" className="pokemon--icon"/>
                        <p>It responds to movement by attacking. This scary, three-headed Pokémon devours everything in its path!</p>
                    </li>
                </ul>
            </div>
        </main>
    );
}