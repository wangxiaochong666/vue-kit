import HomeChild from "./child";
export const routes = [
  {
    path: "/",
    name: "index",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "首页",
    component: () => import("@/components/home"),
    children: HomeChild
  }
];

export default routes;
