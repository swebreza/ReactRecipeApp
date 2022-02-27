// import { useState } from 'react'

const AddReceips = ({
  handelAddSubmit,
  handelAddFormChange,
  Color,
  textColor,
}) => {
  // const [addFormData, setAddFormData] = useState({
  //   image: '',
  //   name: '',
  //   ings: '',
  // })
  // const handelAddFormChange = (event) => {
  //   event.preventDefault()
  //   const fieldName = event.target.getAttribute('name')
  //   const fieldValue = event.target.value

  //   const newFormData = { ...addFormData }
  //   newFormData[fieldName] = fieldValue

  //   setAddFormData(newFormData)
  // }
  // const handelAddSubmit = (event) => {
  //   event.preventDefault()
  //   const newContact = {
  //     id: nanoid(),
  //     image: addFormData.image,
  //     name: addFormData.name,
  //     ings: addFormData.ings,
  //   }
  //   const newContacts = [...details, newContact]
  //   setdetails(newContacts)
  // }

  return (
    <div style={{ backgroundColor: Color, color: textColor }}>
      <form onSubmit={handelAddSubmit}>
        <div>
          <p>
            <span> Image</span>
            <input type='text' name='image' onChange={handelAddFormChange} />
          </p>

          <p>
            <span>Name</span>
            <input type='text' name='name' onChange={handelAddFormChange} />
          </p>

          <p>
            <span>Ingridense</span>
            <input type='text' name='ings' onChange={handelAddFormChange} />
          </p>

          <button type='submit' id='myButton'>
            Submit
          </button>
        </div>
      </form>
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
      <br />
    </div>
  )
}

export default AddReceips
