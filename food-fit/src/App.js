import './index.css'
import {Link, Route, Routes, useNavigate} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import CalorieTracker from './CalorieTracker'
import MealPlanner from './MealPlanner'
import Bmi from './Bmi'
import Home from './Home'
import NavBar from './NavBar'

export default function App(){

  return(
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/calorie_tracker' element={<CalorieTracker />} />
        <Route path='/meal_planner' element={<MealPlanner />} />
        <Route path='/bmi' element={<Bmi />} />
      </Routes>
    </>
  )
}