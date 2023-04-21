import { createRouter, createWebHistory} from "vue-router";
import LayOut from"@/views/LayOut/LayOut.vue";
const routes = [
  {
    path: "/",
    name: "layout",
    // 重新定向
    redirect: "/allUser",
    component: LayOut,
    // 子路由
    children:[
      {
        path: "/allUser",
        name: "allUser",
        component: () => import("../views/pages/AllUserList.vue"),
      },
      {
        path: "/user",
        name: "user",
        component: () => import("../views/pages/ManageUserList.vue"),
      },
      {
        path: "/fellow",
        name: "fellow",
        component: () => import("../views/pages/FollowUpList.vue"),
      },
      {
        path: "/warning",
        name: "warning",
        component: () => import("../views/pages/WarningList.vue"),
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
