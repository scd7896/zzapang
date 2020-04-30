import * as React from 'react';
import CategoryMainImage from '../Image';
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
        <p>{description}</p>
        <p><span>{payment}</span> 원</p>
      </a>
    </article>
  )
}

export default CategoryMainItem;