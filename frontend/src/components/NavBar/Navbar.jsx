export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site title">Spotless Guru Cleaners</a>
        <ul>
            <li className="active">
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/about">About Us</a>
            </li>
            <li>
                <a href="/services">Services</a>
            </li>
            <li>
                <a href="/testimonials">Testimonials</a>
            </li>
            <li>
                <a href="/contact">Contact Us</a>
            </li>
            <li>
                <a href="/cart">Cart</a>
            </li>
        </ul>
    </nav>

}