import {Link} from 'react-router-dom'
import logo from './assets/logo.png'

function NavBar(){
    return(
        <div className='navbar'>
            <img className='foodfit-logo' src={logo}></img>
            <div>
                <Link className='nav-ele' to='/home'>Home</Link>
            </div>
            <div>
                <Link className='nav-ele' to='/calorie_tracker'>Calorie Tracker</Link>
            </div>
            <div>
                <Link className="nav-ele" to='/meal_planner'>Meal Planner</Link>
            </div>
            <div>
                <Link className='nav-ele' to='/bmi'>BMI Calculator</Link>
            </div>
      </div>
    )
}

export default NavBar