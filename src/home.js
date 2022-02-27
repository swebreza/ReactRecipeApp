/* eslint-disable jsx-a11y/alt-text */
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import img1 from './coffee_book.jpg'
import img2 from './peaches_spices.jpg'

const Home = (props) => {
  return (
    <div style={{ backgroundColor: props.Color, color: props.textColor }}>
      <h1>{props.title}</h1>
      <AliceCarousel autoPlay autoPlayInterval='3000'>
        <img src={img1} className='sliderimg' />
        <img src={img2} className='sliderimg' />
      </AliceCarousel>
      <div></div>
    </div>
  )
}

export default Home
