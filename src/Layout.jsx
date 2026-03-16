
import { Link, Outlet} from "react-router-dom";
import "./Layout.css";
export default function Layout() {
    return (
        <div>
            <header>

                <nav >
                    <Link to="/" className="Kking">Home</Link> {" "}
                    <Link to="/MyInfo" className="Kking">MyInfo</Link>
                </nav>

                <Outlet/>
            </header>
        </div>
    )
}