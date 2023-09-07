import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { routesPaths } from '@/shared/const/routes';
import { AuthContext } from '@/shared/model/contexts';

const ProtectedRoute = () => {
  const location = useLocation();
  const { isAuth } = useContext(AuthContext);

  // ! delete this condition after testing
  if (location.pathname === routesPaths.main) {
    return <Outlet />;
  }

  if (!isAuth) {
    return <Navigate to={routesPaths.auth} replace state={{ from: location }} />;
  }

  if (location.pathname === routesPaths.root) {
    return <Navigate to={routesPaths.main} replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
