import { Link } from 'react-router-dom'

const NavBar = (props) => {
  // const [Color, setColor] = useState('#b26eff')
  return (
    <div id='st'>
      <Link id='nav' to='/'>
        Home
      </Link>

      <Link id='nav' to='/Receips'>
        All Receips
      </Link>
      <Link id='nav' to='/AddReceips'>
        Add Receips
      </Link>
      <Link id='nav' onClick={props.handel}>
        Mode
      </Link>
    </div>
  )
}

export default NavBar
