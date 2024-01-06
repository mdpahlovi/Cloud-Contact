import { useGetContactsQuery } from "@/redux/features/contact/contactApi";
import { Input, Col, Row, Pagination } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";
import ContactCard from "@/components/contact/contact-card";
import ContactLoader from "@/components/contact/contact-loader";

export default function AllContact() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = (searchParams.get("query") ? searchParams.get("query") : "") as string;
    const page = (searchParams.get("page") ? searchParams.get("page") : "1") as string;
    const { data, isLoading } = useGetContactsQuery({ query, page });

    return (
        <>
            <Input
                size="large"
                placeholder="Search"
                prefix={<SearchOutlined />}
                style={{ marginBottom: "24px" }}
                value={query}
                onChange={(e) => setSearchParams({ query: e.target.value })}
            />
            <Row style={{ justifyContent: "center" }} gutter={[20, 20]}>
                {isLoading
                    ? [...Array(12)].map((_, idx) => (
                          <Col key={idx} style={{ maxWidth: "320px" }} xs={24} sm={12} md={8} lg={6}>
                              <ContactLoader />
                          </Col>
                      ))
                    : data?.data?.map((contact, idx) => (
                          <Col key={idx} style={{ maxWidth: "320px" }} xs={24} sm={12} md={8} lg={6}>
                              <ContactCard contact={contact} />
                          </Col>
                      ))}
            </Row>
            <Pagination
                total={data?.meta?.total}
                defaultCurrent={Number(page)}
                defaultPageSize={data?.meta?.size}
                onChange={(page) => setSearchParams({ page: page.toString() })}
                style={{ marginTop: "24px", display: "flex", justifyContent: "center" }}
            />
        </>
    );
}
