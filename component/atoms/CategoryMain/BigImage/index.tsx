import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import './styles.scss';

const CategoryMainBigImage = ({ url, isRender }: ImageComponentProps) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const [isFirst, setIsFirst] = useState<boolean>(true);
  useEffect(() => { 
    
    if (isRender && isFirst) {
      ref.current!.src = ref.current!.dataset.src!;
      setIsFirst(false);
    }
  }, [isRender, document.documentElement.scrollTop, isFirst])  
  return (
    <div className="category-big-image">
      <img ref={ref} data-src={url} />
    </div>
  )
}

export default CategoryMainBigImage