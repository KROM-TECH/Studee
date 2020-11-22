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
        path: "/tte/timetable",
        name: "Timetable",
        component: () => import("@/views/tte/Timetable"),
        meta: {
          requiresAuth: true,
        },
      },

      
]