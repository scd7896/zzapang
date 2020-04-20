import * as React from 'react'
import { useState } from 'react';

const SearchInput = () => {
    const [text, setText] = useState('');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value);
    }
    return (
        <input className="search-input" onChange={onChange} value={text} />
    )
}

export default SearchInput;