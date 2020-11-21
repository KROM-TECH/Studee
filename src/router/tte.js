export default [
    {
        path: "/tte",
        name: "Tte",
        component: () => import("@/views/tte/"),
        meta: {
          requiresAuth: true,
        },
      },
    {
        path: "/questions/ask",
        name: "Ask",
        component: () => import("@/views/askQuestions/Ask"),
        meta: {
          requiresAuth: true,
        },
      },
    {
        path: "/questions/answer",
        name: "Answer",
        component: () => import("@/views/askQuestions/Answer"),
        meta: {
          requiresAuth: true,
        },
      },
    {
        path: "/questions/answer/:id",
        name: "Answer",
        component: () => import("@/views/askQuestions/Details"),
        meta: {
          requiresAuth: true,
        },
      },
      
]