import './App.css'
import { nanoid } from 'nanoid'

import LearnMore from './LearnMore'

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
  const [textColor, settextColor] = useState('#000')
  const handel = () => {
    if (Color === '#b26eff') {
      settextColor('#fff')
      setColor('#000')
    } else {
      setColor('#b26eff')
      settextColor('#000')
    }
  }
  const [details, setdetails] = useState([
    {
      id: 1,
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets-ucg.meredithcorp.io%2F178ce7ac70e8b38781782030dca34b87%2F3851223.jpg&w=595&h=595&c=sc&poi=face&q=60',
      name: 'Balsamic Ravioli',
      ings: `½ cup walnuts, 1 (25 ounce) package store-bought ravioli, 2 tablespoons butter, 2 tablespoons balsamic vinegar, ¼ cup grated Parmesan cheese`,
    },
    {
      id: 2,
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F10%2F27%2FBeef-Stroganoff.jpg',
      name: 'Simple Beef Stroganoff',
      ings: `1 (8 ounce) package egg noodles, 1 pound ground beef, 1 (10.75 ounce) can fat free condensed cream of mushroom soup, 1 tablespoon garlic powder ,½ cup sour cream, salt and pepper to taste`,
    },
    {
      id: 3,
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F09%2F30%2F4482008_original.jpg',
      name: 'Tater Tots(R) Casserole',
      ings: `1 pound ground beef, 1 pinch salt and ground black pepper to taste,1 (10.75 ounce) can condensed cream of mushroom soup, 2 cups shredded Cheddar cheese, 1 (16 ounce) package frozen tater tots`,
    },
  ])
  const [addFormData, setAddFormData] = useState({
    image: '',
    name: '',
    ings: '',
  })
  const [editformdata, seteditformdata] = useState({
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
  const handeleditformchange = (event) => {
    event.preventDefault()
    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newformdata = { ...editformdata }
    newformdata[fieldName] = fieldValue
    seteditformdata(newformdata)
  }
  // const handleEditClick = (event) => {
  //   event.preventDefault()
  //   const formValues = {
  //     image: addFormData.image,
  //     name: addFormData.name,
  //     ings: addFormData.ings,
  //   }
  //   seteditformdata(formValues)
  // }
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

  const title = 'Recipe App'
  return (
    <Router>
      <div className='App'>
        <NavBar handel={handel} />
        <Switch>
          <Route exact path='/'>
            <Home title={title} Color={Color} textColor={textColor} />
          </Route>
          <Route path='/Receips'>
            <Receips
              details={details}
              setdetails={setdetails}
              Color={Color}
              textColor={textColor}
            />
          </Route>
          <Route path='/AddReceips'>
            {/*pass a append statement to append value in array */}

            <AddReceips
              Color={Color}
              textColor={textColor}
              handelAddFormChange={handelAddFormChange}
              handelAddSubmit={handelAddSubmit}
            />
          </Route>
          <Route path='/LearnMore'>
            <LearnMore
              component={LearnMore}
              Color={Color}
              textColor={textColor}
            />
            {/*details={details} */}
          </Route>
          <Route path='/Editable'>
            <Editable
              textColor={textColor}
              Color={Color}
              editformdata={editformdata}
              handeleditformchange={handeleditformchange}
            />
          </Route>
          <Route path='*'>
            <PageNotFound Color={Color} textColor={textColor} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
