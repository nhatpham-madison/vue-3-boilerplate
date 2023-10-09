import http from '@/api/http'

export const fetchUsers = (params) => {
  return http.get("/users", {
    params,
  });
};