/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import SimpleMap from "views/mapstest";
// import SimpleMap from 'views/mapstest';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "county",
    icon: "nc-icon nc-pin-3",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Month",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Visualisation Types",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
    
  // },
  {
    path: "/maps2",
    name: "Maps2",
    icon: "nc-icon nc-pin-3",
    component: SimpleMap,
    layout: "/admin",
    
  },

];

export default dashboardRoutes;
