import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./Pages/ProductAll";
import ProductDetail from "./Pages/ProductDetail";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

// 1. 전체상품페이지, 로그인, 상품상세페이지 -> 어떤 페이지
// 1-1. 네비게이션 바 - o
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다. - o
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다. - o

// 3. 상품디테일을 눌렀으나, 로그인이 안되있을경우에는 로그인 페이지가 먼저 나온다.
// 4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 5. 로그아웃 버튼을 클릭하면 로그아읏이 된다.
// 5. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 7. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAutentiCate] = useState(false);
  // 로그인 여부를 알려주는 useState
  // true면 로그인, false면 로그인 안됨.

  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/Login"
          element={<Login setAutentiCate={setAutentiCate} />}
        />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
