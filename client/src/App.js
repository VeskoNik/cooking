import Home from './views/home/home';
import { Route, Routes } from "react-router-dom"
import Header from './views/header/header';
import Footer from './views/footer/footer';
import Copyright from './views/copyright/copyright';
import Login from './views/user/login/login';
import Register from './views/user/register/register';
import AddItem from './views/create/create';
import Dashboard from './views/dashboard/dashboard';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<AddItem />} />
        <Route path="/dashboard" element= {<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer /> 
      <Copyright />
    </>
  );
}

export default App;
