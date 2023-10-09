import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { userLoggedInQuery } from '@/api/auth/auth.query'
import { ACCESS_TOKEN_KEY, USER_INFO } from '@/constants/auth'
import { UN_REQUIRES_AUTH_PAGE } from '@/config/auth'
const auth = async (to, from, next) => {
  const { userInfo, loggedIn } = storeToRefs(useAuthStore());
  const access_token = localStorage.getItem(ACCESS_TOKEN_KEY)
  const userInfoLocal = JSON.parse(localStorage.getItem(USER_INFO) || '{}')

  if (to.meta.requiresAuth && !loggedIn.value) {
    if (access_token && userInfoLocal?.id) {
      try {
        const { data: user } = await userLoggedInQuery();
        if (user) {
          userInfo.value = user

          next();
        }
      } catch (error) {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        next(`/login?redirect=${to.path}`);
      }
    } else {
      next(`/login?redirect=${to.path}`);
    }
  } else if (access_token && UN_REQUIRES_AUTH_PAGE.includes(to.path)) {
    next('/');
  } else {
    next();
  }
}

export default auth;
