import * as React from "react";
import { useEffect, useState, useCallback } from "react";

import ThumbnailSection from "../../organisms/ThumbnailSection";
import TodayHeadImage from "../../atoms/TodayHeadImage";
import CategoryNav from "../../molecules/CategoryNav";
import CategorySection from "../../organisms/CategoryMain/Section";
import { oneCategoryItem, bigImage } from '../../../dummyData/index';
import { getRandomColor } from '../../../util/index';
import { useSelector, useDispatch } from "react-redux";
import { setBaseScrollHeight } from '../../../action/scroll'
import "./styles.scss";

type IndexTemplateProps = {
  thumbnail: Thumbnail;
};

const categoryDummys = [oneCategoryItem,oneCategoryItem,oneCategoryItem,oneCategoryItem,oneCategoryItem,oneCategoryItem];
const Index = ({ thumbnail }: IndexTemplateProps) => {
  const dispatch = useDispatch();
  const [randomColors, setRandomColors] = useState<Array<string>>([]);
  const [isCategoryRender, setIsCategoryRender] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const baseHeight = useSelector<RootStore>(state => state.scroll.scrollHeight) as number;
  
  const increaseValue = 600;
  const categoryScrollHandler = (event: Event) => {
    if (isCategoryRender) {
      window.removeEventListener('scroll', categoryScrollHandler);
      return;
    }
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPos = scrollHeight - scrollTop;
    if (clientHeight + 80 > scrollPos) {
      setIsCategoryRender(true);
      window.removeEventListener('scroll', categoryScrollHandler);
    }
  }

  const lazyLoadingImage = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
      // downscroll code
      if (scrollTop >= baseHeight) {
        const nextValue = baseHeight + increaseValue
        dispatch(setBaseScrollHeight(nextValue))
      }
    } else {
        // upscroll code
        if (scrollTop <= baseHeight - 600) {
          const nextValue = baseHeight - increaseValue
          dispatch(setBaseScrollHeight(nextValue))
        }
    }
    setLastScrollTop(st <= 0 ? 0 : st);  
  },[baseHeight, lastScrollTop]);

  useEffect(() => {
    const nextArr = []
    for (let i = 0 ; i < 9; i++) {
      nextArr.push(getRandomColor())
    }
    setRandomColors(nextArr);
  }, [])

  useEffect(()=>{
    if (isCategoryRender) {
      window.addEventListener('scroll', lazyLoadingImage)
    } else {
      window.addEventListener('scroll', categoryScrollHandler)
    }
    return () => {
      window.removeEventListener('scroll', categoryScrollHandler)
      window.removeEventListener('scroll', lazyLoadingImage)
    }
  }, [isCategoryRender, baseHeight])
  return (
    <section className="main-template-wrapper">
      <ThumbnailSection
        nowSelect={thumbnail.nowSelect}
        bigThumbnailImageDatas={thumbnail.bigImageDatas}
        snapShotDatas={thumbnail.snapShotDatas}
      />
      <section className="today-wrapper-section">
        <article className="today-content-wrapper-article">
          <TodayHeadImage href="" isSelected={true} />
        </article>
      </section>
      { isCategoryRender && 
        <section className="main-categoty-view">
          <h1>카테고리 전체 보기</h1>
          <CategoryNav />
          { randomColors &&
          randomColors.map((color, index) => {
            const check = (baseHeight - 640) / increaseValue > index + 1
            return ( 
              <CategorySection 
                isRender={check}
                categoryItems={categoryDummys} 
                bigImageUrl={bigImage} 
                color={color} 
                key={index}/>  
            )
          })}
        </section>
      }
    </section>
  );
};

export default Index;
