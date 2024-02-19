import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateUser from "./pages/CreaterUser/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/user/register" element={<CreateUser/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
