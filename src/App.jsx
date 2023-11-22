import Navbar from "./components/Navbar"
import Overview from "./components/Overview"
import Games from "./components/Games"
import Pokemon from "./components/Pokemon"
import Characters from "./components/Characters"


export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Overview />
            <Games />
            <Pokemon />
            <Characters />
        </div>
    )
}