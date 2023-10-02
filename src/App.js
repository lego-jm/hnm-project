import "./App.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PrivateRouter from "./components/PrivateRouter";
import { useSelector } from "react-redux";

function App() {
  const loginCheck = useSelector((state) => state.login.loginCheck);

  return (
    <div>
      <Header loginCheck={loginCheck} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/products/:id" element={<PrivateRouter />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
