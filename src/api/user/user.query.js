import { useQuery } from 'vue-query'
import { fetchUsers } from './user'


export const usersResult = () => useQuery("users", fetchUsers, {
  refetchOnWindowFocus: false,
});

