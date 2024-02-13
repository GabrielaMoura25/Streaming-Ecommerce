import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/login/Loguin';
import Home from './views/Home';

function App() {

  return (
    <>
    <Home/>
    <LoginPage email={''} password={''} buttonLoguin={''}/>
    </>
  )
}

export default App
