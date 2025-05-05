import React from "react";
import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from "../App.jsx";
import Home from "./Home/home.jsx"
import Login from "./login.jsx";
import ShowInfo from "./Home/showInfo.jsx";
import Todos from "./Todos/todos.jsx";
import Posts from "./Posts/posts.jsx";
import Comments from "./Posts/Comments/comments.jsx";
import ContextUserProvider from "./ContextUser.jsx";
const router = createBrowserRouter([
    {
        path: '/',
        element: <ContextUserProvider> <App /> </ContextUserProvider>    ,
        children: [
            { path: '/', element: <Navigate to="/login" replace /> },
            { path: 'login', element: <Login /> },
           
            {
                path: 'users/:id/', element: <Home />, children: [
                    { path: 'home', element: <ShowInfo /> },

                    { path: 'todos', element: <Todos /> },
                    {
                        path: 'posts', element: <Posts />, children: [
                            { path: ':postId/comments', element: <Comments /> },
                        ]
                    },
                ]
            },
            {path:'*', element:<Navigate to="/login"/>}
        ]
    }
]);
export default router;

