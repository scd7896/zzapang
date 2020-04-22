import * as React from 'react'
import { useState, useEffect } from 'react';
import { basketDummyList } from '../../../dummyData'

import BasketList from '../../molecules/BasketList';
import HeaderIcon from '../../atoms/HeaderIcon';
import BasketCount from '../../atoms/Basket/Count';
import './styles.scss'
const Basket = () => {
    const [basketList, setBasketList] = useState<Array<BasketItemData>>();
    const [isRender, setIsRender] = useState(false);
    useEffect(()=>{
        setBasketList(basketDummyList);
    })
    return (
        <div className="basket-wrapper" 
            onMouseOver={ ()=>{setIsRender(true)} }
            onMouseOut={ ()=>{setIsRender(false)} }>
            <HeaderIcon className="basket-button">장바구니</HeaderIcon>
            {
                basketList !== undefined &&  (
                    <div>
                        <BasketList 
                            basketList={basketList}
                        />
                        <BasketCount count={basketList.length} />
                    </div>
                )
            }
        </div>
    )
}

export default Basket;