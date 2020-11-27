export default [
  {
    path: "/signup",
    name: "Signup",
    component: () => import("@/views/auth/Signup.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/auth/Login.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: () => import("@/views/auth/Forget.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/verify",
    name: "Verify",
    component: () => import("@/views/auth/Verify.vue"),
    meta: {
      requiresVerify: true
    }
  }
];
