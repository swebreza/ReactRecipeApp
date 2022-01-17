import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
// import img2 from './peaches_spices.jpg'
const LearnMore = (props) => {
  // const details = props.details

  const location = useLocation()
  const { name, id, image, ings } = location.state
  return (
    <div>
      <img
        src={image}
        alt=''
        srcset=''
        style={{ width: '400px', padding: '3em' }}
      />
      <p>
        <h2>Name: {name}</h2>
      </p>
      <p>
        <h3>Ingedriens: {ings}</h3>
      </p>
    </div>
  )
}

export default LearnMore
