import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Product App
      </Link>

      <div className="d-flex gap-3">
        <Link className="text-white" to="/">
          Products
        </Link>
        <Link className="text-white" to="/add">
          Add Product
        </Link>
        <button onClick={logout} className="btn btn-danger btn-sm">
          Logout
        </button>
      </div>
    </nav>
  );
}