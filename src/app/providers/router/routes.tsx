import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { AuthProvider } from '@/entities/auth';
import { ThemeProvider } from '@/entities/theme';
import { AuthPage } from '@/pages/auth';
import { LoginPage } from '@/pages/login';
import { LoginQR } from '@/pages/loginQr';
import { MainPage } from '@/pages/main';
import { SignUpPage } from '@/pages/signup';
import { routesPaths } from '@/shared/const/routes';

import { store } from '../../store';
import ProtectedRoute from './ProtectedRoute';

export const routes = [
  {
    element: (
      <AuthProvider>
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
      </AuthProvider>
    ),
    errorElement: <p>Error 404, page not found (custom).</p>,
    children: [
      {
        path: routesPaths.root,
        element: (
          <Provider store={store}>
            <ProtectedRoute />
          </Provider>
        ),
        children: [
          {
            path: routesPaths.main,
            element: <MainPage />
          }
        ]
      },
      {
        path: routesPaths.login,
        element: <LoginPage />
      },
      {
        path: routesPaths.signup,
        element: <SignUpPage />
      },
      {
        path: routesPaths.auth,
        element: <AuthPage />
      },
      {
        path: routesPaths.qr,
        element: <LoginQR />
      }
    ]
  }
];
