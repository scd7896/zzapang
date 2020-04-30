import * as React from 'react'
import { CategoryMainItemProps, CategoryMainItemNeedData } from '../../../atoms/CategoryMain/Item'

import './styles.scss';
import CategoryMainTitle from '../../../atoms/CategoryMain/Title';
import CategoryMainItems from '../../../molecules/CategoryMain/Items/inex';
import CategoryMainBigImage from '../../../atoms/CategoryMain/BigImage';

interface CategorySectionProps {
  categoryItems: CategoryMainItemNeedData[],
  bigImageUrl: string,
  color: string,
  isRender: boolean
}

const CategorySection = ({ categoryItems, bigImageUrl, color, isRender }: CategorySectionProps) => {
  
  return (
    <section className="category-section-wrapper"
    style={{borderTop: '2px solid '+color}}>
      <CategoryMainTitle text="테스트카테고리" url="https://www.naver.com" color={color} />
      <CategoryMainBigImage url={bigImageUrl} isRender={isRender} />
      <CategoryMainItems categoryItems={categoryItems} isRender={isRender} />
    </section>
  )
}

export default CategorySection;