import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

// find 함수까지는 에러가 발생하지 않음
// find 함수에서 꺼낸 객체 안에 키값을 맨 처음 랜더링 했을 때는 괜찮지만 새로고침시 데이터가 날라감
// 로컬 또는 세션 스토리지를 이용하여 데이터 저장시 데이터가 날라가지 않는지 해봐야됨.

// find 함수가 문제 why?

// 문제 해결 : 부모 컴포넌트에서 props로 전달한 데이터를 자식 데이터에서 받은 뒤 랜더링 해줄때 새로고침을 하면 문제가 발생함
// 왜? 부모 컴포넌트 보다 자식 컴포넌트가 먼저 렌더링 되기 때문에 props로 전달되기 전에
// 자식 컴포넌트가 먼저 랜더링이 되어 props로 받은 데이터는 undefined 되기 때문이다.
// 그렇다면 해결방법을 2가지를 생각해볼 수 있음.
// 첫번째는 랜더링이 되기 전에 데이터가 미리 도착해 있는 것이다.
// 두번째는 자식 컴포넌트가 랜더링이 될때 데이터가 undefined일 경우 잠시 로딩중이라는 조건문을 만들어 주면 된다.

const ProductDetail = ({ product }) => {
  const params = useParams();

  const curProduct = product.find(
    (item) => Number(item.id) === Number(params.id)
  );

  if (!curProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ProductDetail">
      <div className="ProductDetail-img">
        <img src={curProduct.img} alt="" />
      </div>
      <div className="ProductDetail-content">
        <div>{curProduct.title}</div>
        <div>₩{curProduct.price.toLocaleString()}</div>
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
