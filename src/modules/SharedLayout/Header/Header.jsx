
import React from 'react';
// import Navigation from '../Navigation';
// pages/HomePage/HomePage
import Navigation from 'components/Navigation/Navigation';
export const  Header = () => {
  return (
    <header>
      <Navigation />
    </header>
  );
}

// import React from 'react';
// // import { PageNf, Wrap } from './PageNotFound.styled';

// export const Header = () => {
//   return (
//     <div>
        
//           <h1>Header</h1>
//     </div>
//   );
// };

// import { Outlet } from 'react-router-dom';
// import Navigation from '../Navigation';
// import styles from './Header.module.scss';

// import Container from '../Container';

// export default function Header() {
//   return (
//     <>
//       <Container>
//         <header className={styles.header}>
//           <Navigation />
//         </header>

//         <Outlet />
//       </Container>
//     </>
//   );
// }