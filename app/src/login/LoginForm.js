import React, {useState} from 'react';
import './login.css';

export default function LoginForm({ Login, error }) {
    const[details, setDetails] = useState({email:"", password:""});
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
  return (
    <div className="App">
    <form onSubmit={submitHandler} className="form">
        <div className='form-inner'>
            <h2 className='form-inner-h2'>Login</h2>
            {(error != "") ? ( <div className='error'>{error}</div> ) : ""}
            <div className='form-group'>
                <label htmlFor='email'>NMSU Email: </label>
                <input type="text" name="email" id="email" className="inputAndButton" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password: </label>
                <input type="password" name="password" id="password" className="inputAndButton" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="Login" className="inputAndButton"/>
        </div>
    </form>
    </div>
  )
}
