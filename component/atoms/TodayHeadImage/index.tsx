import * as React from "react";
import { useRef, useState, useEffect } from "react";
export interface TodayHeadImageProps {
  href: string;
  isSelected: boolean;
}
const TodayHeadImage = ({ href, isSelected }: TodayHeadImageProps) => {
  let targetImg = useRef<HTMLImageElement>(null);
  const setSrc = () => {
    if (targetImg !== null) {
      console.dir(targetImg.current!.dataset.src);
    }
  };
  useEffect(() => {
    let observer;
    setSrc();
    // if (targetImg) {
    //     new IntersectionObserver()
    // }
  }, []);

  return (
    <div>
      <img ref={targetImg} data-src={"hhhh"}></img>
      <p>아무튼 그려짐</p>
    </div>
  );
};

export default TodayHeadImage;
