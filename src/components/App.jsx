 
import { useEffect } from 'react';
import { addBackToTop } from 'vanilla-back-to-top';
import UserRoutes from './UserRoutes';

export const App = () => {
  useEffect(() => {
    addBackToTop({
      backgroundColor: '#3470FF',
    });
  }, []);
  return (
    <>
      <UserRoutes />
    </>
  );
};
export default App;
