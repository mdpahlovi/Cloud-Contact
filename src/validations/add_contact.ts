import * as yup from "yup";

const add_contact = yup.object().shape({
    name: yup.string().required("Name is Required"),
    email: yup.string().email("Must Be Valid Email"),
    phone_number: yup.string().required("Phone Number is Required"),
    address: yup.string().required("Address is Required"),
    profile_picture: yup.string().required("Profile Picture is Required"),
});

export default add_contact;
