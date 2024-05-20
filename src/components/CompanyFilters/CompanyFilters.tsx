import React, { useState } from 'react'
import '../Sidebar/Sidebar.scss'

interface CompanyFiltersProps {
    className?: string
}
interface CompanyStates {
    name: string
}

const CompanyFilters: React.FC<CompanyFiltersProps> = ({ className }) => {
    const classToUse = className || "company"
    const [company, setCompany] = useState<CompanyStates[]>([
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
                    />
                    <span className="checkbox__name"> {item.name}</span>
                </label>
            ))}
        </div>
    )
}

export default CompanyFilters