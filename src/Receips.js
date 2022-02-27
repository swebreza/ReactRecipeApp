import React from 'react'

// import { useState } from 'react'
import Grids from './Grids'
const Receips = (props) => {
  const details = props.details
  const textColor = props.textColor
  const setdetails = props.setdetails
  const handleDelete = (id) => {
    const newDetails = details.filter((d) => d.id !== id)
    setdetails(newDetails)
  }
  return (
    <div
      style={{
        width: '98%',
        padding: '10px',
        height: '100%',
        backgroundColor: props.Color,
        color: textColor,
      }}
    >
      {' '}
      <p>
        <Grids
          details={details}
          handleDelete={handleDelete}
          Color={props.Color}
        />
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Receips
//  <Grid item xs={6} sm={3} className='card'>
//   <Paper className='paper'>
//     <img src={img3} alt='' srcset='' className='float' />
//     <img src={img1} alt='' srcset='' id='image' />
//     <button className='button'>Learn More</button>
//   </Paper>
// </Grid>
// <Grid item xs={6} sm={3} className='card'>
//   <Paper className='paper'>
//     <img src={img3} alt='' srcset='' className='float' />
//     <img src={img1} alt='' srcset='' id='image' />
//     <button className='button'>Learn More</button>
//   </Paper>
// </Grid>
// <Grid item xs={6} sm={3} className='card'>
//   <Paper className='paper'>
//     <img src={img3} alt='' srcset='' className='float' />
//     <img src={img1} alt='' srcset='' id='image' />
//     <button className='button'>Learn More</button>
//   </Paper>
// </Grid>
