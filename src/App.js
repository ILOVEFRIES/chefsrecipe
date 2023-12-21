import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import AppHeader from './components/AppHeader';
import LandingPage from './components/screens/LandingPage';
import RecipePage from './components/screens/RecipePage';

function App() {
  return (
    <>
      {/* <AppHeader/>
        <LandingPage/> */}

        {/* <Login />
        <SignUp />
        <AuthDetails /> */}
        <AppHeader/>
      <RecipePage/>
      </>
  );
}

export default App;