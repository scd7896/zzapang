import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface SnapshotThumbnailProps {
    imageUrl: string;
    title: string;
    index: number;
}
// 쿠팡 썸네일의 우측에 하나씩 내려가는 하나하나의 단위 컴포넌트
const SnapshotThumbnail = ({ imageUrl, title, index }: SnapshotThumbnailProps) => {
    const dispatch = useDispatch();
    const nowSelect = useSelector<RootStore>(state => state.thumbnail.nowSelect);
    const onMouseOverEvent = () => {
        
    }

    return (
        <li className={ nowSelect === index ? "selected" : "" } onMouseOver={onMouseOverEvent}>
            <img src={ imageUrl } width="180px" height="60px" alt={title}/>
        </li>
    )
}

export default SnapshotThumbnail;