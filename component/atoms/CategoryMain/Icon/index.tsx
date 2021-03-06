import * as React from 'react';

import './styles.scss';

interface CateGoryNavIconProps {
  isSelected: boolean,
  color: string
}

const CateGoryNavIcon = ({ isSelected, color }: CateGoryNavIconProps) => {
  if (isSelected) {
    console.log(color);
  }
  return (
    <article className="category-icon-icon" 
      style={{ backgroundColor: isSelected ? color : "#000000" }} >
        a
      </article>
  )
}

export default CateGoryNavIcon