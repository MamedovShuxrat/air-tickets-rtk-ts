import React, { useState } from 'react'
import '../Sidebar/Sidebar.scss'

const CompanyFilters = ({ className }) => {
    const classToUse = className || "company"
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

    return (
        <div className={classToUse}>
            <h3 className="sidebar__title">Компании</h3>
            {company.map((item, index) => (
                <label key={index} className="checkbox__wrapper"  >
                    <input
                        className="checkbox-radio"
                        type="checkbox"
                        name={`tranferCompany-${item.name}`}
                    // checked={transferFilters[`transfer${item.name}`]}
                    // onChange={handleCheckboxChange}
                    />
                    <span className="checkbox__name"> {item.name}</span>
                </label>
            ))}
        </div>
    )
}

export default CompanyFilters