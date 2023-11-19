import "../NavBar/styles.css"
import logo from "../assets/guru.png";
export default function Navbar() {
    return <>
        <div className="nav_1"> {/*Call: 0796286466*/}</div>

        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="Logo" width="100" height="25" />
            </div>
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

            </ul>
        </nav>
    </>
}