import { useFavouritesContext } from "../../FavouritesContext"
import { PropertyCard } from "../../components/Home/MainListingArea/PropertyCard";
import { Navbar } from "../../components/Home";
export const Favourites = () => {
    const { favourites } = useFavouritesContext();
    return(
        <div className="flex-col">
            <Navbar/>
            <h1 className="listing-area">Favourites</h1>
            <div className="listing-area grid">
                {
                    favourites.length!==0 ?
                    favourites.map(property => {
                        return(
                            <PropertyCard property={property}/>
                        )
                    })
                    :
                    <div>No Favourite property</div>
                }
            </div>
        </div>
    )
}