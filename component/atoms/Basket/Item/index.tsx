import * as React from 'react'
import './styles.scss';



const BasketItem = ({ url, description, img }: BasketItemData) => {
    return (
        <li className="priview-product">
            <a href={url} className="basket-item-contents">
                <div>
                    <img src={img} width="60px" height="30px" />
                </div>
                <div>
                    <span>{description}</span>
                </div>
            </a>
        </li>
    )
}

export default BasketItem;