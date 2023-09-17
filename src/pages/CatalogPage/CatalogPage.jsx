import React, { useEffect, useMemo, useState } from 'react';
import {useLocation, useSearchParams  } from 'react-router-dom';

import ErrorComponent from '../../components/Error/Error';
import LoaderComponent from '../../components/Loader';
import AdvertList from '../../components/AdvertList/AdvertList';
import { SearchBar } from 'components';
import apiAdvert from '../../services/apiAdvert';
import Status from '../../services/status';
import styles from './CatalogPage.module.css';
import { Pagination } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function Catalog  ()  {

  const [adverts, setAdverts] = useState([]);

  const [error, setError] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);
  const [totalPage, setTotalPage] = useState(0);
  
  const [searchParams , setSearchParams] = useSearchParams({ page: 1 });
  const location = useLocation();
  const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);
  const page = Number(params.page || 1);
  const [currentPage, setCurrentPage] = useState(1);
  const make = searchParams.get('make') || '';
  const rentalPrice = searchParams.get('rentalPrice') || '';

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      make: 'Buick',
      rentalPrice: '',
    },
  });

  const query = {
    make: "Buick",
    rentalPrice,
    limit: 8,
    page: currentPage,
  };
  console.log("query before  catalog",query);
  useEffect((query) => {
    const fetchData = async (query) => {
      try {
        console.log("query  catalog",query);
        const results = await apiAdvert.getAllAdverts(query)
        setAdverts(results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(query);
  }, [page]);

  // apiAdvert.getAllAdverts(query)
  //     .then(data => {
  //       setAdverts(data.results);
  //       console.log("query before  catalog",query,data.results);
  //       // setTotalPages(data.totalPages);
  //     })
  //     .catch(console.log);

    function handlePage(event, page) {
   
     setSearchParams({ page });

  };
  

  const limit = 8;
  // const page = currentPage;

 
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    // updatePagination(pageNumber);
  };
  const handleMakeChange = () => {
    setCurrentPage(1);
    // updateCatQuery(getValues('Make.value'));
  };

  const handlePriceChange = () => {
    setCurrentPage(1);
    // updateIngrQuery(getValues('Price.value'));
  };




  const nextPage = () => paginate(currentPage + 1);
  const prevPage = () => paginate(currentPage - 1);

  const makeList = [...new Set(adverts.map(item => item.make))].sort();
  const rentalPriceList =  [...new Set(adverts.map(item => item.rentalPrice))]
  .map(price => parseInt(price.substring(1))) // Преобразование в числа
  .sort((a, b) => a - b);

  return (
    <main className={styles.main}>

      <SearchBar
     
         control={control}
         makeList={makeList}
         rentalPriceList={rentalPriceList}
        onChangeMake={handleMakeChange}
        onChangePrice={handlePriceChange}
        initialMake={searchParams.get('Make')}
        initialPricet={searchParams.get('Price')}
      />
      {status === Status.PENDING && <LoaderComponent />}

      {status === Status.REJECTED && <ErrorComponent message={error.message} textError="Error" />}

      {status === Status.RESOLVED && (
        <>
         <AdvertList
          adverts={adverts}
          location={location}  
        /> 

      {totalPage > 1 && (
        <Pagination
          className={styles.pagination}
          color='primary'
          count={totalPage}
          onChange={handlePage}
          page={Number(page)}
          showFirstButton
          showLastButton
          size="large"
        />
      )}
      </>
    )}
    </main>
  );
};

 