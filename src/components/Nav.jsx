import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
    return (
        <section className="nav">
            <Link to="/">
                <section>Stocks 'R Us</section>
            </Link>
            <Link to="/stocks/">
                <section>All Stocks</section>
            </Link>
            <Link to="/about/">
                <section>About</section>
            </Link>
        </section>
    )
}

export default Nav;