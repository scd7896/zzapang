import * as React from 'react'
import SearchCardImage from './Image'


interface SearchCardProps { 
  imgUrl: string,
  title: string,
  price: number,
  point: number,
  isRender: boolean
}
const SearchCard = ({ imgUrl, title, price, point, isRender }: SearchCardProps) => {
  
  return (
    <article>
      <SearchCardImage imgUrl={imgUrl} isRender={isRender} />

    </article>
  )
}

export default SearchCard;