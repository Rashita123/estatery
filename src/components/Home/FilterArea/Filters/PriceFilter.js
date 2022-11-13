import "../FilterArea.css";
export const PriceFilter = ({filterDetails, setFilterDetails}) => {
    const updatePriceFilter = (e) => {
        let range = "";
        if(e.target.value === 'all'){
            range = "all";
        }else{
            range = e.target.value.split("-").map(str => parseInt(str));
        }
        
        setFilterDetails({ ...filterDetails, price: range})
    }
    return(
        <div className="flex-col border-left">
            <span className="filter-bar-title">Price</span>
            <form>
                <select onChange={e => updatePriceFilter(e)} className="price-input">
                    <option value="all">All Ranges</option>
                    <option value="2000-3000">$2,000 - $3,000</option>
                    <option value="3000-4000">$3,000 - $4,000</option>
                    <option value="4000-5000">$4,000 - $5,000</option>
                    <option value="5000-6000">$5,000 - $6,000</option>
                    <option value="6000-7000">$6,000 - $7,000</option>
                </select>
            </form>
        </div>
    )
}