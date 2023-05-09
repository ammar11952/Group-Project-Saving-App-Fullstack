import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    getGoal: builder.query({
      // get: 'http://localhost:8080/api/goal'
      query: () => '/api/goal',
      providesTags: ['goal'],
    }),

    putGoal: builder.mutation({
      query: (newAmount) => ({
        // put: 'http://localhost:8080/api/goal'
        url: '/api/goal',
        method: 'PUT',
        body: newAmount,
      }),
      invalidatesTags: ['goal'],
    }),

    getTransaction: builder.query({
      query: () => '/api/transaction',
      providesTags: ['transaction'],
    }),

    getBalance: builder.query({
      query: () => '/api/balance',
      providesTags: ['balance'],
    }),

    // add new Transaction
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        // post: 'http://localhost:8080/api/transaction'
        url: '/api/transaction',
        method: 'POST',
        body: initialTransaction,
      }),
      invalidatesTags: ['transaction', 'balance'],
    }),

    // delete record
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        // delete: 'http://localhost:8080/api/transaction'
        url: '/api/transaction',
        method: 'DELETE',
        body: recordId,
      }),
      invalidatesTags: ['transaction', 'balance'],
    }),

    // putBalance: builder.mutation({
    //   query: () => ({
    //     url: '/api/balance',
    //     // provideTags: ['balance'],
    //   }),
    //   invalidatesTags: ['balance'],
    // }),

    // invalidatesTags: ['balance'],
  }),
});

export default apiSlice;
