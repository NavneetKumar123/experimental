import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedOut } from '../auth/authSlice';

const baseQuery = fetchBaseQuery({
  // baseUrl: 'http://localhost:8000',
  baseUrl: "https://experimental-lv1h9hgy6-navneetkumar123.vercel.app/",
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
      api.dispatch(userLoggedOut());
      localStorage.clear();
    }
    return result;
  },
});

// create api slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://experimental-lv1h9hgy6-navneetkumar123.vercel.app/',
    // baseUrl: "https://book-backend-production-a4cb.up.railway.app",
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = getState()?.auth?.accessToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['getCategories', 'getBooks', 'getOrders', 'getContacts'],
  endpoints: (builder) => ({}),
});
