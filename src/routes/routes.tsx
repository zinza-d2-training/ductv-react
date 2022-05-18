import React from "react";
import { RouteObject } from "react-router-dom";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/Register/Register";
import Home from "../pages/Home";

export const AllPages: RouteObject[] = [
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/forgot-password',
		element: <ForgotPassword />,
	},
	{
		path: '/',
		element: <Home />
	}
];
