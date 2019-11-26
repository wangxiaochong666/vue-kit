export const routes = [
  {
    path: "/",
    name: "index",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "首页",
    component: () => import("@/views/Home"),
    icon: "home"
  },
  {
    path: "/userManagement",
    name: "userManagement",
    component: () => import("@/views/userManagement")
  },
  {
    path: "/contactUs",
    name: "contactUs",
    component: () => import("@/views/contactUs")
  }
];

export default routes;
