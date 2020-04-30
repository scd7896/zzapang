import * as React from 'react';

interface CategoryMainTitleProps {
  text: string,
  color: string
}

const CategoryMainTitle = ({ text, color }: CategoryMainTitleProps) => {
  return (
    <p style={{ color: color }}>
      {text}
    </p>
  )
}

export default CategoryMainTitle;