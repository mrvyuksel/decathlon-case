import path from "./constants";
import PostPage from "../../pages/Post";
import ProfilePage from "../../pages/Profile";
import profileDetail from "../../pages/Profile-detail";

const route = [
  {
    path: path.POST,
    component: PostPage,
  },
  {
    path: path.PROFILE,
    component: ProfilePage,
  },
  {
    path: path.PROFILEDETAIL,
    component: profileDetail,
  },
];

export default route;