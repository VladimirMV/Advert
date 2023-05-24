import React from 'react';
// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from 'modules/SharedLayout/SharedLayout';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';
import { Home } from 'pages/HomePage/HomePage';
import { Movies } from 'pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { Cast } from '../modules/Cast/Cast';
import { Reviews} from '../modules/Reviews/Reviews';

// const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const Movies = lazy(() => import('pages/MoviesPage/MoviesPage'));
// const MovieDetailsPage = lazy(() =>
//   import('pages/MovieDetailsPage/MovieDetailsPage')
// );
// const Cast = lazy(() => import('../modules/Cast/Cast'));
// const Reviews = lazy(() =>
//   import('../modules/Reviews/Reviews').then(module => ({
//     ...module,
//     default: module.Reviews,
//   }))
// ); // if doesn`t have default export
// console.log(HomePage);
// console.log(Movies);
// console.log(Cast);
// console.log(Cast);
const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;

// Этот код экспортирует компонент UserRoutes, который используется для определения маршрутизации пользовательского интерфейса приложения.

// Для этого компонента импортируется библиотека React, а также несколько модулей и компонентов из приложения. Компоненты HomePage, Movies, MovieDetailsPage, Cast, Reviews, ActorsPage, ActorsMovies, ActorDetailsPage и PageNotFound - вызываются асинхронно с помощью lazy и import.

// В компоненте UserRoutes используются компоненты маршрутизации Routes и Route из библиотеки React Router. Они определяют маршруты приложения и соответствующие компоненты.

// <Route path="/" element={<SharedLayout />}> устанавливает корневой маршрут и определяет, какой компонент должен быть отображен.

// <Route index element={<HomePage />} /> задает дочерний маршрут для корневого маршрута при использовании index.

// <Route path="movies" element={<Movies />} /> устанавливает маршрут для страницы фильмов.

// <Route path="movies/:movieId" element={<MovieDetailsPage />}> устанавливает маршрут для страницы с подробной информацией о фильме, используя параметр movieId.

// <Route path="cast" element={<Cast />} /> и <Route path="reviews" element={<Reviews />} /> - это вложенные маршруты для страницы подробной информации о фильме.

// <Route path="*" element={<PageNotFound />} /> устанавливает маршрут для страницы 404.

// Все маршруты обернуты в <Routes>, и компонент UserRoutes экспортируется по умолчанию с помощью export default.