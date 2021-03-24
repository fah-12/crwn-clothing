import './header-styling.scss';

import {Link} from 'react-router-dom'

import {ReactComponent as Logo} from '../../image/crown.svg'

import {auth} from '../firebase/firebase-utilities.js'

const Header=({CurrentUser})=>(

    <div className='header'>
  <Link to="/" className='logo-container'>
<Logo className='logo'/>
  </Link>

  <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
     

     {
       CurrentUser?
       <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
       :
       <Link className='option' to='signin'>SIGN IN</Link>
     }
  
</div>
</div>
  

)

export default Header;