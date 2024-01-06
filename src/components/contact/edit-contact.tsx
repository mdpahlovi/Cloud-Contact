import { useAppDispatch } from "@/redux/hooks";
import { Contact } from "@/types/data";
import { EditOutlined } from "@ant-design/icons";
import { handleOpen } from "@/redux/features/contact/contactSlice";

export default function EditContact({ contact }: { contact: Contact }) {
    const dispatch = useAppDispatch();

    return <EditOutlined onClick={() => dispatch(handleOpen(contact))} />;
}
