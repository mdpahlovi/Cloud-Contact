import { api } from "./api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "@/redux/features/contact/contactSlice";

const store = configureStore({
    reducer: { contact_modal: contactReducer, [api.reducerPath]: api.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
