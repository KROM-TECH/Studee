export default [
  {
    path: "/tte",
    name: "Tte",
    component: () => import("@/views/tte/"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tte/timetable",
    name: "Timetable",
    component: () => import("@/views/tte/Timetable"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tte/timetable/:id",
    name: "ViewTimetable",
    component: () => import("@/views/tte/ViewTimetable"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tte/todo",
    name: "Todo",
    component: () => import("@/views/tte/Todo"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tte/event",
    name: "Event",
    component: () => import("@/views/tte/Event"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tte/goal",
    name: "Goal",
    component: () => import("@/views/tte/Goal"),
    meta: {
      requiresAuth: true
    }
  },
];
