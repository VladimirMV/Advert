import styled from '@emotion/styled';
import { theme } from 'styles';

export const CategoryItem = styled.div`
  background: #FFF;
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 342px;
  }
  @media screen and (min-width: 1440px) {
    width: 274px;
  }

  &:hover,
  &:focus {
    a {
      color: ${theme.colors.lightGray};
      text-shadow: ${theme.shadows.light};

      border-color: ${theme.colors.transparentLight};
    }
  }
`;

export const ImageCard = styled.img`
  margin-bottom: 14px;
  width: 274px;
  height: 268px;
  border-radius: 8px;
  object-fit: fill;
  @media screen and (max-width: 374.98px) {
    height: auto;
  }
  @media screen and (min-width: 768px) {
    width: 342px;
    margin-bottom: 14px;
    border-radius: 8px;
  }
  @media screen and (min-width: 1440px) {
    width: 274px;
    height: 268px;
    border-radius: 8px;
  }
`;





export const ModelText = styled.p`
  /* font-size: ${theme.fontSizes.large}; */
  color: #121417;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
  margin-bottom: 4px;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Ограничение на количество строк */
  -webkit-box-orient: vertical;

  /* @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.smallTitle};
    line-height: calc(32 / 24);
  } */
`;

export const PriceText = styled.p`
  /* padding: 0 10px; */
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 42px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0);

  color: ${theme.colors.transparentLight};

  font-size: ${theme.fontSizes.small};

  line-height: calc(18 / 14);
  color: #121417;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.medium};
    line-height: calc(18 / 16);
    margin-left: 0px;
  }

  @media screen and (min-width: 1440px) {
  }
  &:hover,
  &:focus {
    color: ${theme.colors.lightGray};
    background: #FFF;
    box-shadow: ${theme.shadows.regular};
  }
`;
export const SupportText = styled.p`
  /* padding: 0 10px; */
  height: 100%;
  display: flex;
  align-items: center;
  display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;

  color: rgba(18, 20, 23, 0.50);
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 150% */
 
`;
export const TextContainer = styled.div`
  /* height: 24px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SupportingTextContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;