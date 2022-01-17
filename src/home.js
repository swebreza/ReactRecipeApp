/* eslint-disable jsx-a11y/alt-text */
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import img1 from './coffee_book.jpg'
import img2 from './peaches_spices.jpg'
import { useState, useEffect } from 'react'

const Home = (props) => {
  const handle = () => {
    alert('Hello')
  }
  const para = (Name) => {
    alert(`Parameter passed is ${Name}`)
  }

  // const data = [
  //   { id: 1, name: 'Apple', age: 21, favcolor: 'blue' },
  //   { id: 2, name: 'React', age: 24, favcolor: 'blue' },
  //   { id: 3, name: 'Samsung', age: 28, favcolor: 'Purple' },
  // ]
  // const listItems = data.map((d) => (
  //   <p key={d.id}>
  //     {d.name} is {d.age} years old in {d.favcolor} color dress
  //   </p>
  // ))

  // <h3>{listItems}</h3>
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1)
    }, 1000)
  })
  return (
    <div style={{ backgroundColor: props.Color }}>
      <h1>{props.title}</h1>
      <AliceCarousel autoPlay autoPlayInterval='3000'>
        <img src={img1} className='sliderimg' />
        <img src={img2} className='sliderimg' />
      </AliceCarousel>
      <div></div>
      <div style={{ padding: '3em' }}>
        <button onClick={handle} id='submit'>
          Say Hello
        </button>
        <br />
        <br />
        <button onClick={() => para('Anything')} id='submit'>
          passing Parameter
        </button>
      </div>

      <h1>I have rendered {count} times!</h1>
    </div>
  )
}

export default Home
