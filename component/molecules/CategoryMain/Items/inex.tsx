import * as React from 'react'
import { useState } from 'react';
import CategoryMainItem, { CategoryMainItemProps } from '../../../atoms/CategoryMain/Item';

import './styles.scss';
interface CategoryMainItemsProps {
  categoryItems: CategoryMainItemProps[]
}
const CategoryMainItems = ({ categoryItems }: CategoryMainItemsProps) => {

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
            description={itemData.description} />
          )
        })
      }
    </ul>
  )
}

export default CategoryMainItems;