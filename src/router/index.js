import {createRouter, createWebHistory} from "vue-router";
import LayOut from "@/views/LayOut/LayOut.vue";
import Login from "@/views/pages/Login.vue";

const routes = [
    {
        path: "/",
        name: "layout",
        // 重新定向
        redirect: "/allUser",
        // redirect: "/login",
        component: LayOut,
        // 子路由
        children: [
            {
                path: "/allUser",
                name: "allUser",
                component: () => import("../views/pages/AllUserList.vue"),
            },
            {
                path: "/statistic",
                name: "statistic",
                component: () => import("../views/pages/StatisticUserList.vue"),
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
        ],
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
