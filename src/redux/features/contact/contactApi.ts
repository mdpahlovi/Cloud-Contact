import { api } from "@/redux/api/apiSlice";

const contactApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: ({ query, page }) => `/contact?query=${query}&page=${page}`,
            providesTags: ["contact"],
        }),

        singleContact: builder.query({
            query: (id) => `/contact/${id}`,
            providesTags: ["contact"],
        }),
        postContact: builder.mutation({
            query: (data) => ({
                url: `/contact`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["contact"],
        }),
        updateContact: builder.mutation({
            query: ({ id, ...payload }) => ({
                url: `/contact/${id}`,
                method: "PATCH",
                body: payload,
            }),
            invalidatesTags: ["contact"],
        }),

        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contact/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["contact"],
        }),
    }),
});

export const { useGetContactsQuery, useSingleContactQuery, usePostContactMutation, useUpdateContactMutation, useDeleteContactMutation } =
    contactApi;
