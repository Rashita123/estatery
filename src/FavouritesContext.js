import { createContext, useContext, useState } from "react"
const FavouritesContext = createContext(); 
export const FavouritesProvider = ({children}) => {
    const [ favourites, setFavourites ] = useState([]);
    return(
        <FavouritesContext.Provider value={{favourites, setFavourites}}>
            {children}
        </FavouritesContext.Provider>
    )
}

export const useFavouritesContext = () => {
    return useContext(FavouritesContext);
}