import * as React from 'react'
import { useState } from 'react';
import CategoryMainItem, { CategoryMainItemProps } from '../../../atoms/CategoryMain/Item';

const CategoryMainItems = () => {
  const [itemDatas, setItemDatas] = useState<Array<CategoryMainItemProps>>([])
  return (
    <section>
      {
        itemDatas.map((itemData, index) => {
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
    </section>
  )
}

export default CategoryMainItems;