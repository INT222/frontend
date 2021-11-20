import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Content from "../views/Content.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import WatchList from "../views/WatchList.vue";
import Genre from "../views/Genre.vue";
import ManageMovie from "../views/ManageMovie.vue";
import ManageUser from "../views/ManageUser.vue"
import MovieForm from "../views/MovieForm.vue";
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
    path: "/content",
    name: "Content",
    component: Content,
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
    path: "/genre",
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
    component: ManageUser
  },
  {
    path: "/movieform",
    name: "MovieForm",
    component: MovieForm,
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

export default router;
