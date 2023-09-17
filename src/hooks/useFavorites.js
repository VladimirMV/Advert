// Libs
import { useEffect, useState } from 'react';
// Constants
import { LS_KEY_FAVORITES } from 'constants/constants';
// Api

import updateAdvert from '../services/apiAdvert';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem(LS_KEY_FAVORITES)) ?? [];
    });

    useEffect(() => {
        if (favorites.length === 0) {
            localStorage.removeItem(LS_KEY_FAVORITES);
        } else {
            localStorage.setItem(LS_KEY_FAVORITES, JSON.stringify(favorites));
        }
    }, [favorites]);

    const toggleFavorites = async id => {
        const isAlreadyInFavorites = favorites.some(item => item.id === id);

        if (isAlreadyInFavorites) {
            // Updating element in dataBase
            const updates = { favorite: false };
            await updateAdvert(id, updates);

            setFavorites(prevState => prevState.filter(item => item.id !== id));
        } else {
            // Updating element in dataBase
            const updates = { favorite: true };
            const updatedAdvert = await updateAdvert(id, updates);

            setFavorites(prevState => [updatedAdvert, ...prevState]);
        }
    };

    return [favorites, toggleFavorites];
};