import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/users/' }),
  endpoints: (builder) => ({
    fetchUserById: builder.query<IUser, number>({
      query: (userId: number) => ({
        url: `${userId}`
      })
    })
  })
});
