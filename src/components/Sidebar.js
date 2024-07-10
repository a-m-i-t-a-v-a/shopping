import { Button,Form } from 'react-bootstrap'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <span className='title'>Filter Products</span>
      <span>
        <Form.Check
            inline
            label='Ascending'
            name='group1'
            type='radio'
            id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
            inline
            label='Descending'
            name='group1'
            type='radio'
            id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
            inline
            label='Include stocks above 3 only'
            name='group1'
            type='checkbox'
            id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
            inline
            label='Rating above 4.50 only'
            name='group1'
            type='radio'
            id={`inline-4`}
        />
      </span>
      <span>
        {/*<label style={{paddingRight:10}}>Rating: </label>
        <Rating rating={byRating} style={{cursor:"pointer"}}/>*/}
      </span>
      <Button variant='light'>Clear filters</Button>
    </div>
  )
}

export default Sidebar
