import { Contact } from "@/types/data";
import { useUpdateContactMutation } from "@/redux/features/contact/contactApi";
import { message } from "antd";
import { useEffect } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

export default function FavoriteContact({ contact }: { contact: Contact }) {
    const { _id, is_favorite } = contact;
    const [updateContact, { isSuccess, isError, error }] = useUpdateContactMutation();

    useEffect(() => {
        if (isError) {
            console.log(error);
            message.error(error.data.message as string);
        }
    }, [error, isError, isSuccess]);

    return (
        <div onClick={() => updateContact({ id: _id, is_favorite: !is_favorite })}>{is_favorite ? <HeartFilled /> : <HeartOutlined />}</div>
    );
}
