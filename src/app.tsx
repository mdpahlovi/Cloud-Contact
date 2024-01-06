import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { ConfigProvider, ThemeConfig } from "antd";

function App() {
    const theme: ThemeConfig = {
        token: { colorPrimary: "#4E24AE" },
        components: {
            Layout: { headerBg: "#f5f5f5", bodyBg: "#ffffff" },
            Menu: { itemBg: "#f5f5f5" },
            Typography: { titleMarginBottom: "0px" },
        },
    };

    return (
        <ConfigProvider theme={theme}>
            <RouterProvider router={routes} />
        </ConfigProvider>
    );
}

export default App;
