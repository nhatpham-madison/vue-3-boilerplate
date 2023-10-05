export const BASE_API_URL = import.meta.env.APP_BASE_API_URL || 'http://localhost:3000/api/'
export const BASE_WEB_APP_URL = import.meta.env.APP_BASE_WEB_APP_URL || window.location.origin
export const REDIRECT_ON_LOGOUT = import.meta.env.APP_LOGOUT_REDIRECT || '/login'