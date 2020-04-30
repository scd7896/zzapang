import * as React from "react";
import "./styles.scss";
type CategoryButtonProps = {
  onMouseOver: Function;
};
const CategoryButton = ({ onMouseOver }: CategoryButtonProps) => {
  const mouseOver = () => {
    onMouseOver();
  };

  return (
    <div className="category-button-wrapper" onMouseOver={mouseOver}>
      <p className="category-text-contents">카테고리</p>
    </div>
  );
};
export default CategoryButton;
