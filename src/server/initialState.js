import config from './config';

const initialState = {
  mainPost: false,
  blog: false,
  currentPost: false,
  user: false,
  profileImg: config.srv.profileImg,
};

export default initialState;
