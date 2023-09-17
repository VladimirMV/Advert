import AdvertList from '../../components/AdvertList/AdvertList';
import { useFavorites } from 'hooks/useFavorites';

export const FavoritePage = () => {
    const [favorites, toggleFavorites] = useFavorites();

    return (
        <div>
            <AdvertList data={favorites} toggleFavorites={toggleFavorites} />
        </div>
    );
};