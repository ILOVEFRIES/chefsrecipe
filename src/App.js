import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import AppHeader from './components/AppHeader';
import LandingPage from './components/screens/LandingPage';
import CatalogPage from './components/screens/CatalogPage';
import { useEffect, useState } from 'react';
import RecipePage from './components/screens/RecipePage';

function App() {
  const [mainSection, setMainSection] = useState(<div></div>)
  useEffect(() => {
    setMainSection(<LandingPage changePage={(page) => setMainSection(page)}/>);
  }, [])
  return (
    <>
      {/* <AppHeader/>
        <LandingPage/> */}

        <Login />
        {/* <SignUp />
        <AuthDetails /> */}
        {/* <AppHeader/>
      <RecipePage/> */}
      </>
  );
}

export default App;