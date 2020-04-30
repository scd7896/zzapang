import * as React from 'react';

import './styles.scss';

const CategoryMainBigImage = ({ url }: ImageComponentProps) => {
  return (
    <div className="category-big-image">
      <img src={url} />
    </div>
  )
}

export default CategoryMainBigImage