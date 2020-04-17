import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.scss";

const SelectCategory = () => {
    const [selectKeyword, setSelectKeyword] = useState("전체");
    const [isOpen, setIsOpen] = useState(false);
    const [optionList, setOptionList] = useState([
        "남성패션",
        "여성패션",
        "강아지용품",
        "가전제품",
        "컴퓨터",
        "노트북",
        "욕실제품",
        "화장품",
        "운동기구",
        "아기용품",
        "가방",
        "신발",
        "잡화",
    ]);
    const changeSelectKeyword = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setSelectKeyword(event.currentTarget.innerText);
    };

    const toggleIsOpen = (event: any) => {
        console.log("1");
        setIsOpen(!isOpen);
        return false;
    };

    useEffect(() => {
        let observer;
        const listRef = document.querySelector(".select-ul-wrapper")!;
        const body = document.querySelector("body")!;
        const toggleButton = document.querySelector(".toggle-click-wrapper");
        toggleButton?.addEventListener("click", toggleIsOpen);
        observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (isOpen) {
                    body.addEventListener("click", toggleIsOpen);
                    toggleButton?.removeEventListener("click", toggleIsOpen);
                } else {
                    body.removeEventListener("click", toggleIsOpen);
                }
                observer.unobserve(listRef);
            });
        });
        observer.observe(listRef);
        return () => {
            toggleButton?.removeEventListener("click", toggleIsOpen);
            body.removeEventListener("click", toggleIsOpen);
        };
    });

    return (
        <div className="select-category-wrapper">
            <div className="toggle-title-button">
                <div className="toggle-click-wrapper">{selectKeyword}</div>
            </div>
            <ul className="select-ul-wrapper" style={{ display: isOpen ? "block" : "none" }}>
                {optionList.map((option, index) => {
                    return (
                        <li
                            className="category-select-options"
                            onClick={changeSelectKeyword}
                            value={option}
                            key={index}
                        >
                            {option}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SelectCategory;
