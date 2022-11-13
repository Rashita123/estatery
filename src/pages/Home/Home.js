import "./Home.css";
import { useState } from "react";
import { Navbar, FilterArea, MainListingArea } from "../../components/Home";
import { data } from "../../data";
export const Home = () => {
    const [ filteredData, setFilteredData ] = useState(data);
    return(
        <div className="flex-col">
            <Navbar/>
            <FilterArea filteredData={filteredData} setFilteredData={setFilteredData}/>
            <MainListingArea filteredData={filteredData}/>
        </div>
    )
}