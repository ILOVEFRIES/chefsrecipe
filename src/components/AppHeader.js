import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import useGetRecipe from '../hooks/useGetRecipe'
import LandingPage from './screens/LandingPage'
import CatalogPage from './screens/CatalogPage'


const AppHeader = (props) => {
  const [search, setSearch] = useState('');

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'b', label: 'b' },
    { value: 'a', label: 'a' },

  ]

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
            // onChange={(choice) => { console.log(choice);
            //   props.changePage(
            //   <CatalogPage 
            //   search = {choice.value}
            //   changePage={
            //     (page) => props.changePage(page)
            //   }
            //   />
            // )}}

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
            options={options}
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
        <div className='headerProfile'>
          
      </div>
    </section>
  )
}

export default AppHeader
