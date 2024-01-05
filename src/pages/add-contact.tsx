import { Typography } from "antd";
import Form from "@/components/form";
import add_contact from "@/validations/add_contact";
import FormImageUpload from "@/components/form/form-image-upload";
import FormInput from "@/components/form/form-input";
import FormSubmit from "@/components/form/form-submit";

const initialValues = { name: "", email: "", phone_number: "", address: "", profile_picture: "" };

export default function AddContact() {
    return (
        <>
            <Typography.Title level={3}>Add Contact</Typography.Title>
            <Form initialValues={initialValues} validationSchema={add_contact} onSubmit={(value) => console.log(value)}>
                <FormImageUpload name="profile_picture" label="Profile Picture" />
                <FormInput name="name" label="Name" />
                <FormInput name="email" label="Email" />
                <FormInput name="phone_number" label="Phone Number" />
                <FormInput name="address" label="Address" />
                <FormSubmit>Add Content</FormSubmit>
            </Form>
        </>
    );
}
