import Home from "views/Home/Home.jsx";
import Icons from "views/Icons/Icons.jsx";
import TableList from "views/TableList/TableList.jsx";
import UserPage from "views/UserPage/UserPage.jsx";
import Diary from "views/InternDiary/InternDiary.jsx";
import MonthlyDiary from "views/MonthlyDiary/MonthlyDiary.jsx";
var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "design_app",
    component: Home
  },
  {
    path: "/icons",
    name: "Register Student",
    icon: "design_image",
    component: Icons
  },
  {
    path: "/user-page",
    name: "User file",
    icon: "users_single-02",
    component: UserPage
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList
  },
  {
    path: "/intern-Diary",
    name: "Internal Training Info",
    icon: "files_paper",
    component: Diary
  },
  {
    path: "/monthly-Diary",
    name: "Monthly Diary",
    icon: "files_paper",
    component: MonthlyDiary
  },

  { redirect: true, path: "/", pathTo: "/home", name: "Dashboard" }
];
export default dashRoutes;
