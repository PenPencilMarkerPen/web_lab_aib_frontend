import About from "../pages/About";
import Main from "../pages/Main";

const publicRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/main", component: Main, exact: true },
  { path: "/", component: Main, exact: true },
];
export default publicRoutes;
