import { ACCESS_TOKEN_KEY } from '@/utils/constants'

const checkLoggedIn = async (from, to, next) => {
  const access_token = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (access_token) {
    next("/");
  } else {
    next();
  }
};

export { checkLoggedIn };
