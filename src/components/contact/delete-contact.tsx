import { Contact, IGenericErrorResponse } from "@/types/data";
import { useDeleteContactMutation } from "@/redux/features/contact/contactApi";
import { message } from "antd";
import { useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";

export default function DeleteContact({ contact }: { contact: Contact }) {
    const [deleteContact, { isSuccess, isError, error }] = useDeleteContactMutation();

    useEffect(() => {
        if (isError) {
            message.error((error as IGenericErrorResponse).data.message);
        }
    }, [error, isError, isSuccess]);

    return <DeleteOutlined onClick={() => deleteContact(contact._id)} />;
}
