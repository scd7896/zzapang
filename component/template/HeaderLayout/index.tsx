import * as React from 'react'
import CategoryButton from '../../atoms/CategoryButton'
import HeaderLink from '../../atoms/HeaderLink'
import SearchForm from '../../molecules/SearchForm'


import './styles.scss'
import Basket from '../../organisms/Basket'
const HeaderLayout = () => {
    const testFunc = () => {
        console.log('마우스 오버됨')
    }
    return (
        <header className="header-container">
            <section className="header-content-section">
                <CategoryButton onMouseOver={testFunc}/>
                <section className="header-right-wrapper">
                    <div className="header-title-wrapper">
                        <img src="http://image7.coupangcdn.com/image/coupang/common/logo_coupang_w350.png" width="174px" height="41px"/>
                        <SearchForm />
                        <button>마이쿠팡</button>
                        <Basket />
                    </div>

                    <div className=".header-searchbar-wrapper">
                        <HeaderLink url="www.naver.com" text="네이버로" 
                        iconImg="https://w.namu.la/s/1b00344db7bc52dd507bf5f4f11d2e7c6278885e4a67c5f95f2e88fde5a589f42b7ab31762c52fcd134945c2b9e63b5043d67b335f3055f508604cd5a4c0302c223f10ed4eb659f8bbe89b3421bbfc77fd255cff40a90b6171d694eedc210dd5" 
                        isNew={true}/>
                        
                    </div>
                </section>
            </section>
            <article className="top-bar">
                <section className="top-bar-section">
                    <menu className="top-bar-left">
                        <li>
                            즐겨찾기
                        </li>
                        <li>
                            입점신청
                        </li>
                    </menu>
                    <menu>
                        <li>
                            로그인
                        </li>
                        <li>
                            회원가입
                        </li>
                        <li>
                            고객센터
                        </li>
                    </menu>
                </section>
            </article>
        </header>
    )
}

export default HeaderLayout