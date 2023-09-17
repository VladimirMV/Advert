import styled from '@emotion/styled';
import { theme } from 'styles';



export const ImageCard = styled.img`

    background: #FFF;
    width: 461px;
    height: 248px;
    margin-bottom: 14px;
    border-radius: 14px;
    object-fit: cover;
    object-position: center;
  
`;


export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 14px;
`;

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 500;
    line-height: calc(24 / 18);
`;

export const TitleAccent = styled.span`
    color: ${theme.colors.textAccent};
`;

export const DataList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 4px;
    column-gap: 6px;
`;

export const DataItem = styled.li`
    color: ${theme.colors.textTransparentPrimary};

    &:not(:last-child) {
        padding-right: 6px;
        border-right: 1px solid ${theme.colors.borderSecondary};
    }
`;

export const Description = styled.p`
    font-size: 14px;
    line-height: calc(20 / 14);
    margin-bottom: 24px;
`;

export const AccessoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
`;

export const BlockTitle = styled.h3`
    font-size: 14px;
    line-height: calc(20 / 14);
`;

export const RentalConditionsBlock = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const ConditionsItem = styled.li`
    padding: 7px 14px;
    color: ${theme.colors.textAdditional};
    background-color: ${theme.colors.bgAdditional};
    border-radius: 35px;
`;

export const AccentText = styled.span`
    font-family: 'Montserat', sans-serif;
    font-weight: 600;
    letter-spacing: -0.24px;
    color: ${theme.colors.textAccent};
`;