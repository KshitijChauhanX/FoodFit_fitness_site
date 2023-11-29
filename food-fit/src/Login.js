import './index.css'
import { useNavigate } from 'react-router';

export default function Login(){
    
    let navigate = useNavigate(); 
    
    return (
    <>
        <div className="login">
            <h1 className="l-head">Login</h1>
            <label>Username</label>
            <input type="text"></input>
            <label>Password</label>
            <input type="text"></input> 
            <button className='btn' onClick={()=>navigate('/home')}>Sign In</button>
            <button className='btn-reg'>Register</button>
        </div>
    </>)
}