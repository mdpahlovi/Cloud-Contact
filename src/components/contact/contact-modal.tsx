import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { DefaultValues, handleClose } from "@/redux/features/contact/contactSlice";
import { useUpdateContactMutation } from "@/redux/features/contact/contactApi";
import { IGenericErrorResponse } from "@/types/data";
import { Modal, message } from "antd";
import getChangedField from "@/libs/getChangedField";
import Form from "@/components/form";
import contactSchema from "@/validations/contactSchema";
import FormImageUpload from "@/components/form/form-image-upload";
import FormInput from "@/components/form/form-input";
import FormSubmit from "@/components/form/form-submit";

export default function ContactModal() {
    const dispatch = useAppDispatch();
    const { id, isOpen, defaultValues } = useAppSelector((state) => state.contact_modal);
    const [updateContact, { isLoading, isSuccess, isError, error }] = useUpdateContactMutation();
    const handleCancel = () => dispatch(handleClose());

    const handleSubmit = (value: DefaultValues) => {
        const changedValues = getChangedField(defaultValues!, value);

        updateContact({ id, ...changedValues });
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(handleClose());
            message.success("Contact Updated Successfully");
        } else if (isError) {
            if (error && (error as IGenericErrorResponse).data.errorMessages.length) {
                (error as IGenericErrorResponse).data.errorMessages.map(({ message: m }) => message.error(m));
            } else {
                message.error((error as IGenericErrorResponse).data.message);
            }
        }
    }, [dispatch, error, isError, isSuccess]);

    return (
        <Modal title="Update Contact" open={isOpen} okButtonProps={{ style: { display: "none" } }} onCancel={handleCancel}>
            <Form initialValues={defaultValues} validationSchema={contactSchema} onSubmit={handleSubmit}>
                <FormImageUpload name="profile_picture" label="Profile Picture" />
                <FormInput name="name" label="Name" />
                <FormInput name="email" label="Email" />
                <FormInput name="phone_number" label="Phone Number" />
                <FormInput name="address" label="Address" />
                <FormSubmit loading={isLoading}>Update Content</FormSubmit>
            </Form>
        </Modal>
    );
}
