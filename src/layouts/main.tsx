import { theme, Layout, Menu, MenuProps, Image } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = [
    { key: 1, label: <Link to="/">All Contact</Link> },
    { key: 2, label: <Link to="/add-contact">Add Contact</Link> },
];

export default function Main() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link to="/">
                    <Image width={100} src="/logo.png" />
                </Link>
                <Menu mode="horizontal" defaultSelectedKeys={["2"]} items={items} />
            </Header>
            <Content style={{ paddingInline: "50px" }}>
                <div style={{ padding: "24px 0", background: colorBgContainer, borderRadius: borderRadiusLG }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Cloud Contact ©{new Date().getFullYear()} Created by MD Pahlovi</Footer>
        </Layout>
    );
}
