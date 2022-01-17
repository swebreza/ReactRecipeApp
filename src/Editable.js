import React from 'react'
import { useState } from 'react'

import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const Editable = (props) => {
  const location = useLocation()
  const { name, id, image, ings } = location.state
  const [editFormData, setEditFormData] = useState({
    image: '',
    name: '',
    ings: '',
  })
  const [editContactId, setEditContactId] = useState(null)
  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }
  const [addFormData, setAddFormData] = useState({
    image: '',
    name: '',
    ings: '',
  })
  const handleEditClick = (event, contact) => {
    event.preventDefault()
    setEditContactId(id)

    const formValues = {
      image: addFormData.image,
      name: addFormData.name,
      ings: addFormData.ings,
    }

    setEditFormData(formValues)
  }
  return (
    <div style={{ backgroundColor: props.Color }}>
      <form>
        <div>
          <p>
            <span> Image</span>
            <input
              type='text'
              name='image'
              value={editFormData.image}
              onChange={handleEditFormChange}
            />
          </p>

          <p>
            <span>Name</span>
            <input
              type='text'
              name='name'
              value={editFormData.name}
              onChange={handleEditFormChange}
            />
          </p>

          <p>
            <span>Ingridense</span>
            <input
              type='text'
              name='ings'
              value={editFormData.ings}
              onChange={handleEditFormChange}
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
