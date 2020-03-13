import React from 'react'
import Image from '../Assets/R.gif';

export default function Header() {
    return (
        <nav className="mainNav">
            <img className="logo" src={Image} alt="Letter R animated"/>
            <a href=" ">Page 1</a>
            <a href=" ">Page 2</a>
            <a href=" ">Page 3</a>
        </nav>
        // <div>
        //     <p>This is a test</p>
        // </div>
    )
}
