import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar-brand">E-commerce</div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </nav>
    )
}