import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Movie from "../views/Movie.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import WatchList from "../views/WatchList.vue";
import Genre from "../views/Genre.vue";
import ManageMovie from "../views/ManageMovie.vue";
import ManageUser from "../views/ManageUser.vue";
import Addmovie from "../views/AddMovie.vue";
import EditProfile from "../views/EditProfile.vue";
import User from "../components/User.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/movie/:id",
    name: "Movie",
    component: Movie,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/watchlist",
    name: "WatchList",
    component: WatchList,
  },
  {
    path: "/genre/:id",
    name: "Genre",
    component: Genre,
  },
  {
    path: "/managemovie",
    name: "ManageMovie",
    component: ManageMovie,
  },
  {
    path: "/manageuser",
    name: "ManageUser",
    component: ManageUser,
  },
  {
    path: "/addmovie",
    name: "Addmovie",
    component: Addmovie,
  },
  {
    path: "/editprofile",
    name: "EditProfile",
    component: EditProfile,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const publicPages = ["/signin", "/signup", "/", "/about", "/genre/**"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/signin");
  } else {
    next();
  }
});

export default router;
