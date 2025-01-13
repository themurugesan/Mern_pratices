import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/singup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./pages/header/Header";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Signup></Signup>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
