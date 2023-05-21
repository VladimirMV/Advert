import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';



import { Container } from './SharedLayout.styled';

 import { Header } from './Header/Header';

export const SharedLayout = () => {
 

  /* перевіряємо, чи змонтувався компонент
Якщо цього ще не сталося -відобразимо порожній div: */
//   if (!componentMounted) {
//     return <div />;
//   }
  return (
    <>
       
        <Container>
          <Header  />
          <main>
            <Suspense fallback={<div>{'loading'}</div>}>
              <Outlet />
            </Suspense>
          </main>
        </Container>
       
    </>
  );
};