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
<<<<<<< HEAD
					<Route path="/user/register" element={<CreateUser/>} />
=======
					<Route path="/search-streaming" element={<Search />} />

>>>>>>> 2461a98877fc834ffbfaecacd3a65b6f8d467539
          <Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);