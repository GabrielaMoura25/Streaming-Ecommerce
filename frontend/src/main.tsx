import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser/index.tsx";

import App from "./App.tsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from './pages/Search';

import NotFound from './pages/NotFound';

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/user/register" element={<CreateUser/>} />
					<Route path="/search-streaming" element={<Search id={""} title={""} description={""} value={0} photo={""} />} />
          <Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);