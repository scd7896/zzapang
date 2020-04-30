import * as React from 'react';
import { useEffect, useRef } from 'react';
import './styles.scss';

const CategoryMainBigImage = ({ url, isRender }: ImageComponentProps) => {
  const ref = useRef<HTMLImageElement | null>(null);
  useEffect(() => { 
    if (isRender) {
      ref.current!.src = ref.current!.dataset.src!;
    }
  }, [isRender])  
  return (
    <div className="category-big-image">
      <img ref={ref} data-src={url} />
    </div>
  )
}

export default CategoryMainBigImage