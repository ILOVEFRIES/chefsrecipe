import React, { useEffect } from 'react'
import Select from 'react-select'
import useGetRecipe from '../hooks/useGetRecipe'


const AppHeader = () => {
  
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  

  return (
    <section className='header'>
        <div className='headerLogo'>
          CHEF'S<br/>
          RECIPE
        </div>
        <div className='headerSearch'>
          <Select 
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
