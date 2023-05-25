import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'modules/SharedLayout/SharedLayout';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';


const Home = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>  import('pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('../modules/Cast/Cast'));
const Reviews = lazy(() => import('../modules/Reviews/Reviews'));

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

// This is a JavaScript code.It imports various modules from the 'react' 
// and 'react-router-dom' libraries.It also imports specific components
//  from the module files in this current project and from other project files.

// It uses the 'lazy' function from 'react' library to asynchronously 
// load components. 'const Home', 'const Movies', 'const MovieDetailsPage',
//   'const Cast', 'const Reviews' are the components loaded asynchronously 
//   using this technique.

//   The 'UserRoutes' function returns JSX(JavaScript XML) that defines 
// the routes for the React application.It renders the 'Routes' component 
// from 'react-router-dom' that defines paths to our website pages based 
// on the current state of the URL.

// It has 4 'Routes' nested inside the root Route.The first Route with path = "/" 
// is linked to the "SharedLayout" component.The other three routes define 
// nested paths starting with "movies/".These nested routes have their own 
// subpaths defining the cast and review pages.The last Route with path = "*" 
// is a fallback route that handles any other paths that are not defined earlier.

// The entire 'UserRoutes' function is exported as the default for use
//   in other files in the project.