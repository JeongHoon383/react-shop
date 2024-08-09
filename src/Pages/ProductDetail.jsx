import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.css";

// 사이즈 선택을 눌렀을 때 li 태그가 내려오게 - o
// dropMenu 바탕화면 눌렀을때 닫히게 - o

const ProductDetail = ({ product }) => {
  const dropMenuRef = useRef();

  const [isDropMenuOpen, setDropMenuOpen] = useState(false);

  const [selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  useEffect(() => {
    document.addEventListener("mousedown", clickModalOutSide);

    return () => {
      document.removeEventListener("mousedown", clickModalOutSide);
    };
  }, [isDropMenuOpen]);

  const clickModalOutSide = (e) => {
    if (isDropMenuOpen && !dropMenuRef.current.contains(e.target)) {
      setDropMenuOpen(false);
    }
  };

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
        <div>₩{Number(curProduct.price).toLocaleString()}</div>
        <div>{curProduct.choice ? "Conscious choice" : ""}</div>
        <div className="select-container">
          <button
            className="select-button"
            ref={dropMenuRef}
            onClick={() => setDropMenuOpen(!isDropMenuOpen)}
          >
            사이즈 선택
            <span className="button-drop-down">
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </button>
          <div
            onChange={handleSelect}
            value={selected}
            className={`select-option ${
              isDropMenuOpen ? "" : "select-option-none"
            }`}
          >
            {curProduct.size.map((item, index) => (
              <div className="option-item" key={index} value={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <button>추가</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
