import * as React from 'react';

import './styles.scss';

interface CategoryMainTitleProps {
  text: string,
  color: string,
  url: string
}

const CategoryMainTitle = ({ text, color, url }: CategoryMainTitleProps) => {
  return (
    <p className="category-title-content" style={{ color: color }}>
      {text}
      <a href={url}>바로가기</a>
    </p>
  )
}

export default CategoryMainTitle;