import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Fitcine Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Client/User Dashboard",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Organization Login",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  }
];
export default routes;
