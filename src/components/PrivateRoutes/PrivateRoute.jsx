import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  
  if (!user?.phone) {
    return <Navigate to="/register_google" replace />;
  }

  
  return children;
};

export default PrivateRoute;
