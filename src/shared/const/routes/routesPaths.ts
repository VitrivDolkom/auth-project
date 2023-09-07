export const routesPaths = {
  root: '/',
  signup: '/register',
  login: '/login',
  auth: '/auth',
  qr: '/qr',
  main: '/main'
} as const;

export type RoutePath = (typeof routesPaths)[keyof typeof routesPaths];
