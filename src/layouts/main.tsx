import { Layout, Menu, MenuProps, Image } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = [
    { key: 1, label: <Link to="/">All Contact</Link> },
    { key: 2, label: <Link to="/add-contact">Add Contact</Link> },
];

export default function Main() {
    return (
        <Layout>
            <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link to="/">
                    <Image width={100} src="/logo.png" />
                </Link>
                <Menu mode="horizontal" defaultSelectedKeys={["1"]} items={items} />
            </Header>
            <Content style={{ minHeight: "calc(100vh - 130.4px)", padding: "24px 50px" }}>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: "center" }}>Cloud Contact ©{new Date().getFullYear()} Created by MD Pahlovi</Footer>
        </Layout>
    );
}
