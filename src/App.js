import './App.css';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';

function App() {
  return (
    <div className='App'>
      <Login />
      <SignUp />
      <AuthDetails />
    </div>
  );
}

export default App;