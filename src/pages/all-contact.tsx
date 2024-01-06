import { useGetContactsQuery } from "@/redux/features/contact/contactApi";
import { Col, Row } from "antd";
import { useSearchParams } from "react-router-dom";
import ContactCard from "@/components/contact/contact-card";

export default function AllContact() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") ? searchParams.get("query") : "";
    const page = searchParams.get("page") ? searchParams.get("page") : "1";
    const { data, isLoading } = useGetContactsQuery({ query, page });

    console.log(data);
    return (
        <Row style={{ justifyContent: "center" }} gutter={[20, 20]}>
            {data?.data?.map((contact, idx) => (
                <Col key={idx} style={{ maxWidth: "320px" }} xs={24} sm={12} md={8} lg={6}>
                    <ContactCard contact={contact} />
                </Col>
            ))}
        </Row>
    );
}
