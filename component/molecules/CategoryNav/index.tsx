import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';

import './styles.scss';
import CateGoryNavIcon from '../../atoms/CategoryMain/Icon';
import { useSelector } from 'react-redux';

const CategoryNav = () => {
  const [dummyCategories, setDummyCategories] = useState(['#ffee00', '#66ee92', '#998811', '#ff0000', '#00ff00', '#eeff00', '#00ff21', '#38ee11', '#1010ff']);
  const [isRender, setIsRender] = useState<boolean>(false);
  const [nowSelect, setNowSelect] = useState<number>(0);
  const baseHeight = useSelector<RootStore>(state => state.scroll.scrollHeight) as number;
  
  const navScrollEventHandle = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    if ((scrollTop >= 1540 && isRender) || (scrollTop < 1540 && !isRender)) {
      return;
    } 
    if(scrollTop >= 1540) {
      setIsRender(true);
    } else {
      setIsRender(false);
    }
  }, [isRender])
  useEffect(()=>{
    setNowSelect((baseHeight-1540)/600);
    console.log(nowSelect);
  }, [baseHeight])
  useEffect(()=>{
    window.addEventListener('scroll', navScrollEventHandle);
    return () => {
      window.removeEventListener('scroll', navScrollEventHandle);
    }
  }, [isRender])
  return (
    <aside className="category-nav-container"
      style={isRender? { display: 'block' } : { display: 'none' }}>
      aside
      {
        dummyCategories.map((color, index) => {
          
          return (<CateGoryNavIcon isSelected={nowSelect === index+1} color={color} key={index} />)
        })
      }
    </aside>
  )
}

export default CategoryNav;