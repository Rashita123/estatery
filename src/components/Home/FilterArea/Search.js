import { useState } from "react";
import { data } from "../../../data";

export const Search = ({setFilterDetails, setFilteredData}) => {
    const [ suggestions, setSuggestions ] = useState([]);
    const [ suggestionsDisplay, setSuggestionsDisplay ] = useState(true);
    const [ searchName, setSearchName ] = useState("");

    const onInputChange = (e) => {
            setSearchName(e.target.value);
            setSuggestionsDisplay(true);
            let allPropertyNames = data.map(property => property.name);
            allPropertyNames = [...new Set(allPropertyNames)]
            const lengthOfInput = e.target.value.length;
            setSuggestions(allPropertyNames.filter(name => name.substring(0,lengthOfInput).toLowerCase() === e.target.value.toLowerCase()));

    }
    const clickSuggestion = (e) => {
        setSearchName(e.target.value);
        setSuggestionsDisplay(false);
        setFilterDetails({ location: "All", date: null, price: "all", propertyType: "all" });
        setFilteredData(data.filter(property => property.name === e.target.value))
    }
    return(
        <div className="flex-row search-bar">
                <h1>Search properties to rent</h1>
                <div className="flex-col">
                    <div className="relative">
                        <input onChange={e => onInputChange(e)} placeholder="Search with Search Bar" value={searchName}></input>
                        {/* <AiOutlineDown size={12} className="down-icon"/> */}
                    </div>
                        {suggestionsDisplay && suggestions.length!==0 &&
                        <form>
                            <div className="dropdown">
                                {
                                    suggestions.map(suggestion => {
                                        return(
                                            <option onClick={e => clickSuggestion(e)} value={suggestion}>{suggestion}</option>
                                        )
                                    })
                                }
                            </div>
                        </form>
                        }
                </div>
        </div>
    )
}