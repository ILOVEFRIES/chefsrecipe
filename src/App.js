import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import AppHeader from './components/AppHeader';
import LandingPage from './components/screens/LandingPage';
import CatalogPage from './components/screens/CatalogPage';

function App() {
  return (
    <>
      <AppHeader/>
      <CatalogPage/>
        {/* <LandingPage/> */}

        {/* <Login />
        <SignUp />
        <AuthDetails /> */}
      
      </>
  );
}

export default App;