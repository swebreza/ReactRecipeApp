import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
// import img2 from './peaches_spices.jpg'
const LearnMore = (props) => {
  const color = props.Color
  const textColor = props.textColor

  const location = useLocation()
  const { name, image, ings } = location.state
  return (
    <div style={{ color: textColor, backgroundColor: color }}>
      <img
        src={image}
        alt=''
        srcset=''
        style={{ width: '400px', padding: '3em' }}
      />
      <p>
        <h2 style={{ color: textColor }}>Name: {name}</h2>
      </p>

      <h3 style={{ color: textColor, padding: '3em' }}>Ingedriens: {ings}</h3>
    </div>
  )
}

export default LearnMore
