import * as React from 'react'

interface SearchCardTitleProp {
  title: string
}

const SearchCardTitle = ({ title }: SearchCardTitleProp) => {
  return (
    <p>{title}</p>
  )
}

export default SearchCardTitle