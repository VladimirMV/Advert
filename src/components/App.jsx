// import ScrollToTop from 'react-scroll-up';
// import { ToastContainer, Slide } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { RxThickArrowUp } from 'react-icons/rx';
import { useEffect } from 'react';
import { addBackToTop } from 'vanilla-back-to-top';
// import { GlobalStyle } from 'styles/GlobalStyle';
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

      {/* <ScrollToTop
        showUnder={120}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 35,
          background:
            'linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%)',
          width: '42px',
          height: '42px',
          padding: '8px',
          borderRadius: '50%',
          boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
        }}
      >
        <RxThickArrowUp size="28" strokeWidth="0.2px" />
      </ScrollToTop>
      <ToastContainer transition={Slide} draggablePercent={60} />
      <GlobalStyle /> */}
    </>
  );
};
export default App;
// This is a React application component that renders the UI of an app. It imports several packages and components from various libraries.

// The ScrollToTop component is imported from the 'react-scroll-up' library, and it renders a button that takes the user back to the top of the page when clicked. The RxThickArrowUp component from 'react-icons/rx' provides an arrow icon for this button.

// The ToastContainer component from 'react-toastify' renders the notifications in the app, and the Slide transition property determines how the notifications appear.

// The GlobalStyle component is a custom global style component imported from 'styles/GlobalStyle.js'.

// The UserRoutes component is a custom component imported from the same file as the App component, which renders all the routes in the app.

// Overall, this App component returns a fragment containing the UserRoutes component, ScrollToTop component with an arrow button, ToastContainer component for notifications, and GlobalStyle component for custom global styles.