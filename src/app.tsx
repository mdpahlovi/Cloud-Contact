import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { ConfigProvider, ThemeConfig } from "antd";

function App() {
    const theme: ThemeConfig = {
        components: {
            Layout: { headerBg: "#f5f5f5" },
            Menu: { itemBg: "#f5f5f5" },
        },
    };

    return (
        <ConfigProvider theme={theme}>
            <RouterProvider router={routes} />
        </ConfigProvider>
    );
}

export default App;
