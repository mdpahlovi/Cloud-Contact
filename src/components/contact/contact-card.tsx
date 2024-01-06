import { Contact } from "@/types/data";
import { Avatar, Card, Typography } from "antd";
import { EditOutlined } from "@ant-design/icons";
import DeleteContact from "./delete-contact";
import FavoriteContact from "./favorite-contact";

export default function ContactCard({ contact }: { contact: Contact }) {
    const { name, email, phone_number, address, profile_picture, is_favorite } = contact;

    return (
        <Card
            bodyStyle={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
            actions={[<FavoriteContact contact={contact} />, <EditOutlined />, <DeleteContact contact={contact} />]}
        >
            <Avatar size={64} src={profile_picture} />
            <Typography.Title level={4} style={{ marginTop: "10px" }}>
                {name}
            </Typography.Title>
            <Typography.Text>{email}</Typography.Text>
            <Typography.Text>{phone_number}</Typography.Text>
            <Typography.Text>{address}</Typography.Text>
        </Card>
    );
}
