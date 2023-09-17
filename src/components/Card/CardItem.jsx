import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { AdvertModal } from 'components/AdvertModal/AdvertModal';
import {
  CategoryItem,
  ImageCard,
  PriceText,
  ModelText,
  TextContainer,
  SupportingTextContainer,
  SupportText,
} from './CardItem.styled';
import { Button } from 'components';
const defaultImageUrl = require('../../img/img-placeholder.png');

export const CardItem = ({ data, toggleFavorites }) => {
  const {
      id,
      img,
      make,
      model,
      year,
      rentalPrice,
      address,
      rentalCompany,
      type,
      mileage,
      accessories,
      functionalities,
      favorite,
  } = data;


  const imageUrl = img || defaultImageUrl;
  const addressElements = address.split(', ');
  const lastTwoAddressElements = addressElements.slice(-2).join(' ❘ ');
   const [isFavorite, setIsFavorite] = useState(favorite);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFavorite = () => {
      toggleFavorites(id);
      setIsFavorite(prevState => !prevState);
  };

  const toggleModal = () => setIsModalOpen(prevState => !prevState);
  
  return (
    <CategoryItem>
      <ImageCard loading="lazy" src={imageUrl} alt="" />
      <TextContainer>
        <ModelText>{make}  {model}  {year}</ModelText>
        <PriceText>{rentalPrice}</PriceText>
      </TextContainer>
      <SupportingTextContainer>
        <SupportText>{lastTwoAddressElements} ❘ {rentalCompany} ❘ Premium 
        <br />{type} ❘ {make} ❘ {mileage} ❘ {accessories[1]}</SupportText>
      </SupportingTextContainer>
      <Button minWidth ="274px"
        minHeight ="24px"
        onClick={toggleModal}>
         
         Learn more</Button>
         {isModalOpen && (
                <Modal toggleModal={toggleModal}>
                    <AdvertModal data={data} />
                </Modal>
            )}
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