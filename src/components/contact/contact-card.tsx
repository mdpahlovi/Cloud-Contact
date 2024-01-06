import { createElement } from "react";
import { Contact } from "@/types/data";
import { Avatar, Card, Typography } from "antd";
import FavoriteContact from "./favorite-contact";
import EditContact from "./edit-contact";
import DeleteContact from "./delete-contact";

const Actions = [FavoriteContact, EditContact, DeleteContact];

export default function ContactCard({ contact }: { contact: Contact }) {
    const { name, email, phone_number, address, profile_picture } = contact;

    return (
        <Card
            bodyStyle={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
            actions={Actions.map((action, key) => createElement(action, { key, contact }))}
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
