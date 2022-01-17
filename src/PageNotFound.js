import { useEffect } from 'react';
const PageNotFound = () => {
 const a= useEffect(() => {
    alert("Hi")
  },[]);
  return (
    <div>
      <h1>Page not found</h1>
      {a}
    </div>
  )
}

export default PageNotFound
