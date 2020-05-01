import * as React from 'react';
import { useRef, useEffect } from 'react';
import './styles.scss';

const CategoryMainImage = ({ url, isRender }: ImageComponentProps) => {
  const ref = useRef<HTMLImageElement | null>(null)
  useEffect(() => {
    if (isRender) {
      ref.current!.src = ref.current!.dataset.src!;
    }
  }, [isRender])
  return (
    <div className="category-nomal-image">
      <img ref={ref} data-src={url}/>
    </div>
  )
}

export default CategoryMainImage