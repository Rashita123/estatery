import { useEffect, useState } from "react";
import "../FilterArea.css";
export const DateFilter = ({filterDetails, setFilterDetails}) => {
    const [ currentDate, setCurrentDate ] = useState("");
    useEffect(() => {
        const currentDate = new Date().toISOString().split("T")[0];
        setCurrentDate(currentDate);
    },[])

    const updateDateFilter = (e) => {
        const date = e.target.value;
        setFilterDetails({ ...filterDetails, date: date})
    }


    return(
        <div className="flex-col border-left">
            <span className="filter-bar-title">When</span>
            <input onChange={e=> updateDateFilter(e)} type="date"  value={filterDetails.date ? filterDetails.date : currentDate} min={currentDate}/>
        </div>
    )
}