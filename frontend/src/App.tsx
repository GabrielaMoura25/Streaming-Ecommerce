import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
	return (
		<>
			<Navbar />
      <Outlet />
			<Footer/>
		</>
	);
}

export default App;
