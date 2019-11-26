export default [
  {
    path: "userManagement",
    name: "userManagement",
    component: () => import("@/views/userManagement")
  },
  {
    path: "contactUs",
    name: "contactUs",
    component: () => import("@/views/contactUs")
  }
];
