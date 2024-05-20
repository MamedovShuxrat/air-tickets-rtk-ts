import TransferFilters from '../TransferFilers/TransferFilters'
import CompanyFilters from '../CompanyFilters/CompanyFilters'
import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <TransferFilters className={undefined} />
            <CompanyFilters className={undefined} />
        </aside>
    )
}

export default Sidebar