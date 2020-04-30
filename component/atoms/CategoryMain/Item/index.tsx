import * as React from 'react';
import CategoryMainImage from '../Image';

import './styles.scss';
export interface CategoryMainItemProps {
  imageUrl: string,
  description: string,
  linkUrl: string,
  payment: number
}
const CategoryMainItem = ({ imageUrl, description, linkUrl, payment }: CategoryMainItemProps) => {
  return (
    <article className="cateogrymain-item-card">
      <a href={linkUrl}>
        <CategoryMainImage url={imageUrl} />
        <p className="category-description">{description}</p>
        <span className="payment-categoty"><strong>{payment}</strong> 원</span>
      </a>
    </article>
  )
}

export default CategoryMainItem;