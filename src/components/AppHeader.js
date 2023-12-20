import React from 'react'
import Select from 'react-select'


const AppHeader = () => {
  return (
    <section className='header'>
      <div className='headerFlex'>
        <div className='headerLogo'>
          CHEF'S<br/>
          RECIPE
        </div>
        <div className='headerSearch'>
          <Select 
          type='text' 
          placeholder='Search Recipe'
          />
        </div>
        <div className='headerProfile'>
          
        </div>
      </div>
    </section>
  )
}

export default AppHeader
