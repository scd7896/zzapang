import * as React from 'react'
import SelectCategory from '../../atoms/SelectCategory';
import SearchInput from '../../atoms/SearchInput';

import './styles.scss'
const SearchForm = () => {
    return (
        <form className="search-form-container" action="/" method="GET">
            <SelectCategory />
            <SearchInput />
        </form>
    )
}

export default SearchForm