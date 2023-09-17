import PropTypes from 'prop-types';
import placeholder from 'img/img-placeholder.png';
import {
    ImageCard,
    Title,
    TitleContainer,
    DataList,
    BlockTitle,
    Description,
    AccessoriesContainer,
    RentalConditionsBlock,
    ConditionsItem,
    DataItem,

  } from './AdvertModal.styled';

export const AdvertModal = ({
    data: {
        img,
        make,
        model,
        year,
        address,
        id,
        type,
        fuelConsumption,
        engineSize,
        description,
        accessories,
        functionalities,
        rentalConditions,
        mileage,
        rentalPrice,
    },
}) => {


    return (
       <>
            <ImageCard
                src={img ? img : placeholder}
                alt={`${make} `}  
            />
         <div>
          <TitleContainer>
            <Title>
                    <span>{make} </span>
                    <span>{model}, </span>
                    <span>{year}</span>
            </Title>
             
                <DataList>
                    <DataItem>{address.split(',')[1]}</DataItem>
                    <DataItem>{address.split(',')[2]}</DataItem>
                    <DataItem>Id: {id}</DataItem>
                    <DataItem>Year: {year}</DataItem>
                    <DataItem>Type: {type}</DataItem>
                    <DataItem>Fuel Consumption: {fuelConsumption}</DataItem>
                    <DataItem>Engine Size: : {engineSize}</DataItem>
                </DataList>
                </TitleContainer>

                <Description>{description}</Description>
                <AccessoriesContainer>
                <BlockTitle>Accessories and functionalities:</BlockTitle>

                <DataList>
                    {[...accessories, ...functionalities].map(item => (
                        <DataItem key={item}>{item}</DataItem>
                    ))}
                </DataList>
                </AccessoriesContainer>
                <BlockTitle>Rental Conditions:</BlockTitle>

                <RentalConditionsBlock>
                    {rentalConditions.split('\n').map(item => (
                        <ConditionsItem key={item}>{item}</ConditionsItem>
                    ))}
                    <ConditionsItem>Mileage: {mileage}</ConditionsItem>
                    <ConditionsItem>Price: {rentalPrice}</ConditionsItem>
                </RentalConditionsBlock>

                <a href="tel:+351969787039">Rental car</a>
            
           </div>
        </>
    );
};

AdvertModal.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired,
        make: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        img: PropTypes.string,
        description: PropTypes.string.isRequired,
        fuelConsumption: PropTypes.string.isRequired,
        engineSize: PropTypes.string.isRequired,
        accessories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        functionalities: PropTypes.arrayOf(PropTypes.string.isRequired)
            .isRequired,
        rentalPrice: PropTypes.string.isRequired,
        rentalCompany: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        rentalConditions: PropTypes.string.isRequired,
        mileage: PropTypes.number.isRequired,
        favorite: PropTypes.bool.isRequired,
    }).isRequired,
};