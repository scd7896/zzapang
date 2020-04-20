import * as React from 'react'
import SelectCategory from '../../atoms/SelectCategory';
import SearchInput from '../../atoms/SearchInput';
import SearchButton from '../../atoms/SearchButton'

import './styles.scss'
const SearchForm = () => {
    return (
        <form className="search-form-container" action="/" method="GET">
            <SelectCategory />
            <SearchInput />
            <SearchButton />
        </form>
    )
}

export default SearchForm