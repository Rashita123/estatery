import "./MainListingArea.css";
import { PropertyCard } from "./PropertyCard";
export const MainListingArea = ({filterDetails, filteredData}) => {

    return(
        <div className="listing-area grid">
            {
                filteredData.length!==0 ?
                filteredData.map(property => {
                    return(
                        <PropertyCard property={property}/>
                    )
                })
                :
                <div>No property available with these filters.</div>
            }
        </div>
    )
}