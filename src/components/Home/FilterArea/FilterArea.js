import "./FilterArea.css";
import { useState } from "react";
import { data } from "../../../data";
import { filterData } from "../../../utils/filterData";
import { LocationFilter, DateFilter, PriceFilter, PropertyTypeFilter } from "./Filters";
import { Search } from "./Search";
export const FilterArea = ({filteredData, setFilteredData}) => {
    const [ filterDetails, setFilterDetails ] = useState({ location: "All", date: null, price: "all", propertyType: "all" });
    const applyFilters = (data, filterDetails) => {
        const filteredData = filterData(data, filterDetails);
        setFilteredData(filteredData);
    }
    return(
        <div className="filter-area">
            <Search setFilterDetails={setFilterDetails} setFilteredData={setFilteredData}/>
            <div className="filter-bar flex-row justify-space-between">
                <LocationFilter filterDetails={filterDetails} setFilterDetails={setFilterDetails}/>
                <DateFilter filterDetails={filterDetails} setFilterDetails={setFilterDetails}/>
                <PriceFilter filterDetails={filterDetails} setFilterDetails={setFilterDetails}/>
                <PropertyTypeFilter filterDetails={filterDetails} setFilterDetails={setFilterDetails}/>
                
                <div className="flex-col border-left">
                    <button onClick={() => applyFilters(data, filterDetails)} className="button button-primary button-search">Search</button>
                </div>
            </div>
        </div>
    )
}