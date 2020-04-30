import * as React from 'react'
import { CategoryMainItemProps } from '../../../atoms/CategoryMain/Item'

import './styles.scss';
import CategoryMainTitle from '../../../atoms/CategoryMain/Title';
import CategoryMainItems from '../../../molecules/CategoryMain/Items/inex';
import CategoryMainBigImage from '../../../atoms/CategoryMain/BigImage';

interface CategorySectionProps {
  categoryItems: CategoryMainItemProps[],
  bigImageUrl: string
}

const CategorySection = ({ categoryItems, bigImageUrl }: CategorySectionProps) => {
  return (
    <section className="category-section-wrapper"
    style={{borderTop: '3px solid #878700'}}>
      <CategoryMainTitle text="테스트카테고리" url="https://www.naver.com" color="#878700" />
      <CategoryMainBigImage url={bigImageUrl} />
      <CategoryMainItems categoryItems={categoryItems} />
    </section>
  )
}

export default CategorySection;