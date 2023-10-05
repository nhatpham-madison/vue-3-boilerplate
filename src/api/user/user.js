import httpRequest from '@api/httpRequest'

export const fetchUsers = (params) => {
  return httpRequest.get("/users", {
    params,
  });
};