import About from "../pages/About";
import Main from "../pages/Main";
import More from "../pages/More";
const publicRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/main", component: Main, exact: true },
  { path: "/", component: Main, exact: true },
  { path: "/users/:id", component: More, exact: true },
];
export default publicRoutes;
