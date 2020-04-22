import * as React from 'react'
import { useState, useEffect } from 'react';
import BasketItem from '../../atoms/Basket/Item';

import './styles.scss';
interface BasketListProps {
    basketList: BasketItemData[],
}

const BasketList = ({ basketList }: BasketListProps) => {
    return (
        <ul className="basket-list-ul">
            {   
                basketList.map((item, i) => {
                    return(
                        <BasketItem {...item} key={i} />
                    )
                })
            }
        </ul>    
    )
}

export default BasketList;