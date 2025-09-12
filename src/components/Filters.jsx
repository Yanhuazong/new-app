import "../styles/filters.css"

const Filters = ({titles, onChange, onSearch, click, title, search}) => {
    return (
        <div className="filter-container">
            <div className="select-filter">
                <label htmlFor="select">Select a title:</label>
                <select id="select" onChange={onChange} value={title}>
                <option value="">All</option>
                {
                    titles.map(title => <option key={title} value={title}>{title}</option>)
                }
                </select>
            </div>
            <div className="search-filter">
                <label htmlFor="search">Search by name:</label>
                <input id="search" onChange={onSearch} value={search} />
            </div>
            <button onClick={click}>Clear</button>
        </div>
    )
}

export default Filters;