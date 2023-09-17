
import { NavStyled, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
    return (
        <NavStyled>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/catalog">Rental</NavLinkStyled>
            <NavLinkStyled to="/favorites">Favorite</NavLinkStyled>
        </NavStyled>
    );
};
export default Navigation;
