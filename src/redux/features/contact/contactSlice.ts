import { Contact } from "@/types/data";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type DefaultValues = { name: string; email: string; phone_number: string; address: string; profile_picture: string };
type InitialStateType = { id: string; isOpen: boolean; defaultValues: DefaultValues | null };

const initialState: InitialStateType = { id: "", isOpen: false, defaultValues: null };

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        handleOpen: (state, action: PayloadAction<Contact>) => {
            const { _id, name, email, phone_number, address, profile_picture } = action.payload;

            state.id = _id;
            state.isOpen = true;
            state.defaultValues = {
                name: name ? name : "",
                email: email ? email : "",
                phone_number: phone_number ? phone_number : "",
                address: address ? address : "",
                profile_picture: profile_picture ? profile_picture : "",
            };
        },
        handleClose: (state) => {
            state.id = "";
            state.isOpen = false;
            state.defaultValues = null;
        },
    },
});

export const { handleOpen, handleClose } = contactSlice.actions;

export default contactSlice.reducer;
