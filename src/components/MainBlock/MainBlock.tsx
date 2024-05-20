import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTickets } from '../../store/slices/tickets'
import { AppDispatch, RootState } from '../../store/store'
import ContentLoader from 'react-content-loader'


import './MainBlock.scss'
import CompanyFilters from '../CompanyFilters/CompanyFilters'
import TransferFilters from '../TransferFilers/TransferFilters'

const MainBlock = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenClose = () => {
        setIsOpen(!isOpen)
    }

    const dispatch = useDispatch();
    const { tickets, error, status } = useSelector((state: RootState) => state.tickets)

    useEffect(() => {
        dispatch(fetchTickets())
    }, [dispatch])
    return (
        <div>
            <div className="btn__wrapper">
                <div className="filter__btn active">Самый дешевый</div>
                <div className="filter__btn">Самый быстрый</div>
                <div className="filter__btn">Самый оптимальный</div>
            </div>
            <div className="filter__wrapper">
                <div className="filter__menu">
                    <div className="filter__lists">
                        <div className="filter__list">
                            <span className="filter__item">Любая авиакомпания </span>
                            <span className="filter__item"> любое кол-во пересадок</span>
                        </div>
                        <div className="filter__list">
                            <span className="filter__item">{isOpen ? 'Закрыть настройки' : 'Открыть настройки'} </span>
                            <img onClick={handleOpenClose} className='arrow__btn' style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }} src='./public/arrow.svg' alt='arrow' />
                        </div>
                    </div>
                    {isOpen &&
                        <div className='tablet__wrapper'>
                            <CompanyFilters className="tablet" />
                            <TransferFilters className="tablet" />
                        </div>}
                </div>
            </div>
            <div className="result__wrapper">
                {status === 'loading' &&
                    <div className='result__item'>
                        <ContentLoader
                            speed={23}
                            width={520}
                            height={180}
                            viewBox="0 0 520 180"
                            backgroundColor="#f5eaea"
                            foregroundColor="#e8ebf2"
                        >
                            <rect x="5" y="17" rx="0" ry="0" width="125" height="30" />
                            <rect x="122" y="100" rx="0" ry="0" width="1" height="0" />
                            <rect x="289" y="9" rx="0" ry="0" width="200" height="43" />
                            <rect x="382" y="44" rx="0" ry="0" width="2" height="0" />
                            <rect x="394" y="176" rx="0" ry="0" width="10" height="1" />
                            <rect x="400" y="27" rx="0" ry="0" width="5" height="0" />
                            <rect x="12" y="111" rx="0" ry="0" width="54" height="24" />
                            <rect x="12" y="148" rx="0" ry="0" width="54" height="24" />
                            <rect x="180" y="147" rx="0" ry="0" width="54" height="27" />
                            <rect x="182" y="110" rx="0" ry="0" width="43" height="24" />
                            <rect x="299" y="146" rx="0" ry="0" width="164" height="27" />
                            <rect x="300" y="112" rx="0" ry="0" width="103" height="27" />
                            <rect x="82" y="110" rx="0" ry="0" width="54" height="27" />
                            <rect x="82" y="148" rx="0" ry="0" width="54" height="24" />
                        </ContentLoader>
                    </div>}
                {status === 'error' && <p>Error: {error}</p>}
                {status === 'success' &&
                    tickets.map((ticket) => (
                        <div className='result__item' key={ticket.id}>
                            <div className="title__wrapper">
                                <div className="result__price">{ticket.price} {ticket.currency}</div>
                                <img className="result__logo" src="./public/pobeda.svg" alt="air-company" />
                            </div>
                            <div className="details__wrapper">
                                <div className="location">
                                    <div className="from-to__wrapper">
                                        <span className="from">From: {ticket.from} </span>
                                        <span className="dash">-</span>
                                        <span className="to">To: {ticket.to}</span>
                                    </div>
                                    <div className="from-time__wrapper">
                                        <span className="from-time">12:00</span>
                                        <span className="dash-active">-</span>
                                        <span className="from-to"> 16:30</span>
                                    </div>
                                    <div className="on-way">
                                        <span className="on-way__title" >В пути</span>
                                        <span className="on-way__time">{ticket.duration}</span>
                                    </div>
                                    <div className="result__transfers">
                                        <span className="transfers__title">Пересадки</span>
                                        <span className="transfers__desc">{ticket.connectionAmount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                -
                <div className="result__item">
                    <div className="title__wrapper">
                        <div className="result__price">  5000 RUB</div>
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