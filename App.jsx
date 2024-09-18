import "./App.css"
import NavBar from "./src/components/NavBar/NavBar"
import ItemsContainer from "./src/components/ItemsContainer/ItemsContainer"

function App() {
    return(
        <>
            <NavBar />
            <ItemsContainer placeholder={"Search wines..."} greeting={"¡Bienvenido!"} greetingFiller={"Busca entre nuestra selección de más de 20 únicos vinos"} />
        </>
    )
}

export default App