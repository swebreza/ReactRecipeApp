// const [addFormData,setAddFormData]=useState({
//   image:'',
//   name:'',
//   ings:'',
// })
// const handelAddFormChange=(event)=>{
//   event.preventDefault()
//   const fieldName=event.target.getAttribute('name')
//   const fieldValue=event.target.value;

//   const newFormData = {...addFormData};
//   newFormData[fieldName]=fieldValue;

//   setAddFormData(newFormData)

// }
//----------------------------------------------------------------------
// <form>
//         <div class='form'>
//           <div>
//             <div>
//               <label data-shrink='false' for='name' id='name-label'>
//                 Dish Name
//                 <span class=''> *</span>
//               </label>
//               <div class=''>
//                 <input id='name' name='name'     ='' type='text' />
//               </div>
//               <p>name is a      field</p>
//             </div>
//           </div>
//           <br />
//           <div>
//             <div>
//               <label>
//                 Dish picture link
//                 <span class='MuiInputLabel-asterisk MuiFormLabel-asterisk css-1xpaobf'>
//                    *
//                 </span>
//               </label>
//               <div class=''>
//                 <input
//                   aria-invalid='false'
//                   id='picturelink'
//                   name='picturelink'
//                       =''
//                   type='text'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <div>
//             <div>
//               <label
//                 data-shrink='false'
//                 for='ingredients'
//                 id='ingredients-label'
//               >
//                 Ingredients (separated by comma)
//                 <span> *</span>
//               </label>
//               <div>
//                 <input
//                   aria-invalid='false'
//                   id='ingredients'
//                   name='ingredients'
//                       =''
//                   type='text'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label data-shrink='false' for='receipe' id='receipe-label'>
//                 Instructions / steps to do (separated by full stop)
//                 <span> *</span>
//               </label>
//               <div>
//                 <input
//                   aria-invalid='false'
//                   id='receipe'
//                   name='receipe'
//                       =''
//                   type='text'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label data-shrink='false' for='notes' id='notes-label'>
//                 Notes / points to remember (separated by full stop)
//                 <span> *</span>
//               </label>
//               <div>
//                 <input
//                   aria-invalid='false'
//                   id='notes'
//                   name='notes'
//                       =''
//                   type='text'
//                   class=''
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label data-shrink='false' for='videolink' id='videolink-label'>
//                 Video link
//                 <span class=''> *</span>
//               </label>
//               <div class=''>
//                 <input
//                   aria-invalid='false'
//                   id='videolink'
//                   name='videolink'
//                       =''
//                   type='text'
//                   class=''
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <div>
//             <div>
//               <label
//                 class=''
//                 data-shrink='false'
//                 for='preptime'
//                 id='preptime-label'
//               >
//                 Prep time (Eg: 10mins)
//               </label>
//               <div class=''>
//                 <input
//                   aria-invalid='false'
//                   id='preptime'
//                   name='preptime'
//                   type='text'
//                   class=''
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 class=''
//                 data-shrink='false'
//                 for='cooktime'
//                 id='cooktime-label'
//               >
//                 cooking time needed (Eg: 50mins)
//               </label>
//               <div class=''>
//                 <input
//                   aria-invalid='false'
//                   id='cooktime'
//                   name='cooktime'
//                   type='text'
//                   class=''
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 class=''
//                 data-shrink='false'
//                 for='soakingtime'
//                 id='soakingtime-label'
//               >
//                 soaking time needed (Eg: 20mins)
//               </label>
//               <div>
//                 <input
//                   aria-invalid='false'
//                   id='soakingtime'
//                   name='soakingtime'
//                   type='text'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 data-shrink='false'
//                 for='fermentationtime'
//                 id='fermentationtime-label'
//               >
//                 fermentation time needed (Eg: 8hrs)
//               </label>
//               <div>
//                 <input
//                   aria-invalid='false'
//                   id='fermentationtime'
//                   name='fermentationtime'
//                   type='text'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 class='MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled MuiFormLabel-root MuiFormLabel-colorPrimary css-wibhjh'
//                 data-shrink='false'
//                 for='totaltime'
//                 id='totaltime-label'
//               >
//                 Total time needed (Eg: 2hrs)
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='totaltime'
//                   name='totaltime'
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label data-shrink='false' for='course' id='course-label'>
//                 course type
//                 <span class='MuiInputLabel-asterisk MuiFormLabel-asterisk css-1xpaobf'>
//                    *
//                 </span>
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='course'
//                   name='course'
//                       =''
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <div>
//             <div>
//               <label data-shrink='false' for='cuisine' id='cuisine-label'>
//                 Cuisine
//                 <span class='MuiInputLabel-asterisk MuiFormLabel-asterisk css-1xpaobf'>
//                    *
//                 </span>
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='cuisine'
//                   name='cuisine'
//                       =''
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <div>
//             <div>
//               <label data-shrink='false' for='servings' id='servings-label'>
//                 servings (Eg: 4 servings)
//                 <span class='MuiInputLabel-asterisk MuiFormLabel-asterisk css-1xpaobf'>
//                    *
//                 </span>
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='servings'
//                   name='servings'
//                       =''
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <div>
//             <div>
//               <label
//                 class='MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled MuiFormLabel-root MuiFormLabel-colorPrimary css-wibhjh'
//                 data-shrink='false'
//                 for='calories'
//                 id='calories-label'
//               >
//                 Calories in KCal (Kilo Calories)
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='calories'
//                   name='calories'
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 class='MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled MuiFormLabel-root MuiFormLabel-colorPrimary css-wibhjh'
//                 data-shrink='false'
//                 for='carbohydrates'
//                 id='carbohydrates-label'
//               >
//                 Carbohydrates in g (grams)
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='carbohydrates'
//                   name='carbohydrates'
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 class='MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled MuiFormLabel-root MuiFormLabel-colorPrimary css-wibhjh'
//                 data-shrink='false'
//                 for='protein'
//                 id='protein-label'
//               >
//                 Protein in g (grams)
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='protein'
//                   name='protein'
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 class='MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled MuiFormLabel-root MuiFormLabel-colorPrimary css-wibhjh'
//                 data-shrink='false'
//                 for='fat'
//                 id='fat-label'
//               >
//                 Fat in g (grams)
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='fat'
//                   name='fat'
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 class='MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled MuiFormLabel-root MuiFormLabel-colorPrimary css-wibhjh'
//                 data-shrink='false'
//                 for='sodium'
//                 id='sodium-label'
//               >
//                 Sodium in mg (milli grams)
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='sodium'
//                   name='sodium'
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 class='MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled MuiFormLabel-root MuiFormLabel-colorPrimary css-wibhjh'
//                 data-shrink='false'
//                 for='potassium'
//                 id='potassium-label'
//               >
//                 Potassium in mg (milli grams)
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='potassium'
//                   name='potassium'
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 class='MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled MuiFormLabel-root MuiFormLabel-colorPrimary css-wibhjh'
//                 data-shrink='false'
//                 for='fiber'
//                 id='fiber-label'
//               >
//                 Fiber in mg (milli grams)
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='fiber'
//                   name='fiber'
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 class='MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled MuiFormLabel-root MuiFormLabel-colorPrimary css-wibhjh'
//                 data-shrink='false'
//                 for='sugar'
//                 id='sugar-label'
//               >
//                 Sugar in mg (milli grams)
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='sugar'
//                   name='sugar'
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 class='MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled MuiFormLabel-root MuiFormLabel-colorPrimary css-wibhjh'
//                 data-shrink='false'
//                 for='calcium'
//                 id='calcium-label'
//               >
//                 Calcium in mg (milli grams)
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='calcium'
//                   name='calcium'
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 class='MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled MuiFormLabel-root MuiFormLabel-colorPrimary css-wibhjh'
//                 data-shrink='false'
//                 for='iron'
//                 id='iron-label'
//               >
//                 Iron in mg (milli grams)
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='iron'
//                   name='iron'
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 class='MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled MuiFormLabel-root MuiFormLabel-colorPrimary css-wibhjh'
//                 data-shrink='false'
//                 for='vitamina'
//                 id='vitamina-label'
//               >
//                 Vitamin A in IU (International Unit)
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='vitamina'
//                   name='vitamina'
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <div>
//             <div>
//               <label
//                 class='MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-filled MuiFormLabel-root MuiFormLabel-colorPrimary css-wibhjh'
//                 data-shrink='false'
//                 for='vitaminc'
//                 id='vitaminc-label'
//               >
//                 Vitamin C in mg (milli grams)
//               </label>
//               <div class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-c61f03'>
//                 <input
//                   aria-invalid='false'
//                   id='vitaminc'
//                   name='vitaminc'
//                   type='text'
//                   class='MuiFilledInput-input MuiInputBase-input css-1476h24'
//                   value=''
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           <br />
//           <button
//             class='MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root textbox css-1m7jtnw'
//             tabindex='0'
//             id='submit'
//             type='submit'
//             style={{
//               background: 'black',
//               color: 'white',
//               border: '2px solid white',
//             }}
//           >
//             ADD NEW RECEIPE<span class=''></span>
//           </button>
//           <br />
//         </div>
//       </form>
