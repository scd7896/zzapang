import * as React from 'react'
import HeaderIcon from '../../atoms/HeaderIcon'
import MyPageMenuList from '../../atoms/MyPageMenuList';
import './styles.scss';

const MyPageMenu = () => {
    return (
        <div className="mypage-wrapper">
            <HeaderIcon className="myicon-button">마이쿠팡</HeaderIcon>
            <MyPageMenuList></MyPageMenuList>
        </div>
    )
}

export default MyPageMenu;