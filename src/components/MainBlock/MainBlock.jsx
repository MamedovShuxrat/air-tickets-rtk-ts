import React from 'react'
import './MainBlock.scss'

const MainBlock = () => {
    return (
        <div>
            <div className="btn__wrapper">
                <div className="filter__btn active">Самый дешевый</div>
                <div className="filter__btn">Самый быстрый</div>
                <div className="filter__btn">Самый оптимальный</div>
            </div>
            <div className="result__wrapper">
                <div className="result__item">
                    <div className="title__wrapper">
                        <div className="result__price">5000 RUB</div>
                        <img className="result__logo" src="./public/pobeda.svg" alt="air-company" />
                    </div>
                    <div className="details__wrapper">
                        <div className="location">
                            <div className="from-to__wrapper">
                                <span className="from">SVO</span>
                                <span className="dash">-</span>
                                <span className="to">LED</span>
                            </div>
                            <div className="from-time__wrapper">
                                <span className="from-time">12:00</span>
                                <span className="dash-active">-</span>
                                <span className="from-to"> 16:30</span>
                            </div>
                        </div>
                        <div className="on-way">
                            <span className="on-way__title" >В пути</span>
                            <span className="on-way__time">4 ч 30 мин</span>
                        </div>
                        <div className="result__transfers">
                            <span className="transfers__title">Пересадки</span>
                            <span className="transfers__desc">1 пересадка</span>
                        </div>
                    </div>
                </div>
                <div className="result__item">
                    <div className="title__wrapper">
                        <div className="result__price">21 500 RUB</div>
                        <img className="result__logo" src="./public/red-wings.svg" alt="air-company" />
                    </div>
                    <div className="details__wrapper">
                        <div className="location">
                            <div className="from-to__wrapper">
                                <span className="from">SVO</span>
                                <span className="dash">-</span>
                                <span className="to">LED</span>
                            </div>
                            <div className="from-time__wrapper">
                                <span className="from-time">14:00</span>
                                <span className="dash-active">-</span>
                                <span className="from-to"> 16:00</span>
                            </div>
                        </div>
                        <div className="on-way">
                            <span className="on-way__title" >В пути</span>
                            <span className="on-way__time">2 ч 0 мин</span>
                        </div>
                        <div className="result__transfers">
                            <span className="transfers__title">Пересадки</span>
                            <span className="transfers__desc">Без пересадок</span>
                        </div>
                    </div>
                </div>
                <div className="result__item">
                    <div className="title__wrapper">
                        <div className="result__price">23 995 RUB</div>
                        <img className="result__logo" src="./public/s7.svg" alt="air-company" />
                    </div>
                    <div className="details__wrapper">
                        <div className="location">
                            <div className="from-to__wrapper">
                                <span className="from">SVO</span>
                                <span className="dash">-</span>
                                <span className="to">LED</span>
                            </div>
                            <div className="from-time__wrapper">
                                <span className="from-time">04:50 </span>
                                <span className="dash-active">-</span>
                                <span className="from-to"> 13:30</span>
                            </div>
                        </div>
                        <div className="on-way">
                            <span className="on-way__title" >В пути</span>
                            <span className="on-way__time">8 ч 40 мин</span>
                        </div>
                        <div className="result__transfers">
                            <span className="transfers__title">Пересадки</span>
                            <span className="transfers__desc">2 пересадки</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn__more">Загрузить еще билеты</button>
        </div>
    )
}

export default MainBlock