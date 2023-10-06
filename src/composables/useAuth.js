import { storeToRefs } from 'pinia'
import { useStorage } from '@vueuse/core'
import { loginMutation } from '@api/auth/auth.query'
import { useAuthStore } from '@stores/auth'
import { ACCESS_TOKEN_KEY, USER_INFO } from '@utils/constants'

const useAuth = () => {
  const router = useRouter();
  const { loggedIn, userInfo: user } = storeToRefs(useAuthStore());
  const accessToken = useStorage(ACCESS_TOKEN_KEY, "");
  const userInfo = useStorage(USER_INFO, "");

  const { data: loginData, isLoading: isLoginLoading, isError: isLoginError, error: loginError, isSuccess: isLoginSuccess, mutateAsync } = loginMutation();

  const signIn = async ({ password, username }) => {
    await mutateAsync({
      password,
      username,
    })

    if (loginData?.value) {
      accessToken.value = loginData.value?.token
      userInfo.value = JSON.stringify(loginData?.value || {})
      router.push('/')
    }
  }

  const signOut = () => {
    accessToken.value = null
    userInfo.value = null
    router.push('/login')
  };

  return {
    signIn,
    signOut,
    isLoginLoading,
    isLoginError,
    loginError,
    isLoginSuccess,
    user,
    loggedIn,
  }
}

export default useAuth;