import React from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = ({ authenticate, productList }) => {
  // 처음 mount가 됐을 때는 list 전체가 나와야함.
  // 검색을 했을 때 list의 title과 검색어와 비교하는 함수를 만들어야 함.

  const [query, setQuery] = useSearchParams();

  const searchQuery = query.get("q");
  console.log(searchQuery);

  const filterProductList = () => {
    if (!searchQuery) {
      return productList;
    }
    return productList.filter((list) =>
      list.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredProductList = filterProductList();

  // 필터를 해주는 기능을 만듦
  // 필터는 되지만 홈으로 돌아갈때 에러 발생, 검색어를 읽을 수 없다고 에러 발생
  // 홈 주소일때 list가 랜더가 되게, 쿼리가 붙지 않았을 때 홈이 랜더가 되야함.
  // 쿼리가 사라지면 toLowerCase를 못 읽음
  // 그렇다면 쿼리가 있을때만 toLoweCase 메서드가 적용되게 하면 되지 않을까?
  // !searchQuery로 해결 -> searchQuery가 null값 또는 ""일때 false 이기 때문에, 반대로 true 일때만 productList가 반환되게 함.

  return (
    <div className="ProductAll">
      {filteredProductList.map((item) => (
        <ProductCard item={item} key={item.id} authenticate={authenticate} />
      ))}
    </div>
  );
};

export default ProductAll;
