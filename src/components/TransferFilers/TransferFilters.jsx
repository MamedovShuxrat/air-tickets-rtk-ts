import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import { setTransferFilters } from '../../store/slices/slice'
// import { RootState } from '../../store/store';
import '../Sidebar/Sidebar.scss'


const TransferFilters = ({ className }) => {
    const classToUse = className || "transfers"
    // const transferFilters = useSelector((state: RootState) => state.TransferFilters.transferFilters);
    // const dispatch = useDispatch();

    // const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, checked } = event.target;
    //     dispatch(setTransferFilters({ [name]: checked }));
    // };

    const [transferFilters, setTransferFilters] = useState({
        transfer0: false,
        transfer1: false,
        transfer2: false,
        transfer3: false,

    })

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target
        setTransferFilters({ ...transferFilters, [name]: checked })
    }

    return (
        <div className={classToUse}>
            <h3 className="sidebar__title">Количество пересадок</h3>
            {/* <label className="checkbox__wrapper">
                <input
                    className="checkbox"
                    type="checkbox"
                    name="transfer0"
                    checked={transferFilters.transfer0}
                    onChange={handleFilterChange}
                />
                <span className="checkbox__name">Без пересадки</span>
            </label>
            <label className="checkbox__wrapper">
                <input
                    className="checkbox"
                    type="checkbox"
                    name="transfer1"
                    checked={transferFilters.transfer1}
                    onChange={handleFilterChange}
                />
                <span className="checkbox__name">1 пересадка</span>
            </label>
            <label className="checkbox__wrapper">
                <input
                    className="checkbox"
                    type="checkbox"
                    name="transfer2"
                    checked={transferFilters.transfer2}
                    onChange={handleFilterChange}
                />
                <span className="checkbox__name">2 пересадки</span>
            </label>
            <label className="checkbox__wrapper">
                <input
                    className="checkbox"
                    type="checkbox"
                    name="transfer3"
                    checked={transferFilters.transfer3}
                    onChange={handleFilterChange}
                />
                <span className="checkbox__name">3 пересадки</span>
            </label> */}
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