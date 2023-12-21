import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import useGetRecipe from '../hooks/useGetRecipe'
import LandingPage from './screens/LandingPage'
import CatalogPage from './screens/CatalogPage'
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useUser } from '../context/globalContext'
import { firestore } from '../firebase'
import SignUp from './auth/SignUp'
import Login from './auth/Login'
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";



const AppHeader = (props) => {
  const { currentUser } = useUser();
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState([]);
  const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);
  
  // { value: 'chocolate', label: 'Chocolate' },
  // { value: 'strawberry', label: 'Strawberry' },
  // { value: 'vanilla', label: 'Vanilla' },
  // { value: 'b', label: 'b' },
  // { value: 'a', label: 'a' },
  const userSignOut = () => {
    signOut(auth)
        .then(() => {
            console.log("Sign out successful");
        })
        .catch((error) => console.log(error));
};
  useEffect(()=> {
    const fetchHistory = async () => {
      try {
        if (currentUser) {
          const historyRef = collection(firestore, 'searchHis');
          const q = query(historyRef, where('userID', '==', currentUser.uid));

          const snapshot = await getDocs(q);
          if (!snapshot.empty) {
            const historyArray = snapshot.docs[0].data().histories;
            setOptions(historyArray.map((item) => {
              return {value: item, label: item}
            }))
            console.log(historyArray);
          } else {
            console.log('No history found for this user');
          }
        }
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };

    fetchHistory();
  }, [options])

  const [menuIsOpen, setMenuIsOpen] = useState();

  const onInputChange = (
    inputValue,
    { action, prevInputValue }
  ) => {
    if (action === 'input-change') {
      props.changePage(
        <CatalogPage 
        search = {inputValue}
        changePage={
          (page) => props.changePage(page)
        }
        />
      )
      return inputValue;
    }

    if (action === 'menu-close') {
      if (prevInputValue) setMenuIsOpen(true);
      else setMenuIsOpen(undefined);
    }
    
    return prevInputValue;
  };

  return (
    <section className='header'>
        <div 
        style={{cursor:'pointer',}}
        onClick={() => props.changePage(<LandingPage changePage={(page) => props.changePage(page)}/>)}
        className='headerLogo'>
          CHEF'S<br/>
          RECIPE
        </div>
        <div className='headerSearch'>
          <Select 
            onChange={(choice) => { console.log(choice);
              props.changePage(
              <CatalogPage 
              search = {choice.value}
              changePage={
                (page) => props.changePage(page)
              }
              />
            )}}

            onInputChange={onInputChange}


            // onFocus={() => props.changePage(
            //   <CatalogPage 
            //   changePage={
            //     (page) => props.changePage(page)
            //   }/>
            // )}
            
            type='text' 
            placeholder='Search Recipe'
            className='headerSearchBar'
            options={options.slice().reverse()}
            styles={{control: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: '66px',
              paddingLeft: '10px',
              backgroundColor: '#EFEFEF',
              height: '50px',
              width: '729px',
              cursor: 'text',
            }),}}
          />
        </div>
        {authUser? 
        <div className='headerProfile'
        onClick={() => {
          userSignOut();
        }}         
        >
          LOG OUT
        </div> :
        <div className='headerProfile'
          onClick={() => {
            props.changePage(<Login changePage={(page) => props.changePage(page)} showing={(bol)=>props.showing(bol)}/>);
            props.showing(false);
          }}
          
        >
          LOG IN
      </div>}
        
    </section>
  )
}

export default AppHeader
