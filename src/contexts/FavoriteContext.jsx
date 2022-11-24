import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});


function FavoritesContextProvider({ children }) {
    const [favoriteBookIds, setFavoriteBookIds] = useState([]);

    function addFavorite(id) {
        setFavoriteBookIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id) {
        setFavoriteBookIds((currentFavIds) =>
            currentFavIds.filter((bookId) => bookId !== id)
        );
    }

    const value = {
        ids: favoriteBookIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;
