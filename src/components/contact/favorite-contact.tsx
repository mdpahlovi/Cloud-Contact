import { message } from "antd";
import { useEffect } from "react";
import { Contact, IGenericErrorResponse } from "@/types/data";
import { useUpdateContactMutation } from "@/redux/features/contact/contactApi";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

export default function FavoriteContact({ contact }: { contact: Contact }) {
    const { _id, is_favorite } = contact;
    const [updateContact, { isSuccess, isError, error }] = useUpdateContactMutation();

    useEffect(() => {
        if (isError) message.error((error as IGenericErrorResponse).data.message);
    }, [error, isError, isSuccess]);

    return (
        <div onClick={() => updateContact({ id: _id, is_favorite: !is_favorite })}>{is_favorite ? <HeartFilled /> : <HeartOutlined />}</div>
    );
}
