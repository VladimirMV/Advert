import PropTypes from 'prop-types';
 import { Controller } from 'react-hook-form';
import {
  Form,
  SearchFieldWrap,
  Input,
  SearchBtn,
  Selector,
  selectStyles,
} from './SearchBar.styled';
import { LuSearch } from 'react-icons/lu';

export const SearchBar = ({
  onSubmit,
  control,
  makeList,
  rentalPriceList,
  onChangeMake,
  onChangePrice,
  initialMake,
  initialPrice,
}) => {
  const defMake = {
    value: initialMake,
    label: initialMake,
  };

  const defPrice = {
    value: initialPrice,
    label: initialPrice,
  };

  const setListMake = makeList.map(option => ({
    value: option,
    label: option,
  }));
  
  const setListRentalPrice  = rentalPriceList.map(option => ({
    value: option,
    label: option,
  }));
  
  return (
    <Form onSubmit={onSubmit}>
      <SearchFieldWrap>
        {/* <Controller
          name="drink"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Enter the text" autocomplete="off" />
          )}
        /> */}
        {/* <SearchBtn type="submit">
          <LuSearch style={{ width: 20, height: 20 }} />
        </SearchBtn> */}
      </SearchFieldWrap>
      <Controller
        name="Car brand"
        control={control}
        render={({ field }) => (
          <Selector
            placeholder="Enter the text"
            unstyled
            {...field}
            styles={selectStyles}
             options={setListMake}
            value={
              makeList && makeList.length > 0
                ? defMake
                : 'Enter the text'
            }
            onChange={selectedOption => {
              field.onChange(selectedOption);
              onChangeMake(selectedOption.value);
            }}
          />
        )}
      />
      <Controller
        name="rentalPriceList"
        control={control}
        render={({ field }) => (
          <Selector
            placeholder="To $"
            unstyled
            styles={selectStyles}
            {...field}
            options={setListRentalPrice}
            value={
              rentalPriceList && rentalPriceList.length > 0
                ? defPrice
                : 'rentalPriceList'
            }
            onChange={selectedOption => {
              field.onChange(selectedOption);
              onChangePrice(selectedOption.value);
            }}
          />
        )}
      />
    </Form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  control: PropTypes.object,
  ingredientsList: PropTypes.array,
  categoriesList: PropTypes.array,
  onChangeMake: PropTypes.func,
  onChangePrice: PropTypes.func,
  initialMake: PropTypes.string,
  initialPrice: PropTypes.string,
};
