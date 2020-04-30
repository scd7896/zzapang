import * as React from "react";
import "./styles.scss";

const MyPageMenuList = () => {
  return (
    <ul className="mypage-menu-ul">
      <li>
        <a>주문목록</a>
      </li>
      <li>
        <a>취소/반품</a>
      </li>
      <li>
        <a>찜 리스트</a>
      </li>
    </ul>
  );
};

export default MyPageMenuList;
