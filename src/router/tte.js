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
        component: () => import("@/views/tte/timetable/Timetable"),
        meta: {
          requiresAuth: true,
        },
      },
    {
        path: "/tte/timetable/:id",
        name: "ViewTimetable",
        component: () => import("@/views/tte/timetable/ViewTimetable"),
        meta: {
          requiresAuth: true,
        },
      },
    {
        path: "/tte/todo",
        name: "Todo",
        component: () => import("@/views/tte/Todo"),
        meta: {
          requiresAuth: true,
        },
      },

      
]