import React, { useState, ChangeEvent } from 'react';
import '../Sidebar/Sidebar.scss'


interface TransferFiltersProps {
    className?: string;
}

interface TransferFiltersState {
    transfer0: boolean;
    transfer1: boolean;
    transfer2: boolean;
    transfer3: boolean;
}

const TransferFilters: React.FC<TransferFiltersProps> = ({ className }) => {
    const classToUse = className || "transfers"
    const [transferFilters, setTransferFilters] = useState<TransferFiltersState>({
        transfer0: false,
        transfer1: false,
        transfer2: false,
        transfer3: false,
    });

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target
        setTransferFilters({ ...transferFilters, [name]: checked })
    }

    return (
        <div className={classToUse}>
            <h3 className="sidebar__title">Количество пересадок</h3>
            <label className="checkbox__wrapper" >
                <input className="checkbox"
                    type="checkbox"
                    name='transfer0'
                    checked={transferFilters.transfer0}
                    onChange={handleCheckboxChange}
                />
                <span className="checkbox__name">Без пересадок</span>
            </label>
            <label className="checkbox__wrapper"  >
                <input
                    className="checkbox"
                    type="checkbox"
                    name='transfer1'
                    checked={transferFilters.transfer1}
                    onChange={handleCheckboxChange}
                />
                <span className="checkbox__name">1 пересадка</span>
            </label>
            <label className="checkbox__wrapper"  >
                <input
                    className="checkbox"
                    type="checkbox"
                    name='transfer2'
                    checked={transferFilters.transfer2}
                    onChange={handleCheckboxChange}
                />
                <span className="checkbox__name">2 пересадка</span>
            </label>
            <label className="checkbox__wrapper"  >
                <input
                    className="checkbox"
                    type="checkbox"
                    name='transfer3'
                    checked={transferFilters.transfer3}
                    onChange={handleCheckboxChange}
                />
                <span className="checkbox__name">3 пересадки</span>
            </label>
        </div>
    );
};

export default TransferFilters;