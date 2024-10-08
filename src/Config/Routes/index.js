import { Outlet, useRoutes } from "react-router-dom";
import SidebarMenu from "../../Layout/SidebarMenu/sidebarMenu";
import Login from "../../pages/Auth/login";
import Home from "../../pages/Home/home";
import Map from "../../pages/Map/map";
import UseState from "../../pages/UseState/useState";
import JavascriptRefresher from "../../pages/JavascriptRefresher/javascriptRefresher";
import UseEffect1 from "../../pages/Useeffect/useEffect";
import Uicomponent from "../../pages/Ui-components/Uicomponent";
import Search from "../../pages/React Search/Search";
import ToDo from "../../pages/todo/ToDo";
import Download from "../../pages/Download Files/Download";

const routes = [
    {
        path: '/',
        element: <Outlet />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: 'dashboard',
                element: <SidebarMenu />,
                children: [
                    {
                        path: 'usestate',
                        element: <UseState />,
                    },
                    {
                        path: 'map',
                        element: <Map />,
                    }, {
                        path: "javascript-refresher",
                        element: <JavascriptRefresher />

                    }, {
                        path: "/dashboard/useeeffect",
                        element: <UseEffect1 />
                    },
                    {

                        path: "/dashboard/uicomponent",
                        element: <Uicomponent />
                    },
                    {

                        path: "/dashboard/React-search",
                        element: <Search />
                    },
                    {

                        path: "/dashboard/React-Todo",
                        element: <ToDo />
                    },
                    {

                        path: "/dashboard/React-File",
                        element: <Download />
                    },
                ],
            },
        ],
    },
];




export default routes