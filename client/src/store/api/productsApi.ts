import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../models/IProduct";

const API_URL = "http://localhost:3001/api/v1/products";

export const productsApi = createApi({
  reducerPath: "products-api",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], null>({
      query: () => "/",
      providesTags: () => ["Product"],
    }),
    getProductById: builder.query<IProduct, number>({
      query: (id) => `/${id}`,
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["Product"],
    }),
    editProgram: builder.mutation({
      query: ({ id, product }) => ({
        url: `/${id}`,
        body: product,
        method: "PUT",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useDeleteProductMutation,
  useAddProductMutation,
  useEditProgramMutation,
} = productsApi;
