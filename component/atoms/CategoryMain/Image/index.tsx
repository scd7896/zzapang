import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import './styles.scss';

const CategoryMainImage = ({ url, isRender }: ImageComponentProps) => {
  const ref = useRef<HTMLImageElement | null>(null)
  const [isFirst, setIsFirst] = useState<boolean>(true)
  useEffect(() => {
    if (isRender && isFirst) {
      ref.current!.src = ref.current!.dataset.src!;
      setIsFirst(false);
    }
  }, [isRender, isFirst])
  return (
    <div className="category-nomal-image">
      <img ref={ref} data-src={url}/>
    </div>
  )
}

export default CategoryMainImage