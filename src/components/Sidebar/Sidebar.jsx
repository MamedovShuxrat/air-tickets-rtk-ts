import React, { useState } from 'react'
import "./Sidebar.scss";

const Sidebar = () => {
    const [company, setCompany] = useState([
        {
            name: 'Победа'
        },
        {
            name: 'Red Wings'
        },
        {
            name: 'S7 Airlines'
        }
    ])

    const [transferFilters, setTransferFilters] = useState({
        transfer0: false,
        transfer1: false,
        transfer2: false,
        transfer3: false,

    })
    const handeCheckboxChange = (event) => {
        const { name, checked } = event.target
        setTransferFilters({ ...transferFilters, [name]: checked })
    }

    return (
        <aside className="sidebar">
            <div className="transfers">
                <h3 className="sidebar__title">Количество пересадок</h3>
                <label className="checkbox__wrapper" >
                    <input className="checkbox"
                        type="checkbox"
                        name='transfer0'
                        checked={transferFilters.transfer0}
                        onChange={handeCheckboxChange}
                    />
                    <span className="checkbox__name">Без пересадок</span>
                </label>
                <label className="checkbox__wrapper"  >
                    <input
                        className="checkbox"
                        type="checkbox"
                        name='transfer1'
                        checked={transferFilters.transfer1}
                        onChange={handeCheckboxChange}
                    />
                    <span className="checkbox__name">1 пересадка</span>
                </label>
                <label className="checkbox__wrapper"  >
                    <input
                        className="checkbox"
                        type="checkbox"
                        name='transfer2'
                        checked={transferFilters.transfer2}
                        onChange={handeCheckboxChange}
                    />
                    <span className="checkbox__name">2 пересадка</span>
                </label>
                <label className="checkbox__wrapper"  >
                    <input
                        className="checkbox"
                        type="checkbox"
                        name='transfer3'
                        checked={transferFilters.transfer3}
                        onChange={handeCheckboxChange}
                    />
                    <span className="checkbox__name">3 пересадки</span>
                </label>
            </div>
            <div className="company">
                <h3 className="sidebar__title">Компании</h3>
                {company.map((item, index) => (
                    <label key={index} className="checkbox__wrapper"  >
                        <input
                            className="checkbox-radio"
                            type="checkbox"
                            name={`tranferCompany-${item.name}`}
                            checked={transferFilters[`transfer${item.name}`]}
                            onChange={handeCheckboxChange}
                        />
                        <span className="checkbox__name"> {item.name}</span>
                    </label>
                ))}

            </div>
        </aside>
    )
}

export default Sidebar