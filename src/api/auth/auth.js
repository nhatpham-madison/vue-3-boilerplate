import http from '@/api/http'

export const login = (payload) => {
  return http.post("/auth/login", payload);
};

export const fetchUserLogged = (userId, params) => {
  return http.get(`/users/${userId}`, {
    params,
  });
};