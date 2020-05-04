import * as React from 'react'
import { useState, useEffect, useRef} from 'react';

interface SearchCardImageProp {
  imgUrl: string,
  isRender: boolean
}
const SearchCardImage = ({ imgUrl, isRender }: SearchCardImageProp) => {
  const ref = useRef<HTMLImageElement>(null);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    if (isFirst && isRender) {
      ref.current!.src = ref.current!.dataset.src as string;
      setIsFirst(false);
    }
  }, [isRender])

  return (
    <div>
      <img data-src={imgUrl} ref={ref} />
    </div>
  )
}

export default SearchCardImage;