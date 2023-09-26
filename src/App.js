import "./App.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import PrivateRouter from "./components/PrivateRouter";

function App() {
  const [loginCheck, setLoginCheck] = useState(false);

  return (
    <div>
      <Header loginCheck={loginCheck} setLoginCheck={setLoginCheck} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/products/:id"
          element={<PrivateRouter loginCheck={loginCheck} />}
        />
        <Route
          path="/login"
          element={<Login setLoginCheck={setLoginCheck} />}
        />
      </Routes>
    </div>
  );
}

export default App;
