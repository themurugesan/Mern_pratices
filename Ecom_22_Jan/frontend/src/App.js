import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/singup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./pages/header/Header";
import Admin from "./pages/admin/admin";
import Admin_dashboard from "./pages/admin_dashboard/Admin_dashboard";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      <Header></Header>
        <Routes>
          <Route path="/admin" element={<Admin></Admin>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Signup></Signup>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/admindashboard" element={<Admin_dashboard></Admin_dashboard>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
