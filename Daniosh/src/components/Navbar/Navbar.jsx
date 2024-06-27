import { Outlet, Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>
          <Link to={"/checkout"}>
            <li>Checkout </li>
          </Link>
          <Link to={"/login"}>
            <IoPerson className="personIcon" />
          </Link>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
