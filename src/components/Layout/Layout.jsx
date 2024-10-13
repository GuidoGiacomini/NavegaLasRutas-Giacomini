import NavBar from "../NavBar/NavBar"

const Layout = ({ children, setSelectedCategory, cartCount }) => {
    return (
        <>
        <NavBar setSelectedCategory={setSelectedCategory} cartCount={cartCount} />
        {children}
        </>
    )
}

export default Layout