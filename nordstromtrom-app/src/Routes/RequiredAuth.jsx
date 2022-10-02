import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequiredAuth = ({ children }) => {
  const state = useSelector((state) => state.Data.signInData.signInState);
  const location = useLocation();
  if (state) return children;
  else return <Navigate to="/signin" state={{ from: location }} replace />;
};
