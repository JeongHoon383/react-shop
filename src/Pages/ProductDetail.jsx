import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.css";

// 사이즈 선택을 눌렀을 때 li 태그가 내려오게
// li 태그

const ProductDetail = ({ product }) => {
  const [showOption, setShowOption] = useState(false);

  const params = useParams();

  const curProduct = product.find(
    (item) => Number(item.id) === Number(params.id)
  );

  if (!curProduct) {
    return <div>Loading...</div>;
  }

  const onClickSelect = () => {
    setShowOption(!showOption);
  };

  return (
    <div className="ProductDetail">
      <div className="ProductDetail-img">
        <img src={curProduct.img} alt="" />
      </div>
      <div className="ProductDetail-content">
        <div>{curProduct.title}</div>
        <div>₩{Number(curProduct.price).toLocaleString()}</div>
        <div>{curProduct.choice ? "Conscious choice" : ""}</div>
        <div className="select-container">
          <button className="select-button" onClick={onClickSelect}>
            사이즈 선택
            <span className="button-drop-down">
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </button>
          <ul
            className={`select-option ${
              showOption ? "" : "select-option-none"
            }`}
          >
            {curProduct.size.map((item, index) => (
              <li className="option-item" key={index}>
                {item}
              </li>
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
