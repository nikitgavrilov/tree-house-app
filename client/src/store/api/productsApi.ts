import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../models/IProduct";

const API_URL = "http://localhost:3001/api/v1/products";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], null>({
      query: () => ({
        url: "/",
      }),
    }),
    getProductById: builder.query<IProduct, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
