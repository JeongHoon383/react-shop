import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

// 부모에서 자식한테 보내주는 props를 받은 그대로 렌더링 했을 때는 새로고침시 데이터가 사라지지 않음
// 부모가 자식한테 props를 보내주는게 자식의 랜더링 보다 먼저 수행되는거임?
// 수행되는 것 -> 리액트의 단방향 데이터 흐름 원칙에 따른 것
// 그러나, props로 받은 데이터를 find 함수로 반환 -> 이 동작이 랜더링 이후에 동작되기 때문에 자식 컴포넌트가 랜더링시 오류가 발생
// 그렇다면 find 함수를 랜더링 전에 수행할 수는 없을까?
// 반환된 값을 자식 컴포넌트에 렌더링 후 새로고침시 데이터가 날라감
// why?

// find 함수가 문제 why?

// 문제 : 부모 컴포넌트에서 props로 전달한 데이터를 자식 데이터에서 받은 뒤 랜더링 해줄때 새로고침을 하면 문제가 발생함
// 왜? 부모 컴포넌트 보다 자식 컴포넌트가 먼저 렌더링 되기 때문에 props로 전달되기 전에
// 자식 컴포넌트가 먼저 랜더링이 되어 props로 받은 데이터는 undefined 되기 때문이다.
// 그렇다면 해결방법을 2가지를 생각해볼 수 있음.
// 첫번째는 랜더링이 되기 전에 데이터가 미리 도착해 있는 것이다.
// 두번째는 자식 컴포넌트가 랜더링이 될때 데이터가 undefined일 경우 잠시 로딩중이라는 조건문을 만들어 주면 된다.
// 1. 세션 스토리지로 저장
// 1-1.
// 2. react-router-dom : loader 사용 - 렌더링 되기 전에 데이터를 미리 도착할 수 있게 함.

const ProductDetail = ({ product }) => {
  const params = useParams();

  useLayoutEffect(() => {
    const { curProduct } = product.find(
      (item) => Number(item.id) === Number(params.id)
    );
  }, []);

  // window.sessionStorage.setItem("product", JSON.stringify(curProduct));

  // const sessionProduct = JSON.parse(window.sessionStorage.getItem("product"));

  // if (sessionProduct) {
  // }

  // 초기에 렌더링 될 때 저장이 되고 이후 저장된 값으로 출력만 하면됨
  // 초기에 데이터 세팅만 해주면 된다는 얘기

  // 이미 getItem으로 데이터를 저장해놨기 때문에 새로고침 해도 데이터가 안날라가는거 아님?

  // if (!curProduct) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="ProductDetail">
      <div className="ProductDetail-img">
        <img src={curProduct.img} alt="" />
      </div>
      <div className="ProductDetail-content">
        <div>{curProduct.title}</div>
        <div>₩{Number(curProduct.price).toLocaleString()}</div>
        <div>{curProduct.choice ? "Conscious choice" : ""}</div>
        <div>
          <button>사이즈 선택</button>
          <ul>
            {curProduct.size.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <button>추가</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
