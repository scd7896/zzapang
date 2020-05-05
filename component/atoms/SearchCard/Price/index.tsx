import * as React from 'react'

interface SearchCardPriceProp {
  price: number
}

const SearchCardPrice = ({ price }: SearchCardPriceProp) => {
  return (
    <p>
      <span>{price}</span>원
    </p>
  )
}

export default SearchCardPrice;