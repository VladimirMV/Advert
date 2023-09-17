import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from 'styles';

export const NavStyled = styled.div`
    display: flex;
    justify-content: center;
    gap:40px;
`;

export const NavLinkStyled = styled(NavLink)`
    display: block;
    padding: 12px 8px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 24px;
    transition: color 0.2s ${theme.transitions.cubicBezier},
        transform 0.2s ${theme.transitions.cubicBezier};

    &.active {
        color: ${theme.colors.bgAccentHover};
        transform: scale(1.2);
    }

    &:hover,
    &:focus {
        color: ${theme.colors.bgAccentHover};
        transform: scale(1.2);
    }
`;