import "../FilterArea.css";
import { data } from "../../../../data"; 
import { useState } from "react";
export const LocationFilter = ({filterDetails, setFilterDetails}) => {
    const [ suggestions, setSuggestions ] = useState([]);
    const [ suggestionsDisplay, setSuggestionsDisplay ] = useState(true);
    const [ location, setLocation ] = useState("");
    const updateLocationFilter = (e) => {
        setLocation(e.target.value);
        setFilterDetails({ ...filterDetails, location: e.target.value})
    }
    const onInputChange = (e) => {
            setSuggestionsDisplay(true);
            let citiesAndStates = data.map(property => property.state);
            citiesAndStates.push(...data.map(property => property.city));
            citiesAndStates = ["All", ...new Set(citiesAndStates)]
            const lengthOfInput = e.target.value.length;
            setSuggestions(citiesAndStates.filter(location => location.substring(0,lengthOfInput).toLowerCase() === e.target.value.toLowerCase()));

        updateLocationFilter(e);
    }
    const clickSuggestion = (e) => {
        setSuggestionsDisplay(false);
        updateLocationFilter(e)
    }
    return(
        <div className="flex-col">
            <span className="filter-bar-title">Location</span>
            <input onChange={e => onInputChange(e)} className="filter-bar-value location-input" placeholder="New York, USA" value={location}/>
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
    )
}