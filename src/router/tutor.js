export default [
  {
    path: "/tutor",
    name: "Tutor",
    component: () => import("../views/tutor"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tutor/find",
    name: "Find",
    component: () => import("../views/tutor/Find.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tutor/profile/:id",
    name: "TutorProfile",
    component: () => import("../views/tutor/TutorProfile.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tutor/find/:id",
    name: "QueriedTutors",
    component: () => import("../views/tutor/Query_Tutors.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tutor/yourprofile",
    name: "YourProfile",
    component: () => import("../views/tutor/Yourprofile.vue"),
    meta: {
      requiresAuth: true
    }
  }
];
