import * as React from 'react';
import { useState } from 'react';

import './styles.scss';
import CateGoryNavIcon from '../../atoms/CategoryMain/Icon';

const CategoryNav = () => {
  const [dummyCategories, setDummyCategories] = useState(['#ffee00', '#66ee92', '#998811', '#ff0000', '#00ff00']);
  return (
    <aside className="category-nav-container">
      aside
      {
        dummyCategories.map((color, index) => {
          return (<CateGoryNavIcon isSelected={true} color={color} key={index} />)
        })
      }
    </aside>
  )
}

export default CategoryNav;