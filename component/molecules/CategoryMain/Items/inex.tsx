import * as React from 'react'
import { useState } from 'react';
import CategoryMainItem, { CategoryMainItemProps, CategoryMainItemNeedData } from '../../../atoms/CategoryMain/Item';

import './styles.scss';
interface CategoryMainItemsProps {
  categoryItems: CategoryMainItemNeedData[],
  isRender: boolean
}
const CategoryMainItems = ({ categoryItems, isRender }: CategoryMainItemsProps) => {

  return (
    <ul className="item-three-container">
      {
        categoryItems.map((itemData, index) => {
          return (
            <CategoryMainItem
            key={index} 
            imageUrl={itemData.imageUrl}
            linkUrl={itemData.linkUrl}
            payment={itemData.payment}
            description={itemData.description}
            isRender={isRender} />
          )
        })
      }
    </ul>
  )
}

export default CategoryMainItems;