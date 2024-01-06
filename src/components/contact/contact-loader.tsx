import { Skeleton, Card } from "antd";
import { EditOutlined, DeleteOutlined, HeartOutlined } from "@ant-design/icons";

export default function ContactLoader() {
    return (
        <Card
            bodyStyle={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
            actions={[<HeartOutlined />, <EditOutlined />, <DeleteOutlined />]}
        >
            <Skeleton.Avatar size={64} active />
            <Skeleton title={{ style: { display: "none" } }} active />
        </Card>
    );
}
