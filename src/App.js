import './App.css'
import { nanoid } from 'nanoid'

import LearnMore from './LearnMore'
import img1 from './coffee_book.jpg'
import img2 from './peaches_spices.jpg'
import NavBar from './nav'
import Editable from './Editable'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import Home from './home'
import Receips from './Receips'
import AddReceips from './AddReceips'
import PageNotFound from './PageNotFound'

function App() {
  const [Color, setColor] = useState('#b26eff')
  const handel = () => {
    if (Color === '#b26eff') {
      setColor('#040')
    } else {
      setColor('#b26eff')
    }
  }
  const [details, setdetails] = useState([
    //setContacts
    {
      id: 1,
      image:
        'https://laughingsquid.com/wp-content/uploads/2019/12/cat-mountain-animalsinthings.jpg',
      name: 'Fafra',
      ings: 'apples',
    },
    {
      id: 2,
      image:
        'https://th.bing.com/th/id/OIP.xCG6sRhvXfzVTZCxpYeu8AHaFj?w=251&h=188&c=7&r=0&o=5&dpr=1.25&pid=1.7',
      name: 'pie',
      ings: 'Pineapples',
    },
    {
      id: 3,
      image:
        'https://th.bing.com/th/id/OIP.yYU2xGQwRoMEYfxmHOYXZwHaJ4?w=133&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
      name: 'cake',
      ings: 'onions',
    },
  ])
  const [addFormData, setAddFormData] = useState({
    image: '',
    name: '',
    ings: '',
  })
  const handelAddFormChange = (event) => {
    event.preventDefault()
    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }
  const handelAddSubmit = (event) => {
    event.preventDefault()
    const newContact = {
      id: nanoid(),
      image: addFormData.image,
      name: addFormData.name,
      ings: addFormData.ings,
    }
    const newContacts = [...details, newContact]
    setdetails(newContacts)
  }

  const title = 'This is just a title'
  return (
    <Router>
      <div className='App'>
        <NavBar handel={handel} />
        <Switch>
          <Route exact path='/'>
            <Home title={title} Color={Color} />
          </Route>
          <Route path='/Receips'>
            <Receips details={details} setdetails={setdetails} Color={Color} />
          </Route>
          <Route path='/AddReceips'>
            {/*pass a append statement to append value in array */}

            <AddReceips
              Color={Color}
              handelAddFormChange={handelAddFormChange}
              handelAddSubmit={handelAddSubmit}
            />
          </Route>
          <Route path='/LearnMore'>
            <LearnMore component={LearnMore} Color={Color} />
            {/*details={details} */}
          </Route>
          <Route path='/Editable'>
            <Editable Color={Color} />
          </Route>
          <Route path='*'>
            <PageNotFound Color={Color} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
