import PropTypes from 'prop-types';
import {
  CategoryItem,
  ImageCard,
  PriceText,
  ModelText,
  TextContainer,
} from './CardItem.styled';
const defaultImageUrl = require('../../img/no_image.jpg');

export const CardItem = ({ data: { Id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, rentalPrice } }) => {
  const imageUrl = img || defaultImageUrl;
  return (
    <CategoryItem>
      <ImageCard loading="lazy" src={imageUrl} alt="" />
      <TextContainer>
        <ModelText>{make}  {model}  {year}</ModelText>
        <PriceText>{rentalPrice}</PriceText>
      </TextContainer>
    </CategoryItem>
  );
};

CardItem.propTypes = {
  data: PropTypes.shape({
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};