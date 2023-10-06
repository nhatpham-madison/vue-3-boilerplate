import { useAuthStore } from '@stores/auth'
import { storeToRefs } from 'pinia'
import { userLoggedInQuery } from '@api/auth/auth.query'
import { ACCESS_TOKEN_KEY, USER_INFO } from '@/utils/constants'

const auth = async (from, to, next) => {
  const { loggedIn } = useAuthStore();
  const { userInfo } = storeToRefs(useAuthStore());

  if (from.meta.requireAuth && !loggedIn.value) {
    const access_token = localStorage.getItem(ACCESS_TOKEN_KEY);
    const userInfoLocal = localStorage.getItem(USER_INFO);
    
    if (access_token && userInfoLocal) {
      try {
        const { data: user } = await userLoggedInQuery();

        if (user) {
          userInfo.info = user

          next();
        }
      } catch (error) {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        next(`/login?redirect=${to.path}`);
      }
    } else {
      next(`/login?redirect=${to.path}`);
    }
  } else {
    next();
  }
}

export default auth;