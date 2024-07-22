import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProductDetail from "./Pages/ProductDetail";
import Nav from "./Components/Nav";
import { useEffect, useState } from "react";
// home 페이지, 로그인 페이지, 제품 상세 페이지
// 유저는 메뉴와 상품들을 볼 수 있다.
// 유저는 로그인을 할 수 있다.
// 유저는 상품 디테일을 보려면 로그인을 해야 한다.
// 로그인한 유저는 상품 디테일 정보를 볼 수 있다.
// 유저는 상품을 검색할 수 있다.
// 유저는 로그아웃을 할 수 있다.

// navbar 작업 - o
// Json 데이터 연결
// product에 담은 데이터를 redux에 담아서 사용해야함.

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/products";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error("에러발생 :", err);
      });
  }, []);

  console.log(product);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
