import Main from "@/layouts/main";
import AddContact from "@/pages/add-contact";
import AllContact from "@/pages/all-contact";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <AllContact />,
            },
            {
                path: "/add-contact",
                element: <AddContact />,
            },
        ],
    },
]);

export default routes;
