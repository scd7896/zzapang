import * as React from 'react';

import './styles.scss';

const CategoryMainImage = ({ url }: ImageComponentProps) => {
  return (
    <div className="category-nomal-image">
      {url}
    </div>
  )
}

export default CategoryMainImage