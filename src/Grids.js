/* eslint-disable jsx-a11y/anchor-is-valid */
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import img3 from './images.png'
import { Link } from 'react-router-dom'
const Grids = (props) => {
  const details = props.details

  return (
    <div style={{ backgroundColor: props.Color }}>
      <Grid container spacing={3}>
        {details.map((d) => (
          <Grid item xs={3} className='card'>
            <Paper className='paper'>
              <div key={d.id} style={{ paddingTop: '2em' }}>
                <a href='#'>
                  <img
                    src={img3}
                    alt=''
                    srcset=''
                    className='float'
                    onClick={() => {
                      props.handleDelete(d.id)
                    }}
                  />
                </a>
                <img
                  src={d.image}
                  alt=''
                  id='image'
                  srcset=''
                  style={{ height: '270px' }}
                />
                <Link
                  to={{
                    pathname: '/LearnMore',
                    state: {
                      id: d.id,
                      image: d.image,
                      name: d.name,
                      ings: d.ings,
                    },
                  }}
                  id='myButton'
                >
                  Learn More
                </Link>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Grids
//  <Link
//                   to={{
//                     pathname: '/Editable',
//                     state: {
//                       id: d.id,
//                       image: d.image,
//                       name: d.name,
//                       ings: d.ings,
//                     },
//                   }}
//                   id='myButton'
//                 >
//                   Edit
//                 </Link>
