import { api } from "@/redux/api/apiSlice";
import { Contact, IGenericResponse } from "@/types/data";

const contactApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getContacts: builder.query<IGenericResponse<Contact[]>, { query: string; page: string }>({
            query: ({ query, page }) => `/contact?query=${query}&page=${page}`,
            providesTags: ["contact"],
        }),

        singleContact: builder.query<IGenericResponse<Contact>, string>({
            query: (id) => `/contact/${id}`,
            providesTags: ["contact"],
        }),
        postContact: builder.mutation<IGenericResponse<Contact>, Contact>({
            query: (data) => ({
                url: `/contact`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["contact"],
        }),
        updateContact: builder.mutation<IGenericResponse<Contact>, { id: string } & Partial<Contact>>({
            query: ({ id, ...payload }) => ({
                url: `/contact/${id}`,
                method: "PATCH",
                body: payload,
            }),
            invalidatesTags: ["contact"],
        }),

        deleteContact: builder.mutation<IGenericResponse<Contact>, string>({
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
