import "./PropertyCard.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiBed, BiBath } from "react-icons/bi";
import { TbDimensions } from "react-icons/tb";
import { useFavouritesContext } from "../../../FavouritesContext";
import { useEffect, useState } from "react";
export const PropertyCard = ({property}) => {
    const [ isFavourite, setIsFavourite ] = useState(false);
    const { favourites, setFavourites } = useFavouritesContext();
    useEffect(() => {
        if(favourites.find(fav => fav.propertyId === property.propertyId)){
            setIsFavourite(true);
        }
    },[])
    const putIntoFavourites =  (property) => {
        if(!favourites.find(fav => fav.propertyId === property.propertyId)){
            setFavourites([...favourites, property]);
        }
        setIsFavourite(true);
    }

    return(
        <div className="property-card">
            <div className="">
                <img className="card-image" src={property.imageUrl} alt="house"></img>
            </div>
            <div className="card-description flex-col">
                <div className="flex-row justify-space-between">
                    <div><span className="card-price">${property.price} </span><span className="font-small">/month</span></div>
                    {!isFavourite ? <AiOutlineHeart size={15} className="heart-icon" onClick={() => putIntoFavourites(property) }/>
                     : <AiFillHeart sixe={15} className="heart-icon" onClick={() => putIntoFavourites(property) }/>}
                </div>
                <div className="flex-col">
                    <span className="card-description__name">{property.name}</span>
                    <span className="nowrap">{property.headline}</span>
                </div>
                <hr></hr>
                <div className="card-details flex-row font-small justify-space-between">
                    <div className="flex-row">
                        <BiBed className="card-icons"/>
                        <span>{property.details.beds} Beds</span>
                    </div>
                    <div className="flex-row">
                        <BiBath className="card-icons"/>
                        <span>{property.details.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex-row">
                        <TbDimensions className="card-icons"/>
                        <span>{property.details.length}×{property.details.width} m<sup>2</sup></span>
                    </div>
                </div>
            </div>
        </div>
    )
}