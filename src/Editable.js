import React from 'react'

import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const Editable = ({ editformdata, handeleditformchange, Color, textColor }) => {
  const location = useLocation()
  const { name, image, ings } = location.state
  // const [editFormData, setEditFormData] = useState({
  //   image: '',
  //   name: '',
  //   ings: '',
  // })
  // const [editContactId, setEditContactId] = useState(null)
  // const handleEditFormChange = (event) => {
  //   event.preventDefault()

  //   const fieldName = event.target.getAttribute('name')
  //   const fieldValue = event.target.value

  //   const newFormData = { ...editFormData }
  //   newFormData[fieldName] = fieldValue

  //   setEditFormData(newFormData)
  // }
  // const [addFormData, setAddFormData] = useState({
  //   image: '',
  //   name: '',
  //   ings: '',
  // })
  // const handleEditClick = (event, contact) => {
  //   event.preventDefault()
  //   setEditContactId(id)

  //   const formValues = {
  //     image: addFormData.image,
  //     name: addFormData.name,
  //     ings: addFormData.ings,
  //   }

  //   setEditFormData(formValues)
  // }
  return (
    <div style={{ backgroundColor: Color, color: textColor }}>
      <form>
        <div>
          <p>
            <span> Image</span>
            <input
              type='text'
              name='image'
              value={image}
              placeholder='Image'
              onChange={handeleditformchange}
            />
          </p>

          <p>
            <span>Name</span>
            <input
              type='text'
              name='name'
              value={name}
              placeholder='Name'
              onChange={handeleditformchange}
            />
          </p>

          <p>
            <span>Ingridense</span>
            <input
              type='text'
              name='ings'
              value={ings}
              placeholder='Ingridense'
              onChange={handeleditformchange}
            />
          </p>

          <button id='submit' type='submit' style={{ padding: '5px' }}>
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default Editable
