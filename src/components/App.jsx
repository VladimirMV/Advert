 
import { useEffect } from 'react';
import { addBackToTop } from 'vanilla-back-to-top';
import UserRoutes from './UserRoutes';

export const App = () => {
  useEffect(() => {
    addBackToTop({
      backgroundColor: '#fa7584',
    });
  }, []);
  return (
    <>
      <UserRoutes />
    </>
  );
};
export default App;
