import * as React from 'react'
import './styles.scss';



const BasketItem = ({ url, description, img }: BasketItemData) => {
    return (
        <li className="priview-product">
            <a href={url}>
                <img src={img} />
                <p><span>{description}</span></p>
            </a>
        </li>
    )
}

export default BasketItem;