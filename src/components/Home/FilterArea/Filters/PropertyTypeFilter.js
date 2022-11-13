import "../FilterArea.css";
export const PropertyTypeFilter = ({filterDetails, setFilterDetails}) => {
    const updateTypeFilter = (e) => {
        setFilterDetails({ ...filterDetails, propertyType: e.target.value})
    }
    return(
        <div className="flex-col border-left">
            <span className="filter-bar-title">Property Type</span>
            <form>
                <select onChange={e => updateTypeFilter(e)} className="price-input">
                    <option value="all">All</option>
                    <option value="penthouse">PentHouse</option>
                    <option value="apartment">Apartment</option>
                    <option value="flat">Flat</option>
                    <option value="house">House</option>
                </select>
            </form>
        </div>
    )
}