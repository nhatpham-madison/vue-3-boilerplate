import httpRequest from '@/api/httpRequest'

export const login = (payload) => {
  return httpRequest.post("/auth/login", payload);
};

export const fetchUserLogged = (userId, params) => {
  return httpRequest.get(`/users/${userId}`, {
    params,
  });
};