// Code mostly attributed to ui.dev and Tyler McGinnis
import { Navigate, useLocation } from 'react-router';
import useAuth from '../app/useAuth';

export default function RequireAuth({ children }) {
  const { authed } = useAuth();
  const location = useLocation();
  return authed === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
}
