import { useEffect, useState } from 'react'
import { fetchTickets } from '../../store/slices/tickets'
import { RootState, useAppDispatch, useAppSelector } from '../../store/store'


import './MainBlock.scss'
import CompanyFilters from '../CompanyFilters/CompanyFilters'
import TransferFilters from '../TransferFilers/TransferFilters'
import TicketsLoader from '../Utils/TicketsLoader'

const MainBlock = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [displayedTickets, setDisplayedTickets] = useState(4)
    const [filter, setFilter] = useState('cheapest')

    const handleOpenClose = () => {
        setIsOpen(!isOpen)
    }

    const dispatch = useAppDispatch()
    const { tickets, error, status } = useAppSelector((state: RootState) => state.tickets)
    const { selectedCompanies, selectedTransfers } = useAppSelector((state: RootState) => state.filters)

    useEffect(() => {
        dispatch(fetchTickets())
    }, [dispatch])

    // const calculateFlightDuration = (startTime: string, endTime: string): string => {
    //     const start = new Date(`2022-01-01T${startTime}:00Z`)
    //     const end = new Date(`2022-01-01T${endTime}:00Z`)

    //     if (end <= start) {
    //         end.setDate(end.getDate() + 1)
    //     }

    //     const duration = end.getTime() - start.getTime()
    //     const hours = Math.floor(duration / (1000 * 60 * 60))
    //     const minutes = Math.round((duration / (1000 * 60)) % 60)
    //     return `${hours} ч ${minutes} мин`
    // }
    // console.log(calculateFlightDuration('20:00', '2:00'))


    const calculateFlightDuration = (startTime: string, endTime: string) => {
        const start = new Date(`2022-01-01T${startTime}:00Z`)
        let end = new Date(`2022-01-01T${endTime}:00Z`)
        if (end <= start) {
            end.setDate(end.getDate() + 1)
        }

        const duration = end.getTime() - start.getTime()
        const hours = Math.floor(duration / (1000 * 60 * 60))
        const minutes = Math.floor((duration / (1000 * 60)) % 60)
        return `${hours} ч ${minutes} мин`
    }

    const handleLoadMoreTickets = () => {
        setDisplayedTickets((prev) => prev + 4)
    }

    const filteredTickets = tickets.filter((ticket) => {
        const companyMatch = selectedCompanies.length === 0 || selectedCompanies.includes(ticket.company)
        const transferMatch = selectedTransfers.length === 0 || (ticket.connectionAmount !== null && selectedTransfers.includes(ticket.connectionAmount))
        return companyMatch && transferMatch
    })


    filteredTickets.sort((a, b) => {
        if (filter === 'cheapest') {
            return a.price - b.price
        } else if (filter === 'faster') {
            return a.duration - b.duration
        } else if (filter === 'optimal') {
            return a.price / a.duration - b.price / b.duration
        }
        return 0
    })

    return (
        <div>
            <div className="btn__wrapper">
                <div
                    className={`filter__btn ${filter === 'cheapest' ? 'active' : ''}`}
                    onClick={() => setFilter('cheapest')}>
                    Самый дешевый
                </div>
                <div
                    className={`filter__btn ${filter === 'fastest' ? 'active' : ''}`}
                    onClick={() => setFilter('fastest')}>
                    Самый быстрый
                </div>
                <div
                    className={`filter__btn ${filter === 'optimal' ? 'active' : ''}`}
                    onClick={() => setFilter('optimal')}>
                    Самый оптимальный
                </div>
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
                            <img onClick={handleOpenClose} className='arrow__btn' style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }} src='/arrow.svg' alt='arrow' />
                        </div>
                    </div>
                    {isOpen && (
                        <div className='tablet__wrapper'>
                            <CompanyFilters className="tablet" />
                            <TransferFilters className="tablet" />
                        </div>
                    )}
                </div>
            </div>
            <div className="result__wrapper">
                {status === 'loading' &&
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                        <TicketsLoader />
                        <TicketsLoader />
                        <TicketsLoader />
                        <TicketsLoader />
                    </div>}
                {status === 'error' && <p>Error: {error}</p>}
                {status === 'success' && filteredTickets.slice(0, displayedTickets).map((ticket) => {
                    const formattedStartTime = ticket.time.startTime.padStart(5, '0').slice(0, 5)
                    const formattedEndTime = ticket.time.endTime.padStart(5, '0').slice(0, 5)
                    return (
                        <div className="result__item" key={ticket.id}>
                            <div className="title__wrapper">
                                <div className="result__price">{ticket.price} {ticket.currency}</div>
                                <img className="result__logo" src={`${ticket.company}.svg`} alt="air-company" />
                            </div>
                            <div className="details__wrapper">
                                <div className="location">
                                    <div className="from-to__wrapper">
                                        <span className="from">{ticket.from} </span>
                                        <span className="dash">-</span>
                                        <span className="to">{ticket.to}</span>
                                    </div>
                                    <div className="from-time__wrapper">
                                        <span className="from-time">{formattedStartTime}</span>
                                        <span className="dash-active">-</span>
                                        <span className="from-to"> {formattedEndTime}</span>
                                    </div>
                                </div>
                                <div className="on-way">
                                    <span className="on-way__title" >В пути</span>
                                    <span className="on-way__time">
                                        {calculateFlightDuration(formattedStartTime, formattedEndTime)}
                                    </span>
                                </div>
                                <div className="result__transfers">
                                    <span className="transfers__title">Пересадки</span>
                                    <span className="transfers__desc"> {ticket.connectionAmount === 0 ? 'Без пересадок' : ticket.connectionAmount === 1 ? '1 пересадка' : `${ticket.connectionAmount} пересадок`}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button onClick={handleLoadMoreTickets} className="btn__more">Загрузить еще билеты</button>
        </div>
    )
}

export default MainBlock 
