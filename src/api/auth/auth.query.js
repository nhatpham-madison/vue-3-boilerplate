import { useMutation } from 'vue-query'
import { login, fetchUserLogged } from './auth'

export const loginMutation = () => useMutation((payload) => login(payload))

export const userLoggedInQuery = () => useQuery('user-logged', fetchUserLogged, {
  refetchOnWindowFocus: false,
})
