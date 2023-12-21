import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import AppHeader from './components/AppHeader';
import LandingPage from './components/screens/LandingPage';
import CatalogPage from './components/screens/CatalogPage';
import { useEffect, useState } from 'react';

function App() {
  const [mainSection, setMainSection] = useState(<div></div>)
  useEffect(() => {
    setMainSection(<LandingPage/>);
  }, [])
  return (
    <>
      <AppHeader/>
      {mainSection}

        {/* <Login />
        <SignUp />
        <AuthDetails /> */}
      
      </>
  );
}

export default App;