import "./style.scss";
import Register from "./pages/register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext, AuthContextProvider } from "./pages/AuthContext";
import { useContext } from "react";
function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
