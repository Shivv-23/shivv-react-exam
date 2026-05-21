import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const auth = localStorage.getItem("auth");

  return auth ? children : <Navigate to="/login" />;
}