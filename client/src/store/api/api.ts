import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../models/IUser";

const API_URL = "http://localhost:3001/api/v1/users";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "/",
        credentials: "include",
      }),
    }),
    addUser: builder.mutation<null, IUser>({
      query: (user) => ({
        body: user,
        url: "/reg",
        method: "POST",
      }),
    }),
    loginUser: builder.mutation<null, Omit<IUser, "email">>({
      query: (user) => ({
        body: user,
        url: "/login",
        method: "POST",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetUserQuery, useAddUserMutation, useLoginUserMutation } = api;
