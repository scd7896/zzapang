import * as React from "react";
import "./styles.scss";
type HeaderLinkProps = {
  iconImg?: string;
  text: string;
  isNew?: boolean;
  url: string;
};
const HeaderLink = ({ iconImg, text, isNew, url }: HeaderLinkProps) => {
  return (
    <a className="header-link-wrapper" href={url}>
      {iconImg && <img src={iconImg} width="24px" height="24px" />}
      <p style={{ marginLeft: "8px" }}>{text}</p>
      {isNew && <p className="link-new-obx">N</p>}
    </a>
  );
};

export default HeaderLink;
