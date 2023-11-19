export default function Navbar() {
    return <>
        <div className="nav_1"> Call: 0796286466</div>

        <nav className="nav">
            <a href="#" class="header-logo">
                <img src="../assets/guru.png" alt="logo" width="300" height="100">
                </></a>
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
    </>;
}
