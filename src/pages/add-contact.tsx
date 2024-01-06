import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IGenericErrorResponse } from "@/types/data";
import { usePostContactMutation } from "@/redux/features/contact/contactApi";
import { Typography, message } from "antd";
import Form from "@/components/form";
import contactSchema from "@/validations/contactSchema";
import FormImageUpload from "@/components/form/form-image-upload";
import FormInput from "@/components/form/form-input";
import FormSubmit from "@/components/form/form-submit";

const initialValues = { name: "", email: "", phone_number: "", address: "", profile_picture: "" };

export default function AddContact() {
    const navigate = useNavigate();
    const [postContact, { isLoading, isSuccess, isError, error }] = usePostContactMutation();

    useEffect(() => {
        if (isSuccess) {
            navigate("/");
            message.success("Contact Added Successfully");
        } else if (isError) {
            if (error && (error as IGenericErrorResponse).data.errorMessages.length) {
                (error as IGenericErrorResponse).data.errorMessages.map(({ message: m }) => message.error(m));
            } else {
                message.error((error as IGenericErrorResponse).data.message);
            }
        }
    }, [error, isError, isSuccess, navigate]);

    return (
        <>
            <Typography.Title level={3}>Add Contact</Typography.Title>
            <Form initialValues={initialValues} validationSchema={contactSchema} onSubmit={postContact}>
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
