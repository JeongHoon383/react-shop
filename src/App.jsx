import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./Pages/ProductAll";
import PrivateRoute from "./route/PrivateRoute";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [authenticate, setAutentiCate] = useState(false);

  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url =
      "https://my-json-server.typicode.com/JeongHoon383/react-shop/products/";
    //
    let res = await fetch(url);
    let data = await res.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar authenticate={authenticate} setAutentiCate={setAutentiCate} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductAll authenticate={authenticate} productList={productList} />
          }
        />
        <Route
          path="/Login"
          element={<Login setAutentiCate={setAutentiCate} />}
        />
        <Route
          path="/product/:id"
          element={
            <PrivateRoute
              authenticate={authenticate}
              productList={productList}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
