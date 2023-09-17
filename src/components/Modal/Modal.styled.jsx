import styled from '@emotion/styled';
import { theme } from 'styles';
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.bgBackdrop};
    z-index: 1;
`;

export const ModalWindow = styled.div`
    position: relative;
    width: 541px;
    padding: 40px;
    background-color: ${theme.colors.bgPrimary};
    border-radius: 24px;
`;

export const CloseBtn = styled.button`
    position: absolute;
    display: flex;
    top: 16px;
    right: 16px;
    transition: color 0.2s ${theme.transitions.cubicBezier};
    cursor: pointer;

    &:hover,
    &:focus {
        color: ${theme.colors.bgAccentHover};
    }
`;