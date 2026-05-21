import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import PrivateRoute from "./components/PrivateRoute";

function Login() {
  const login = () => {
    localStorage.setItem("auth", "true");
    window.location.href = "/";
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <ProductList />
            </PrivateRoute>
          }
        />

        <Route
          path="/add"
          element={
            <PrivateRoute>
              <ProductForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}