import React, { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedTransfers } from '../../store/slices/filterSlices'
import { RootState } from '../../store/store'
import '../Sidebar/Sidebar.scss'

interface TransferFiltersProps {
    className?: string
}

const TransferFilters: React.FC<TransferFiltersProps> = ({ className }) => {
    const classToUse = className || 'transfers'

    const dispatch = useDispatch()
    const selectedTransfers = useSelector((state: RootState) => state.filters.selectedTransfers)

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target
        const transferNumber = parseInt(name.replace('transfer', ''), 10)
        let newSelectedTransfers = [...selectedTransfers]

        if (checked) {
            newSelectedTransfers.push(transferNumber)
        } else {
            newSelectedTransfers = newSelectedTransfers.filter((transfer) => transfer !== transferNumber)
        }

        dispatch(setSelectedTransfers(newSelectedTransfers))
    }

    return (
        <div className={classToUse}>
            <h3 className="sidebar__title">Количество пересадок</h3>
            <label className="checkbox__wrapper">
                <input
                    className="checkbox"
                    type="checkbox"
                    name="transfer0"
                    checked={selectedTransfers.includes(0)}
                    onChange={handleCheckboxChange}
                />
                <span className="checkbox__name">Без пересадок</span>
            </label>
            <label className="checkbox__wrapper">
                <input
                    className="checkbox"
                    type="checkbox"
                    name="transfer1"
                    checked={selectedTransfers.includes(1)}
                    onChange={handleCheckboxChange}
                />
                <span className="checkbox__name">1 пересадка</span>
            </label>
            <label className="checkbox__wrapper">
                <input
                    className="checkbox"
                    type="checkbox"
                    name="transfer2"
                    checked={selectedTransfers.includes(2)}
                    onChange={handleCheckboxChange}
                />
                <span className="checkbox__name">2 пересадки</span>
            </label>
            <label className="checkbox__wrapper">
                <input
                    className="checkbox"
                    type="checkbox"
                    name="transfer3"
                    checked={selectedTransfers.includes(3)}
                    onChange={handleCheckboxChange}
                />
                <span className="checkbox__name">3 пересадки</span>
            </label>
        </div>
    )
}

export default TransferFilters 
