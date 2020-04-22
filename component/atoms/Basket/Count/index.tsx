import * as React from 'react'

interface BasketCountProps {
    count: number
}
const BasketCount = ({ count }: BasketCountProps) => {
    return (
        <div className="basket-count-icon">
            <p>{ count }</p>
        </div>
    )
}

export default BasketCount