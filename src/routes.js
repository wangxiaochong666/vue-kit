export const routes = [
  {
    path: "/",
    name: "首页",
    exact: true,
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
    icon: "home"
  }
];

export default routes;
