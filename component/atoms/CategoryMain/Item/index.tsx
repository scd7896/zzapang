import * as React from 'react';
import CategoryMainImage from '../Image';

import './styles.scss';
export interface CategoryMainItemProps {
  imageUrl: string,
  description: string,
  linkUrl: string,
  payment: number,
}
const CategoryMainItem = ({ imageUrl, description, linkUrl, payment }: CategoryMainItemProps) => {
  return (
    <li className="cateogrymain-item-card">
      <a href={linkUrl}>
        <CategoryMainImage url={imageUrl} isRender={false} />
        <p className="category-description">{description}</p>
        <span className="payment-categoty"><strong>{payment}</strong> 원</span>
      </a>
    </li>
  )
}

export default CategoryMainItem;