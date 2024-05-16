import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTransferFilters } from '../../store/slices/slice'
import TransferFilters from '../TransferFilers/TransferFilters'
import CompanyFilters from '../CompanyFilters/CompanyFilters'
import "./Sidebar.scss";

const Sidebar = () => {
    // const company = useSelector(state => state.company);
    // const transferFilters = useSelector(state => state.transferFilters);
    // const dispatch = useDispatch();


    // const handleCheckboxChange = (event) => {
    //     const { name, checked } = event.target;
    //     dispatch(setTransferFilters({ ...transferFilters, [name]: checked }));
    // };

    return (
        <aside className="sidebar">
            <TransferFilters />
            <CompanyFilters />
        </aside>
    )
}

export default Sidebar