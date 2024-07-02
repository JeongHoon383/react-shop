import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./Pages/ProductAll";
import PrivateRoute from "./route/PrivateRoute";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

// 1. 전체상품페이지, 로그인, 상품상세페이지 -> 어떤 페이지
// 1-1. 네비게이션 바 - o
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다. - o
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다. - o
// 3. 상품디테일을 눌렀으나, 로그인이 안되있을경우에는 로그인 페이지가 먼저 나온다. - o
// 4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다. - o

// 5. productDetail 페이지 접근시 useEffect 사용하여 최적화 - o
// 5. 로그아웃 버튼을 클릭하면 로그아읏이 된다. - 로그아웃 버튼을 눌렀을 때 authenticate 값이 false 로 바뀌면서 로그인 으로 바뀜 - o
// 5. productDetail UI 작업 - 문제 : productAll 에서의 데이터를 productDetail 에 보내야 됨. - 해결 : find 함수 사용 - o
// 5. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다. - o
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다. - o

// 7. 상품을 검색할 수 있다.

// 문제 : 로그인을 하지 않았을 때 주소창으로 접근하면 어떻게 에러를 해결해야 하는지?
// 현재 주소창으로 접근하면 browser Router가 랜더링 될 때 다른 컴포넌트가 업데이트 되면 안된다 라고 에러가 뜸
// 그래서 useEffect를 사용하면? -> 해결, useEffect에 return 을 넣어서 에러가 발생함

function App() {
  const [authenticate, setAutentiCate] = useState(false);
  // 로그인 여부를 알려주는 useState
  // true면 로그인, false면 로그인 안됨.

  // autentiCate가 true 일 때, 홈 로그인이 로그 아웃으로 변경 - o
  // 로그인 상태일때 디테일 페이지가 보여지고 - o
  // 로그아웃 상태이면 로그인 페이지로 이동 - o

  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);

  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = "http://localhost:4000/products/";
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
        {/* ProductDetail 페이지는 보호 해줘야함. */}
      </Routes>
    </>
  );
}

export default App;
