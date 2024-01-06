import { Typography, message } from "antd";
import Form from "@/components/form";
import add_contact from "@/validations/add_contact";
import FormImageUpload from "@/components/form/form-image-upload";
import FormInput from "@/components/form/form-input";
import FormSubmit from "@/components/form/form-submit";
import { usePostContactMutation } from "@/redux/features/contact/contactApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IGenericErrorResponse } from "@/types/data";

const initialValues = { name: "", email: "", phone_number: "", address: "", profile_picture: "" };

export default function AddContact() {
    const navigate = useNavigate();
    const [postContact, { isLoading, isSuccess, isError, error }] = usePostContactMutation();

    useEffect(() => {
        if (isSuccess) {
            navigate("/");
            message.success("Contact Added Successfully");
        } else if (isError) {
            message.error((error as IGenericErrorResponse).data.message);
        }
    }, [error, isError, isSuccess, navigate]);

    return (
        <>
            <Typography.Title level={3}>Add Contact</Typography.Title>
            <Form initialValues={initialValues} validationSchema={add_contact} onSubmit={postContact}>
                <FormImageUpload name="profile_picture" label="Profile Picture" />
                <FormInput name="name" label="Name" />
                <FormInput name="email" label="Email" />
                <FormInput name="phone_number" label="Phone Number" />
                <FormInput name="address" label="Address" />
                <FormSubmit loading={isLoading}>Add Content</FormSubmit>
            </Form>
        </>
    );
}
