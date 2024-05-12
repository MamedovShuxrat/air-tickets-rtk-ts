import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="wrapper">
                    <img className="logo" src="./public/plane.svg" alt="plane" />
                    <h1 className="title">Поиск авиабилетов</h1>
                </div>
            </div>
        </header>
    )
}

export default Header