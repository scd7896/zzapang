import * as React from 'react'
import './styles.scss'



const HeaderIcon = (props: any) => {
    
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default HeaderIcon;